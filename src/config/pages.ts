import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About Me",
        subtitle: "",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "",
        isActive: false,
    },
    publications: {
        title: "Publications",
        subtitle: "Books, monographs, dictionaries, and research papers.",
        isActive: true,
    },
    talks: {
        title: "Talks & Conference Reports",
        subtitle: "Congress papers, symposia, and international conference presentations.",
        isActive: true,
    },
    projects: {
        title: "Projects",
        subtitle: "Long-running reference, terminology, and cultural-heritage projects.",
        isActive: true,
    },
    teaching: {
        title: "Teaching",
        subtitle: "University lecture courses in economics and finance.",
        isActive: true,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: true,
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "Academic and professional history.",
        isActive: true,
    },
};
