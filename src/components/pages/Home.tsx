import { Link } from 'react-router-dom';
import Header from './header/Header';

export default function Home() {
  return (
    <>
      <Header />

      <Link to="/signin" style={{ display: 'block', marginLeft: '15px' }}>
        Entrar
      </Link>
      <Link to="/signup" style={{ marginLeft: '15px' }}>
        Cadastrar-se
      </Link>
    </>
  );
}
