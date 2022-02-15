import * as React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span>&copy; {year} Jacob Sullivan. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
