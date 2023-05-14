import { Link } from 'react-router-dom';

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
    <button className="btn d-block" type="button">
      {signSentence} <Link to={signRoute}>{signCTA}</Link>
    </button>
  );
}
