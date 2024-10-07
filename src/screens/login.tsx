import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css'; // Importa o CSS Module
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import backImage from '../assets/back.png';
import myImage from '../assets/logo.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const requestData = { email, senha };
    console.log('Enviando dados para o backend:', requestData);

    try {
      const response = await fetch('http://localhost:5000/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      console.log('Resposta do backend:', response);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro na resposta:', errorData);
        setError(errorData.error || 'Erro desconhecido');
        return;
      }

      const result = await response.json();
      console.log('Dados recebidos do backend:', result);
      localStorage.setItem('accessToken', result.accessToken);
      alert("Login feito com sucesso");
      
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={`row ${styles.loginHeader}`}>
        <div className="col-4">
          <Link to="/register">
            <img src={backImage} alt="" style={{ width: "50px", paddingLeft: "10px" }} />
          </Link>
        </div>
        <div className="col-4">
          <img src={myImage} alt="Logo" className={styles.logo} />
        </div>
        <div className="col-4"></div>
      </div>

      <div className={styles.content}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button type="submit" className={styles.loginButton}>Log In</button>
        </form>
        <div className={styles.signupLink}>
          Não tem conta? <Link to="/register">Crie uma</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
