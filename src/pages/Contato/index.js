import React, { useState, useEffect } from 'react';
import { db, auth, googleAuthProvider } from '../../firebaseConnection';
import { signInWithPopup, signOut } from 'firebase/auth';
import './style.css'; // Importe o CSS aqui
import MapContainer from '../../components/mapas';

function LoginButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verificar se o usuário está autenticado ao montar o componente
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Limpar o listener ao desmontar o componente
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      // Usuário logado
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Limpe o estado do usuário após a desconexão
    } catch (error) {
      console.error('Erro ao desconectar:', error);
    }
  };

  return (
   
      <div className="map-container"> {/* Adicione uma classe para o container do MapContainer */}
        <MapContainer />
      </div>
  );
}

export default LoginButton;
