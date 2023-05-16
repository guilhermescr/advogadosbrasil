import AB_LOGO_DARK_THEME from '../../../assets/img/logos/ab-logo-dark-theme.png';
import FormBox from './FormBox';
import SignContainer from './SignContainer';
import SignForm from './SignForm';
import SignLinkButton from './SignLinkButton';

export default function SignIn() {
  return (
    <SignContainer>
      <SignForm
        customStyles={`
          padding-top: 40px;
        `}
      >
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

        <button>Entrar</button>
      </SignForm>
    </SignContainer>
  );
}
