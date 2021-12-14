import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { CertikLogoIcon,CertikLogoTextIcon } from "../../../components/Svg";

interface Props {
  isDark: boolean;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 100px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const CertikLogo: React.FC<Props> = ({ isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <CertikLogoIcon className="mobile-icon" isDark={isDark} />
      <CertikLogoTextIcon className="desktop-icon" isDark={isDark} />
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" target="_blank" href={href} aria-label="Certik">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Certik">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(CertikLogo, (prev, next) => prev.isDark === next.isDark);
