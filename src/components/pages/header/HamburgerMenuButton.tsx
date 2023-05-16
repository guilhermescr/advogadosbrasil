import { RxHamburgerMenu } from 'react-icons/rx';
import styled from 'styled-components';

interface HamburgerMenuButtonProps {
  sideMenuState: boolean;
  setSideMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenuButtonStyles = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 50%;
  padding: 13px;

  & svg {
    height: 23px;
    width: 25px;
  }
`;

export default function HamburgerMenuButton({
  sideMenuState,
  setSideMenuState
}: HamburgerMenuButtonProps) {
  return (
    <HamburgerMenuButtonStyles onClick={() => setSideMenuState(!sideMenuState)}>
      <RxHamburgerMenu />
    </HamburgerMenuButtonStyles>
  );
}
