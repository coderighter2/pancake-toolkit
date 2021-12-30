import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface NomicsLogoProps extends SvgProps {
  isDark: boolean;
}


const NomicsLogo: React.FC<NomicsLogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <svg viewBox="0 0 60 60" {...props}><g fill-rule="nonzero" fill="none"><path d="M13.487964.025067 C6.015456.130506.010218 6.212755 0 13.686 v32.628 c-.00225 5.535029 3.331107 10.525988 8.44479 12.644192 5.113684 2.118204 10.999884.946194 14.91221-2.969192 l9.287-9.289c.22107 7.469981 6.395528 13.380372 13.868036 13.274933 C53.984544 59.869494 59.989782 53.787245 60 46.314 V13.686c.00225-5.535028-3.331107-10.525988-8.44479-12.644192 C46.441525-1.076396 40.555325.095614 36.643 4.011 L27.356 13.3C27.13493 5.830018 20.960472-.080372 13.487964.025067z" fill="hsla(355, 100%, 50%, 1)"></path><ellipse fill="#FFFFFF" rx="13.686" ry="13.686" cx="13.686" cy="46.314"></ellipse></g></svg>
  );
};

export default React.memo(NomicsLogo, (prev, next) => prev.isDark === next.isDark);
