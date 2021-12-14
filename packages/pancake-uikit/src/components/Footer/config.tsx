import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      // {
      //   label: "Contact",
      //   href: "https://docs.pancakeswap.finance/contact-us",
      // },
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
      // {
      //   label: "CAKE",
      //   href: "https://docs.pancakeswap.finance/tokenomics/cake",
      // },
      // {
      //   label: "—",
      // },
      // {
      //   label: "Online Store",
      //   href: "https://pancakeswap.creator-spring.com/",
      //   isHighlighted: true,
      // },
    ],
  },
  // {
  //   label: "Help",
  //   items: [
  //     {
  //       label: "Customer",
  //       href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
  //     },
  //     {
  //       label: "Troubleshooting",
  //       href: "https://docs.pancakeswap.finance/help/troubleshooting",
  //     },
  //     {
  //       label: "Guides",
  //       href: "https://docs.pancakeswap.finance/get-started",
  //     },
  //   ],
  // },
  {
    label: "Developers",
    items: [
      // {
      //   label: "Github",
      //   href: "https://github.com/crowfi",
      // },
      {
        label: "Documentation",
        href: "https://docs.crowfi.app/",
      },
      // {
      //   label: "Bug Bounty",
      //   href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      // },
      // {
      //   label: "Audits",
      //   href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      // },
      {
        label: "Careers",
        href: "https://docs.crowfi.app/extras/careers",
      },
    ],
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
  // {
  //   label: "Instagram",
  //   icon: "Instagram",
  //   href: "https://instagram.com/smartypay",
  // },
  // {
  //   label: "Github",
  //   icon: "Github",
  //   href: "https://github.com/crowfi/",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
