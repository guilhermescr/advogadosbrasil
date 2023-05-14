import AB_LOGO_DARK_THEME from '../../../assets/img/logos/ab-logo-dark-theme.png';
import Container from '../../Container';
import SignButton from './SignButton';

export default function SignUp() {
  return (
    <Container>
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
            placeholder="Digite a senha de novo..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword"></label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Digite sua senha..."
          />
        </div>

        <SignButton
          signSentence="Já tem uma conta?"
          signCTA="Entre"
          signRoute="/signin"
        />

        <button type="button" className="btn btn-dark btn-lg">
          Criar Conta
        </button>
      </form>
    </Container>
  );
}
