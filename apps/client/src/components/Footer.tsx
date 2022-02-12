import * as React from 'react';
import { FooterContainer, CopyrightText } from './Footer.styled';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <CopyrightText>
        &copy; {year} Jacob Sullivan. All rights reserved.
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
