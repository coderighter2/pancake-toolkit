import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledText,
  StyledFooterMenuBlank,
  StyledFooterMenu
} from "./styles";
import { FooterProps } from "./types";
import { LogoWithTextIcon } from "../Svg";

import { footerLinks } from "./config";
import SocialLinks from "./Components/SocialLinks";


const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  // buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon isDark width="130px" />
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start">
              {footerLinks?.map((item) => (
                <StyledList key={item.label}>
                  <StyledListItem>{item.label}</StyledListItem>
                  {item.items?.map(({ label, href, isHighlighted = false }) => (
                    <StyledListItem key={label}>
                      {href ? (
                        <Link
                          href={href}
                          target="_blank"
                          rel="noreferrer noopener"
                          color={isHighlighted ? baseColors.warning : darkColors.text}
                          bold={false}
                        >
                          {label}
                        </Link>
                      ) : (
                        <StyledText>{label}</StyledText>
                      )}
                    </StyledListItem>
                  ))}
                  { item.hasSocialItems &&
                  (
                    <StyledListItem>
                      <SocialLinks mt="20px" iconWidth="30px" />
                    </StyledListItem>
                  )
                  }
                  
                </StyledList>
              ))}
              <Box display={["none", null, "block"]}>
                <Link href="/" aria-label="CrowFi home page">
                  <LogoWithTextIcon isDark width="160px" />
                </Link>
              </Box>
        </Flex>
        
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
