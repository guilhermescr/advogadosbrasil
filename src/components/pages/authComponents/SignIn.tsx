import AB_LOGO_DARK_THEME from '../../../assets/img/logos/ab-logo-dark-theme.png';
import Container from '../../Container';
import FormBox from './FormBox';
import SignLinkButton from './SignLinkButton';

export default function SignIn() {
  function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <Container customClass="signin">
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

        <SignLinkButton
          signSentence="Não tem uma conta?"
          signCTA="Cadastre-se"
          signRoute="/signup"
        />

        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}
