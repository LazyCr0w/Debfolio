import { USER } from "@/features/profile/data/user";
// import type { NavItem } from "@/types/nav"; // Commented out - navigation removed from header

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://sumon-deb.vercel.app",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

// Navigation removed from header - keeping for potential future use
// export const MAIN_NAV: NavItem[] = [
//   {
//     title: "Projects",
//     href: "/#projects",
//   },
//   {
//     title: "About",
//     href: "/#about",
//   },
//   {
//     title: "Stack",
//     href: "/#stack",
//   },
//   {
//     title: "Certifications",
//     href: "/#certs",
//   },
// ];

// GitHub repo info
export const SOURCE_CODE_GITHUB_REPO = "LazyCr0w/debfolio";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/LazyCr0w/debfolio";

export const UTM_PARAMS = {
  utm_source: "sumon-deb.vercel.app",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
