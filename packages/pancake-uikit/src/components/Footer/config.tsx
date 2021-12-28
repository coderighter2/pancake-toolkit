import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Roadmap",
        href: "https://docs.crowfi.app/roadmap",
      },
      {
        label: "Blog",
        href: "https://crowfiapp.medium.com/",
      },
      {
        label: "Community",
        href: "https://t.me/crowfi",
      },
      {
        label: "Whitepaper",
        href: "https://docs.crowfi.app/extras/whitepaper",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Documentation",
        href: "https://docs.crowfi.app/",
      },
      {
        label: "Careers",
        href: "https://docs.crowfi.app/extras/careers",
      },
    ],
    hasSocialItems: true
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/crowfi_",
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://www.reddit.com/r/CrowFi/",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/crowfi"
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
