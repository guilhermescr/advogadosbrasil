import styled, { keyframes } from 'styled-components';

interface HamburgerSideMenuProps {
  sideMenuState: boolean;
}

const navMovement = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: calc(100vh - 100px);
  }
`;

const NavStyles = styled.nav<HamburgerSideMenuProps>`
  align-items: center;
  animation: ${props => (props.sideMenuState ? navMovement : 'none')} 0.25s
    forwards;
  background-color: #2b2b2b;
  display: flex;
  height: calc(100vh - 100px);
  position: absolute;
  top: 100px;
  width: 100%;
  z-index: -1;

  & ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }

  & li {
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    padding: 10px 20px;
    transition: color 0.15s ease;

    &:hover {
      color: #a88879;
    }
  }
`;

export default function HamburgerSideMenu({
  sideMenuState
}: HamburgerSideMenuProps) {
  return (
    <NavStyles sideMenuState={sideMenuState}>
      <ul>
        <li>Início</li>
        <li>Sobre</li>
        <li>Áreas Práticas</li>
        <li>Páginas</li>
        <li>Blog</li>
        <li>Contato</li>
      </ul>
    </NavStyles>
  );
}
