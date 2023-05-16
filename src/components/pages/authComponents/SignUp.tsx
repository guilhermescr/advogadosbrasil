import AB_LOGO_DARK_THEME from '../../../assets/img/logos/ab-logo-dark-theme.png';
import FormBox from './FormBox';
import SignContainer from './SignContainer';
import SignForm from './SignForm';
import SignLinkButton from './SignLinkButton';

export default function SignUp() {
  return (
    <SignContainer>
      <SignForm>
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

        <button>Criar Conta</button>
      </SignForm>
    </SignContainer>
  );
}
