export const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR = "https://i.pravatar.cc/40";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + TMDB_API_KEY,
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const BG_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/BD-en-20250616-TRIFECTA-perspective_a237910f-1432-435d-ba49-45bf0ba10a60_large.jpg";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  {
    identifier: "bangla",
    name: "Bangla",
  },
  { identifier: "spanish", name: "Spanish" },
];
