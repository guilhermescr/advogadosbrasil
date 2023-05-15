import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Início</h1>
      <Link to="/signin" style={{ marginLeft: '15px' }}>
        Entrar
      </Link>
      <Link to="/signup" style={{ marginLeft: '15px' }}>
        Cadastrar-se
      </Link>
    </>
  );
}
