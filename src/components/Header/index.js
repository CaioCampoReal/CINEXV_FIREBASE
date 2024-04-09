import React, { useState, useEffect } from 'react';
import { auth, googleAuthProvider } from '../../firebaseConnection'; 
import { signInWithPopup, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './style.css';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Erro ao desconectar:', error);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="#" className="logo"><img src={logo} alt="Logo" /></Link>
        <ul className="menu">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/sobre" className="nav-link">Sobre</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link">Filmes</Link></li>
          <li className="nav-item"><Link to="/Lancamentos" className="nav-link">Lançamentos</Link></li>
          <li className="nav-item"><Link to="/Contato" className="nav-link">Contato</Link></li>
        </ul>
        <div className="user-info">
          {user ? (
            // Se o usuário estiver autenticado, exibir o nome do usuário e o botão "Sair"
            <div className="user-info-authenticated">
              <span className = "login-button">Bem-vindo, {user.displayName}</span>
              <button className="logout-button" onClick={handleLogout}>
                Sair
              </button>
            </div>
          ) : (
            // Se o usuário não estiver autenticado, exibir o botão "Login com Google"
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
        <div className="px-3 geral">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
