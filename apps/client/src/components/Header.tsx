import * as React from 'react';
import { HeaderContainer, NavContainer, NavLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/play">Play</NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
