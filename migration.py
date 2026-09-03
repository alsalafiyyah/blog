from datetime import date
from pathlib import Path
import re
import frontmatter
import yaml


# --- Custom list class to force [item1, item2] flow style ---
class FlowList(list):
  pass


def flow_list_representer(dumper, data):
  return dumper.represent_sequence(
      "tag:yaml.org,2002:seq", data, flow_style=True
  )


yaml.add_representer(FlowList, flow_list_representer, Dumper=yaml.SafeDumper)
yaml.add_representer(FlowList, flow_list_representer, Dumper=yaml.Dumper)
# -----------------------------------------------------------


def clean_and_format_posts(directory_path):
  target_dir = Path(directory_path).expanduser()

  if not target_dir.exists():
    print(f"Error: Directory not found -> {target_dir}")
    return

  # Extract folder name as fallback scholar (e.g., 'ibn-uthaymeen' from 'src/content/fatwas/ibn-uthaymeen')
  folder_scholar_slug = target_dir.name.lower()

  keys_to_remove = ["layout", "active", "note", "published"]

  scholar_mapping = {
      "ibn-uthaymeen": "Shaykh Muhammad ibn Salih al-Uthaymeen",
      "bin-baz": "Shaykh Abdul-Aziz ibn Baz",
      "al-albani": "Shaykh Muhammad Nasiruddin al-Albani",
  }

  date_prefix_regex = re.compile(r"^\d{4}-\d{2}-\d{2}-(.*\.md)$")
  today_str = date.today().isoformat()

  print(f"Processing Markdown files in: {target_dir}\n" + "-" * 40)

  for file_path in target_dir.glob("*.md"):
    filename = file_path.name

    try:
      post = frontmatter.load(file_path, encoding="utf-8")

      # 1. Remove unwanted keys
      for key in keys_to_remove:
        post.metadata.pop(key, None)

      # 2. Check and add 'date' if missing
      if "date" not in post.metadata or not post.metadata["date"]:
        post.metadata["date"] = today_str

      # 3. Force 'hijri' to be a string
      if "hijri" in post.metadata:
        post.metadata["hijri"] = str(post.metadata["hijri"])

      # 4. Handle category formatting (Force inline bracket style)
      if "category" in post.metadata:
        cat = post.metadata["category"]
        if isinstance(cat, str):
          cat = [cat]
        if isinstance(cat, list):
          post.metadata["category"] = FlowList(cat)

      # 5. Handle 'tags' -> 'scholar' & 'shaykh' conversion
      scholar_slug = None

      if "tags" in post.metadata:
        tags = post.metadata.pop("tags")
        if isinstance(tags, list) and len(tags) > 0:
          scholar_slug = tags[0]
        elif isinstance(tags, str):
          scholar_slug = tags

      # If no tags exist in the file, fallback to using the folder name slug
      if not scholar_slug:
        scholar_slug = folder_scholar_slug

      # Set scholar and map to full shaykh name
      post.metadata["scholar"] = scholar_slug
      if scholar_slug in scholar_mapping:
        post.metadata["shaykh"] = scholar_mapping[scholar_slug]
      else:
        post.metadata["shaykh"] = (
            f"Shaykh {scholar_slug.replace('-', ' ').title()}"
        )

      # 6. Write back using direct safe_dump to respect custom styles
      yaml_header = yaml.safe_dump(
          post.metadata, sort_keys=False, allow_unicode=True
      ).strip()
      updated_file_content = f"---\n{yaml_header}\n---\n{post.content}"

      file_path.write_text(updated_file_content, encoding="utf-8")
      print(f"[Frontmatter Updated] {filename}")

    except Exception as e:
      print(f"Error processing frontmatter for {filename}: {e}")
      continue

    # 7. Rename file (remove YYYY-MM-DD- prefix)
    match = date_prefix_regex.match(filename)
    if match:
      new_filename = match.group(1)
      new_file_path = file_path.with_name(new_filename)

      if not new_file_path.exists():
        file_path.rename(new_file_path)
        print(f"[Renamed] {filename} -> {new_filename}")
      else:
        print(f"[Skipped Rename] Target already exists: {new_filename}")

  print("-" * 40)
  print("Migration complete!")


if __name__ == "__main__":
  # Change target path to point to the specific scholar folder
  target_path = "src/content/fatwas/ibn-uthaymeen"
  clean_and_format_posts(target_path)