import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from './logo';
import Perfil from './perfil';
import Menu from './menu';
import SearchBar from './searchBar';
import SidebarUser from '../sidebar/SidebarUser'; // Importando SidebarUser
import Sidebar from '../sidebar/sidebar'; // Importando Sidebar

interface HeaderProps {
  onPositionChange: (x: number, y: number, width: number) => void;
  onFocusChange: (isFocused: boolean) => void; // Novo prop para foco
}

const Header: React.FC<HeaderProps> = ({ onPositionChange, onFocusChange }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para login
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Estado para a Sidebar

  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsSidebarVisible(false); // Oculta a sidebar ao fazer login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSidebarVisible(false); // Oculta a sidebar ao fazer logout
  };

  return (
    <div className="header-container" style={{ position: "absolute", top: "0", left: "0", width: "100vw", zIndex: "3", overflow: "hidden" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-white hiader">
        <a className="navbar-brand" href="#"><Logo /></a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link headerText" to="/">Home<span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <a className="nav-link headerText" href="Compras">Compras</a>
          </li>
          <li className="nav-item">
          <a className="nav-link headerText" href="PrimeiraEtapa">Vender</a>
          </li>
          <li className="nav-item">
            <a className="nav-link headerText" href="#">Link</a>
          </li>
        </ul>
        <SearchBar onPositionChange={onPositionChange} onFocusChange={onFocusChange} />
        <div className='perfil' style={{display: "flex"}}>
          <Link to="/perfil"><Perfil /></Link>
        </div>
        <div className="menu">
          <Menu onClick={toggleSidebar} />
        </div>
      </nav>

      {/* Sidebar Condicional */}
      {isSidebarVisible && (
        isLoggedIn ? (
          <SidebarUser handleLogout={handleLogout} />
        ) : (
          <Sidebar handleLogin={handleLogin} />
        )
      )}
    </div>
  );
};

export default Header;
