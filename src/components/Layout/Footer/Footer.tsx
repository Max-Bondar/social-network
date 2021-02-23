import React from 'react';
import { FlexBoxStyled } from 'shared-components';
import { FooterStyled, LogoIconStyled, InnerWrapStyled } from './Footer.styled';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyled>
      <InnerWrapStyled hasSidePaddingMobile>
        <FlexBoxStyled alignItems="center" as="p">
          <LogoIconStyled />
          &copy; {currentYear}. An interactive learning project
        </FlexBoxStyled>
        <p>
          Developed by <strong>Max Bondar</strong>
        </p>
      </InnerWrapStyled>
    </FooterStyled>
  );
};

export default Footer;
