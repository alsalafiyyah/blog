export const SITE_TITLE = "Fawaid";
export const SITE_DESCRIPTION = "Sayings of the Salaf and Scholars of the Sunnah";

// Pagination
export const POSTS_PER_PAGE = 2;
export const RECENT_FATWAS_COUNT_INDEX = 2;

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
