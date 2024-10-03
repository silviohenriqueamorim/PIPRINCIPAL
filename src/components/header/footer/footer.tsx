import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Se desejar, você pode adicionar estilos personalizados

const Footer: React.FC = () => {
    return (
        <footer className='row'>
            <div className='col-12 col-md-8 col-lg-6'>
            <div className='col-6 col-md-3'><h3>Compras</h3></div>
            <div className='col-6 col-md-3'><h3>Vendas</h3></div>
            <div className='col-6 col-md-3'><h3>Politica & Privavidade</h3></div>
            <div className='col-6 col-md-3'><h3>Minha Conta</h3></div>
            </div>
        </footer>
    );
};

export default Footer;