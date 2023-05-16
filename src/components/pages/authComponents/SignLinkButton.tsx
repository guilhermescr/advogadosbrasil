import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SignButtonProps {
  signSentence: string;
  signCTA: string;
  signRoute: string;
}

const SignButtonStyles = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 8px;

  & a {
    color: inherit;
  }

  & a:hover {
    font-weight: bold;
  }

  @media (max-width: 310px) {
    & a {
      display: block;
    }
  }
`;

export default function SignButton({
  signSentence,
  signCTA,
  signRoute
}: SignButtonProps) {
  return (
    <SignButtonStyles type="button" className="signLinkButton">
      {signSentence} <Link to={signRoute}>{signCTA}</Link>
    </SignButtonStyles>
  );
}
