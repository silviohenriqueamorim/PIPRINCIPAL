import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './cadastro.module.css'; // Importa o CSS Module
import 'bootstrap/dist/css/bootstrap.min.css'; 
import backImage from '../assets/back.png';
import myImage from '../assets/logo.png';

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [cleanCpf, setCleanCpf] = useState('');
  const [cleanTelefone, setCleanTelefone] = useState('');

  const formatDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 8) {
      const year = cleaned.slice(0, 4);
      const month = cleaned.slice(4, 6);
      const day = cleaned.slice(6, 8);
      return `${year}${month ? '-' + month : ''}${day ? '-' + day : ''}`;
    }
    return value;
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  const formatCpf = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 11) {
      return cleaned
        .replace(/(\d{3})(\d{1,3})/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .substring(0, 14);
    }
    return value;
  };

  const handleNascimentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = formatDate(value);
    setNascimento(formattedValue);
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cleaned = value.replace(/\D/g, '');
    const formattedValue = formatPhone(value);
    setTelefone(formattedValue);
    setCleanTelefone(cleaned);
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cleaned = value.replace(/\D/g, '');
    const formattedValue = formatCpf(value);
    setCpf(formattedValue);
    setCleanCpf(cleaned);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    const formData = {
      nome,
      email,
      senha,
      cpf: cleanCpf,
      telefone: cleanTelefone,
      nascimento,
      isAdmin: false
    };

    try {
      const response = await fetch('http://localhost:5000/usuarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Erro: ${errorData.error}`);
        return;
      }

      const result = await response.json();
      alert('Conta criada com sucesso!');
      console.log('Usuário criado:', result);
      document.location.href = "./"
    } catch (error) {
      console.error('Erro ao criar conta:', error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={`row ${styles.loginHeader}`}>
        <div className="col-4">
          <Link to="/"><img src={backImage} alt="" style={{width:"50px", paddingLeft:"10px"}} /></Link>
        </div>
        <div className="col-4">
          <img src={myImage} alt="Logo" className={styles.logo} />
        </div>
        <div className="col-4"></div>
      </div>

      <div className={styles.content}>
        <div className="row"></div>
        <div className="col-4">
          <h2>Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <div className="row">
            <div className="col-md-7">
              <input type="text" placeholder="CPF" value={cpf} onChange={handleCpfChange} maxLength={14} required />
            </div>
            <div className="col-md-5">
              <input type="text" placeholder="Nascimento" value={nascimento} onChange={handleNascimentoChange} maxLength={10} required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input type="text" placeholder="Telefone" value={telefone} onChange={handleTelefoneChange} maxLength={15} required />
            </div>
            <div className="col-md-6"></div>
          </div>
          <input type={showSenha ? "text" : "password"} placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          <div className="row">
            <div className="col-11">
              <input type={showSenha ? "text" : "password"} placeholder="Confirmar senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />
            </div>
            <div className="col-1">
              <input type="checkbox" onChange={() => setShowSenha(!showSenha)} />
            </div>
          </div>
          <button type="submit" className={styles.loginButton}>Register</button>
        </form>
        <div className={styles.signupLink}>
          Já tem uma conta? <Link to="/login">Entre</Link>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
