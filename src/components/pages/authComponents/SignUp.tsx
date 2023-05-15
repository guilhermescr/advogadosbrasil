import AB_LOGO_DARK_THEME from '../../../assets/img/logos/ab-logo-dark-theme.png';
import Container from '../../Container';
import FormBox from './FormBox';
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

        <FormBox
          inputType="email"
          id="email"
          placeholder="Digite seu e-mail..."
        />

        <FormBox
          inputType="password"
          id="password"
          placeholder="Digite sua senha..."
        />

        <FormBox
          inputType="password"
          id="confirmPassword"
          placeholder="Digite a senha de novo..."
        />

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
