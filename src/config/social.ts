import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Mail",
        href: "mailto:antanas.buracas@gmail.com",
        linkTitle: `Send an email to Antanas Buračas`,
        isActive: true,
    },
    {
        name: "ResearchGate",
        href: "https://www.researchgate.net/profile/Antanas-Buracas",
        linkTitle: `Antanas Buračas on ResearchGate`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0000-0001-5673-9283",
        linkTitle: `Antanas Buračas on ORCID`,
        isActive: true,
    },
    {
        name: "Institution",
        href: "https://www.mruni.eu/en/",
        linkTitle: `Mykolas Romeris University`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Mail: "Mail",
    ResearchGate: "ResearchGate",
    ORCID: "ORCID",
    Institution: "Institution",
    RSS: "RSS",
};
