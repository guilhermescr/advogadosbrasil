import AB_LOGO_DARK_THEME from '../../../assets/img/logos/ab-logo-dark-theme.png';
import Container from '../../Container';
import SignButton from './SignButton';

export default function SignIn() {
  return (
    <Container>
      {/* <Form isSignIn={true} /> */}
      <form className="bg-white">
        <img
          className="img-fluid rounded mx-auto d-block"
          src={AB_LOGO_DARK_THEME}
          alt="Logo do Advogados Brasil"
        />

        <div className="mb-3">
          <label htmlFor="email"></label>
          <input type="text" id="email" placeholder="Digite seu e-mail..." />
        </div>

        <div className="mb-3">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha..."
          />
        </div>

        <SignButton
          signSentence="Não tem uma conta?"
          signCTA="Cadastre-se"
          signRoute="/signup"
        />

        <button type="button" className="btn btn-dark btn-lg">
          Entrar
        </button>
      </form>
    </Container>
  );
}
