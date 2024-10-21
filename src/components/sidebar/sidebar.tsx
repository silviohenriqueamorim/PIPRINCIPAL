import React from 'react';
import styles from './sidebar.module.css';

interface SidebarProps {
  handleLogin: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleLogin }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.icon}></div>
        <button 
          className={styles.loginButton}
          onClick={() => handleLogin()} // Simulando a navegação para a página de login
        >
          Entrar
        </button>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem}>Sobre nós</div>
        <div className={styles.menuItem}>Regras</div>
      </div>
    </div>
  );
};

export default Sidebar;
