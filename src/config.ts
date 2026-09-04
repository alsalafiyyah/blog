export const SITE_TITLE = "Al-Salafiyyah";
export const SITE_DESCRIPTION = "Sayings of the Salaf and Scholars of the Sunnah";
export const PAGE_AUDIOS_TITLE = "Audio Fatwas";
export const PAGE_FATWAS_TITLE = "Fatwas";
export const PAGE_MUQOLAT_TITLE = "Muqolat";
export const PAGE_VIDEOS_TITLE = "Video Fatwas";
export const PAGE_SERMONS_TITLE = "Sermons";
export const PAGE_BIOGRAPHY_TITLE = "Scholars' Biographies";

// Pagination Settings 
export const POSTS_PER_PAGE = 10;
export const MUQOLAT_PER_PAGE = 10;
export const AUDIOS_PER_PAGE = 10;
export const VIDEOS_PER_PAGE = 10;
export const SERMONS_PER_PAGE = 10;
export const SCHOLAR_PER_PAGE = 10;
export const CATEGORY_PER_PAGE = 10;
export const BIOGRAPHY_PER_PAGE = 10;
export const RECENT_FATWAS_COUNT_INDEX = 5;
export const RECENT_FATWAS_COUNT_SIDEBAR = 4;

// Site Elements
export const SITE_LOGO = "/logo.svg";
export const SITE_FAVICON = "/favicon.ico";
export const NEXT_TITLE = "Next";
export const PREV_TITLE = "Previous";
export const NAVIGATION_TITLE = "Navigation";
export const RECENT_FATWAS_TITLE = "Recent Fatwas";
export const SEARCH_TITLE = "Search";
export const SEARCH_PLACEHOLDER_TITLE = "Search...";
export const SLOGAN_TITLE = "The Manhaj of the Salaf";
export const READ_MORE_TITLE = "Read More";
export const SHOW_MORE_TITLE = "Show More";
export const SHOW_LESS_TITLE = "Show Less";
export const VIEW_ALL_TITLE = "View All";
export const SELECTED_FATWA_TITLE = "Selected Fatwa";
export const VIEW_FULL_TITLE = "Click to View Full Image";
export const PAGE_404_TITLE = "Page Not Found";
export const PAGE_404_HEADER = "404";
export const PAGE_404_TEXT = "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.";

// URLS settings
export const SITE_URL = "https://alsalafiyyah.github.io/blog/";
export const FATWA_URL = "https://alsalafiyyah.github.io/blog/fatwas/";
export const CATEGORY_URL = "https://alsalafiyyah.github.io/blog/category/";
export const SEARCH_URL = "https://alsalafiyyah.github.io/blog/search/";
export const BIOGRAPHY_URL = "https://alsalafiyyah.github.io/blog/biography/";

// Navbar/Mobile Sidebar Menu
export const NAV_ITEMS = [
  { label: "Fatwas", href: "/blog/fatwas/" },
  { label: "Audios", href: "/blog/audios/" },
  { label: "Videos", href: "/blog/videos/" },
  { label: "Biographies", href: "/blog/biography/" },
  { label: "Sermons", href: "/blog/sermon/" },
  { label: "Muqolat", href: "/blog/muqolat/" },
];

// Bottom Footer Menu
export const FOOTER_MENU = [
  { label: "About", href: "/blog/about" },
  { label: "Contact", href: "/blog/contact/" },
  { label: "Instagram", href: "https://instagram.com/alsalafiyyah" },
];

export const INDEX_FEATURED_TITLE = "The Truth Behind the Circulated Image of Imam Muhammad bin Abd al-Wahhab"
export const INDEX_FEATURED_TEXT = `
<p>The text in the provided image translates as follows:</p>
<p>On the right side (False Claim): An alleged picture of the renewer Imam Muhammad ibn Abd al-Wahhab, 
may Allah have mercy on him, is being circulated across social media platforms. The image shows 
a person sitting on a chair, who they claim is Imam Muhammad ibn Saud, may Allah have mercy on him, 
and another standing beside him, who they claim is Imam Muhammad ibn Abd al-Wahhab, may Allah have 
mercy on him.</p>
<p>On the left side (The Truth): This information is incorrect. The person sitting on the chair is Sheikh 
Abdullah bin Isa bin Ali Al Khalifa, a son of the ruler of Bahrain, and not Imam Muhammad ibn Saud... 
It is worth noting that the first photograph was taken in 1826, and the invention of photography was 
announced on August 19, 1839.</p>
Source: <a target="_blank" class="text-red-600" href="https://mujaddid.net/%d8%b5%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%a5%d9%85%d8%a7%d9%85-%d8%a7%d9%84%d9%85%d8%ac%d8%af%d8%af-%d9%85%d8%ad%d9%85%d8%af%d8%a8%d9%86-%d8%b9%d8%a8%d8%af%d8%a7%d9%84%d9%88%d9%87%d8%a7%d8%b8-%d8%a7/">صورة الإمام محمد بن عبدالوهاب الفوتوغرافية بين الكذب والحقيقة؟!</a>
`;

// Alifta Scholars
export const SCHOLAR_GROUPS = {
  group1: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/ibn-baz" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/abdul-razzaq-afifi" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/abdullah-ibn-ghudayyan" },
      { name: "Shaykh Abdullah ibn Qa'ud", url: "/biography/abdullah-ibn-qaud" }
    ]
  },

  group2: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/ibn-baz" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Aziz Aal Al-Shaykh", url: "/biography/abdul-aziz-al-shaykh" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/abdullah-ibn-ghudayyan" },
      { name: "Shaykh Salih Al-Fawzan", url: "/biography/salih-ibn-fawzan" },
      { name: "Shaykh Bakr Abu Zayd", url: "/biography/bakr-abu-zayd" }
    ]
  },

  group3: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/ibn-baz" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/abdul-razzaq-afifi" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/abdullah-ibn-ghudayyan" },
      { name: "Shaykh Abdullah ibn Muni'", url: "/biography/abdullah-ibn-muni" }
    ]
  },

  group4: {
    chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/abdul-razzaq-afifi" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/abdullah-ibn-ghudayyan" },
      { name: "Shaykh Abdullah ibn Muni'", url: "/biography/abdullah-ibn-muni" }
    ]
  },

  group5: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Aal al-Shaykh", url: "/biography/abdul-aziz-al-shaykh" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/abdullah-ibn-ghudayyan" },
      { name: "Shaykh Salih al-Fawzan", url: "/biography/salih-ibn-fawzan" }, // Added missing comma
      { name: "Shaykh Bakr Abu Zayd", url: "/biography/bakr-abu-zayd" }
    ]
  },

  group6: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/ibn-baz" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/abdul-razzaq-afifi" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/abdullah-ibn-ghudayyan" }
    ]
  },

  group7: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/ibn-baz" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/abdul-razzaq-afifi" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/abdullah-ibn-ghudayyan" },
      { name: "Shaykh Abdul-Aziz Aal al-Shaykh", url: "/biography/abdul-aziz-al-shaykh" },
      { name: "Shaykh Salih al-Fawzan", url: "/biography/salih-ibn-fawzan" },
      { name: "Shaykh Bakr Abu Zayd", url: "/biography/bakr-abu-zayd" }
    ]
  },

  group8: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/ibn-baz" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/abdullah-ibn-ghudayyan" }
    ]
  },

  group9: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/ibn-baz" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/abdul-razzaq-afifi" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Qa'ud", url: "/biography/abdullah-ibn-qaud" }
    ]
  },

  group10: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/ibn-baz" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Qa'ud", url: "/biography/abdullah-ibn-qaud" }
    ]
  },

  group11: {
    chairman: [
      { name: "Shaykh Ibrahim ibn Muhammad Aal al-Shaykh", url: "/biography/ibrahim-ibn-muhammad-al-shaykh" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/abdul-razzaq-afifi" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Muni'", url: "/biography/abdullah-ibn-muni" }
    ]
  },

  group12: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/ibn-baz" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/abdul-razzaq-afifi" }
    ]
  },

  group13: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/ibn-baz" }
    ],
    members: [
      { name: "Shaykh Abdul-Aziz Aal al-Shaykh", url: "/biography/abdul-aziz-al-shaykh" },
      { name: "Shaykh Salih al-Fawzan", url: "/biography/salih-ibn-fawzan" },
      { name: "Shaykh Bakr Abu Zayd", url: "/biography/bakr-abu-zayd" }
    ]
  },

  group14: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/ibn-baz" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/abdullah-ibn-ghudayyan" },
      { name: "Shaykh Abdul-Aziz Aal al-Shaykh", url: "/biography/abdul-aziz-al-shaykh" },
      { name: "Shaykh Salih al-Fawzan", url: "/biography/salih-ibn-fawzan" },
      { name: "Shaykh Bakr Abu Zayd", url: "/biography/bakr-abu-zayd" }
    ]
  },

  group15: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/ibn-baz" }
    ],
    members: [
      { name: "Shaykh Abdul-Aziz Aal al-Shaykh", url: "/biography/abdul-aziz-al-shaykh" },
      { name: "Shaykh Salih al-Fawzan", url: "/biography/salih-ibn-fawzan" }
    ]
  },

  group16: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Aal al-Shaykh", url: "/biography/abdul-aziz-al-shaykh" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/abdul-razzaq-afifi" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/abdullah-ibn-ghudayyan" },
      { name: "Shaykh Salih al-Fawzan", url: "/biography/salih-ibn-fawzan" },
      { name: "Shaykh Bakr Abu Zayd", url: "/biography/bakr-abu-zayd" }
    ]
  },

  group17: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Aal al-Shaykh", url: "/biography/abdul-aziz-al-shaykh" }
    ],
    members: [
      { name: "Shaykh Salih al-Fawzan", url: "/biography/salih-ibn-fawzan" },
      { name: "Shaykh Bakr Abu Zayd", url: "/biography/bakr-abu-zayd" }
    ]
  },

  group18: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Aal al-Shaykh", url: "/biography/abdul-aziz-al-shaykh" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/abdullah-ibn-ghudayyan" },
      { name: "Shaykh Abdullah ibn Qa'ud", url: "/biography/abdullah-ibn-qaud" }
    ]
  },

  group19: {
    chairman: [
      { name: "Shaykh Abdul-Aziz ibn Baz", url: "/biography/ibn-baz" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/abdul-razzaq-afifi" }
    ],
    members: [
      { name: "Shaykh Abdul-Aziz Aal al-Shaykh", url: "/biography/abdul-aziz-al-shaykh" }, // Added missing comma
      { name: "Shaykh Salih al-Fawzan", url: "/biography/salih-ibn-fawzan" },
      { name: "Shaykh Bakr Abu Zayd", url: "/biography/bakr-abu-zayd" }
    ]
  },

  group20: {
    chairman: [
      { name: "Shaykh Ibrahim ibn Muhammad Aal al-Shaykh", url: "/biography/ibrahim-ibn-muhammad-al-shaykh" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/abdul-razzaq-afifi" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/abdullah-ibn-ghudayyan" }, // Fixed typo and added comma
      { name: "Shaykh Abdullah ibn Muni'", url: "/biography/abdullah-ibn-muni" }
    ]
  },

  group21: {
    chairman: [
      { name: "Shaykh Salih al-Fawzan", url: "/biography/salih-ibn-fawzan" }
    ],
    members: [
      { name: "Shaykh Muhammad ibn hasan ibn Abdul-Rahman Aal Al-Shaykh", url: "/biography/muhammad-ibn-hasan-al-shaykh" },
      { name: "Shaykh Saad ibn Naseer ibn Abdul-Aziz Al-Shathri", url: "/biography/saad-ibn-nasir" },
      { name: "Shaykh Abdul Salam ibn Abdullah ibn Muhammad Al-Sulaiman", url: "/biography/abdul-salam-al-sulaiman" }
    ]
  }
};