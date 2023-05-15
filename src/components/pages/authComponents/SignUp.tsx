import AB_LOGO_DARK_THEME from '../../../assets/img/logos/ab-logo-dark-theme.png';
import Container from '../../Container';
import SignLinkButton from './SignLinkButton';
import { FaUser, FaLock } from 'react-icons/fa';

export default function SignUp() {
  function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <Container customClass="signup">
      <form onSubmit={e => handleSubmit(e)}>
        <img src={AB_LOGO_DARK_THEME} alt="Logo do Advogados Brasil" />

        <h1>Advogados Brasil</h1>

        <div className="form-box">
          <label htmlFor="email">
            <FaUser />
          </label>
          <input type="text" id="email" placeholder="Digite seu e-mail..." />
        </div>

        <div className="form-box">
          <label htmlFor="password">
            <FaLock />
          </label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha..."
          />
        </div>

        <div className="form-box">
          <label htmlFor="confirmPassword">
            <FaLock />
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Digite a senha de novo..."
          />
        </div>

        <SignLinkButton
          signSentence="Já tem uma conta?"
          signCTA="Entre"
          signRoute="/signin"
        />

        <button type="button">Criar Conta</button>
      </form>
    </Container>
  );
}
