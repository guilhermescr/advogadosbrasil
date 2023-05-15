import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/pages/authComponents/SignIn';
import SignUp from './components/pages/authComponents/SignUp';
import Home from './components/pages/Home';

// auth page inspiration: https://img.freepik.com/vetores-gratis/design-do-modelo-da-pagina-de-login-do-usuario-do-site_1017-30786.jpg?w=2000

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
