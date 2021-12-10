import { Colors } from "./types";

export const baseColors = {
  failure: "#EA0617", // #ED4B9E
  primary: "#01454B;", // #1FC7D4
  primaryBright: "#205d8f",  // #53DEE9
  primaryDark: "#074375",  // #0098A1
  secondary: "#42BFDD",  // #7645D9
  success: "#008000", // #31D0AA
  warning: "#e0ae0e", // FFB237
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#ebf0f0", // "#452a7a", when a modal popups
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

// export const lightColors: Colors = {
//   ...baseColors,
//   ...additionalColors,
//   background: "#FAF9FA",
//   backgroundDisabled: "#E9EAEB",
//   backgroundAlt: "#FFFFFF",
//   backgroundAlt2: "rgba(255, 255, 255, 0.7)",
//   cardBorder: "#E7E3EB",
//   contrast: "#191326",
//   dropdown: "#F6F6F6",
//   dropdownDeep: "#EEEEEE",
//   invertedContrast: "#FFFFFF",
//   input: "#eeeaf4",
//   inputSecondary: "#d7caec",
//   tertiary: "#EFF4F5",
//   text: "#280D5F",
//   textDisabled: "#BDC2C4",
//   textSubtle: "#3e3c3c",   // change into gray before #7A6EAA
//   disabled: "#E9EAEB",
//   gradients: {
//     bubblegum: "faf9fa", //"linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",          warna untuk page header
//     inverseBubblegum: "faf9fa", //"linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",  warna untuk page header
//     cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
//     blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
//     violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
//     violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
//     gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
//   },
// };

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#084B83",   // Purple, as Font Color H1 or title and button
  background: "#f1f6f7",  // as background of content or page
  backgroundDisabled: "#cedcde",
  backgroundAlt: "#f1f6f7",    // as top Menu Bar
  backgroundAlt2: "#f1f6f7",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#cedcde",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#e6ebeb",
  text: "#F9F6FF",     // font color on page or content, before: #F4EEFF
  textDisabled: "#666171",
  textSubtle: "#38a169",   // font color on Menu Bar top
  disabled: "#524B63",
  gradients: {
    bubblegum: "08060B", // "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",         warna untuk page header
    inverseBubblegum: "08060B", // "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",  warna untuk page header
    cardHeader: "linear-gradient(166.77deg, #ebf5f7 0%, #dcf1f5 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};


export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#05757b",   // Purple, as Font Color H1 or title and button
  background: "#f1f6f7",  // as background of content or page
  backgroundDisabled: "#cedcde",
  backgroundAlt: "#f1f6f7;",    // as top Menu Bar
  backgroundAlt2: "#f1f6f7", // submenu itmes
  cardBorder: "#d7e0e0",
  contrast: "#FFFFFF",
  dropdown: "#cedcde",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#fff",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#9ac1c5",
  text: "#050505",     // font color on page or content, before: #F4EEFF
  textDisabled: "#666171",
  textSubtle: "#01454B;",   // font color on Menu Bar top
  disabled: "#524B63",
  gradients: {
    bubblegum: "08060B", // "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",         warna untuk page header
    inverseBubblegum: "08060B", // "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",  warna untuk page header
    cardHeader: "linear-gradient(166.77deg, #ebf5f7 0%, #ebf5f7 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
