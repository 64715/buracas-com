import type { Theme, ThemeColors, ThemeName } from "../types/themes";

export { type Theme, type ThemeName, type ThemeColors };

export const THEMES: Record<string, Theme> = {
    light_default: {
        background: "#f9fafb",
        foreground: "#111827",
        accent: "#3b82f6",
        muted: "#6b7280",
        border: "#e5e7eb",
        surface: "#f9fafb",
        isDark: false,
    },
    dark_default: {
        background: "#212737",
        foreground: "#eaedf3",
        accent: "#ff6b01",
        muted: "#343f60",
        border: "#ab4b08",
        surface: "#212737",
        isDark: true,
    },
    light_notepad: {
        isDark: false,
        background: '#fdf8e9',
        surface: '#fdf8e9',
        foreground: '#29231c',
        muted: '#736658',
        border: '#eaddc6',
        accent: '#b84c30',
    },
    dark_notepad: {
        isDark: true,
        background: '#241f1c',
        surface: '#241f1c',
        foreground: '#e6dfd3',
        muted: '#8a7d71',
        border: '#3d342d',
        accent: '#d97757',
    },
    // Palette derived from the original buracas.com static site:
    // page #d8d5c6, header/footer band #A4A089, content #8E8A71,
    // black menu bar, header text #EAD7A9, cream links, gold hover #C49743.
    light_buracas: {
        isDark: false,
        background: '#d8d5c6',
        surface: '#e7e4d8',
        foreground: '#2a271e',
        muted: '#6f6a54',
        border: '#b6b1a0',
        accent: '#97651a',
    },
    dark_buracas: {
        isDark: true,
        background: '#2e2c23',
        surface: '#38352a',
        foreground: '#ece4d0',
        muted: '#b0a78c',
        border: '#4a4638',
        accent: '#cf9f4c',
    },
};
