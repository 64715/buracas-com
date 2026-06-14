import type { SiteConfig, ThemeConfig, SettingsConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://buracas.com/",
    author: "Antanas Buračas",
    desc: "Personal academic portfolio of Prof. Antanas Buračas — Academician of the Lithuanian Academy of Sciences, economist, and originator of metaeconomics.",
    title: "Antanas Buračas",
    ogImage: "foto.jpg",
    postPerPage: 5,
    favicon: "/favicon.svg",
    lang: "en",
};

export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true,
    themeLight: "light_buracas",
    themeDark: "dark_buracas",
};

export const SETTINGS: SettingsConfig = {
    showTagsInNavbar: true,
    showRSSInFooter: true,
    addDevToolsInProduction: false,
};

const umami: UmamiAnalyticsConfig = {
    websiteId: "",
    src: "https://cloud.umami.is/script.js",
}

export const ANALYTICS: AnalyticsConfig = {
    ga4Id: "",
    umami: umami
};
