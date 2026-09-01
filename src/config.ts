export const SITE_TITLE = "Al-Salafiyyah";
export const SITE_DESCRIPTION = "Sayings of the Salaf and Scholars of the Sunnah";
export const PAGE_AUDIOS_TITLE = "Audio Fatwas";
export const PAGE_FATWAS_TITLE = "Fatwas";
export const PAGE_MUQOLAT_TITLE = "Muqolat";
export const PAGE_VIDEOS_TITLE = "Video Fatwas";
export const PAGE_SERMONS_TITLE = "Sermons";
export const PAGE_BIOGRAPHY_TITLE = "Scholars' Biographies";

// Pagination Settings 
export const POSTS_PER_PAGE = 5;

// Site Elements
export const SITE_LOGO = "/logo.svg";
export const SITE_FAVICON = "/favicon.ico";
export const NEXT_TITLE = "Next";
export const PREV_TITLE = "Previous";
export const NAVIGATION_TITLE = "Navigation";
export const RECENT_FATWAS_TITLE = "Recent Fatwas";
export const SEARCH_TITLE = "Search";
export const SLOGAN_TITLE = "The Manhaj of the Salaf";
export const READ_MORE_TITLE = "Read More";
export const SHOW_MORE_TITLE = "Show More";
export const VIEW_ALL_TITLE = "View All";
export const SELECTED_FATWA_TITLE = "Selected Fatwa";

// Index Widget Settings 
export const RECENT_FATWAS_COUNT_INDEX = 5;

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

// Alifta Scholars
export const SCHOLAR_GROUPS = {
  group1: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/binbaz" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/afifi" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/ghudayyan" },
      { name: "Shaykh Abdullah ibn Qa'ud", url: "/biography/abdullah-ibn-qaud" }
    ]
  },

  group2: {
    chairman: [
      { name: "Shaykh Abdul-Aziz Ibn Baz", url: "/biography/binbaz" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Aziz Aal Al-Shaykh", url: "/biography/abdul-aziz-al-shaykh" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/ghudayyan" },
      { name: "Shaykh Salih Al-Fawzan", url: "/biography/salih-al-fawzan" },
      { name: "Shaykh Bakr Abu Zayd", url: "/biography/bakr-abu-zayd" }
    ]
  },

  group6: {
    chairman: [
      { name: "Shaykh Ibn Baz", url: "/biography/binbaz" }
    ],
    deputy_chairman: [
      { name: "Shaykh Abdul-Razzaq Afifi", url: "/biography/afifi" }
    ],
    members: [
      { name: "Shaykh Abdullah ibn Ghudayyan", url: "/biography/ghudayyan" }
    ]
  }

};
