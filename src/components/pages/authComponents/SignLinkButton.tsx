import { Link } from 'react-router-dom';
import './SignLinkButton.css';

interface SignButtonProps {
  signSentence: string;
  signCTA: string;
  signRoute: string;
}

export default function SignButton({
  signSentence,
  signCTA,
  signRoute
}: SignButtonProps) {
  return (
    <button type="button" className="signLinkButton">
      {signSentence} <Link to={signRoute}>{signCTA}</Link>
    </button>
  );
}
