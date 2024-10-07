import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from './logo';
import Perfil from './perfil';
import Menu from './menu';
import SearchBar from './searchBar';

interface HeaderProps {
  onPositionChange: (x: number, y: number, width: number) => void;
  onFocusChange: (isFocused: boolean) => void; // Novo prop para foco
}

const Header: React.FC<HeaderProps> = ({ onPositionChange, onFocusChange }) => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(window.innerWidth < 992);
  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsNavbarCollapsed(width < 992);
      setIsSubHeaderVisible(width < 992);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header-container" style={{ position: "absolute", top: "0", left: "0", width: "100vw", zIndex: "3", overflow: "hidden" }}>
      {/* Cabeçalho */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-white hiader normal">
        <a className="navbar-brand" href="#"><Logo /></a>
        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarsExample05">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <Link className="nav-link headerText" to="/">Home<span className="sr-only"></span></Link>
          </li>
            <li className="nav-item">
              <a className="nav-link headerText" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link headerText" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link headerText" href="#">Link</a>
            </li>
          </ul>
          <SearchBar onPositionChange={onPositionChange} onFocusChange={onFocusChange} />
          <div className='perfil'>
            <Link to="/perfil"><Perfil /></Link>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-dark bg-white hiader mini">
        <a className="navbar-brand" href="#"><Logo /></a>
        <SearchBar onPositionChange={onPositionChange} onFocusChange={onFocusChange} />
          <div className='perfil'>
            <Link to="/perfil"><Perfil /></Link>
          </div>
        <Menu />
      </nav>
      <div className={`secondary-nav ${isSubHeaderVisible ? 'd-block' : 'd-none'}`}>
        <div className='row subheader'>
          <div className="nav row alinhador col-md-6 col-sm-8 col-12">
            <div className="subheaderBox col-3">
              <a href="/" className="subheaderText">Home</a>
            </div>
            <div className="subheaderBox col-3">
              <a href="" className="subheaderText">Link 1</a>
            </div>
            <div className="subheaderBox col-3">
              <a href="" className="subheaderText">Link 2</a>
            </div>
            <div className="subheaderBox col-3">
              <a href="" className="subheaderText">Link 3</a>
            </div>
          </div>
          <div className='col-md-6 col-sm-4 col-0'></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
