import { useState } from 'react';
import HamburgerMenuButton from './HamburgerMenuButton';
import AB_LOGO_DARK_THEME from '../../../assets/img/logos/ab-logo-dark-theme.png';
import styled from 'styled-components';
import HamburgerSideMenu from './HamburgerSideMenu';

const HeaderStyles = styled.header`
  align-items: center;
  background-color: #2b2b2b;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  position: relative;
  z-index: 1;

  & > img {
    max-width: 100px;
    width: 100%;
  }
`;

export default function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <HeaderStyles>
      <img src={AB_LOGO_DARK_THEME} alt="Logo do Advogados Brasil" />

      <HamburgerMenuButton
        sideMenuState={isSideMenuOpen}
        setSideMenuState={setIsSideMenuOpen}
      />

      {isSideMenuOpen && <HamburgerSideMenu sideMenuState={isSideMenuOpen} />}
    </HeaderStyles>
  );
}
