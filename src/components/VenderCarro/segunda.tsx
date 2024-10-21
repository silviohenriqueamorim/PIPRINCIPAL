import React from 'react';
import './segunda.css'; // Importe o CSS correspondente
import { Link } from 'react-router-dom';

const InformacoesCarro: React.FC = () => {
  return (
    <div className="informacoes-container">
      <h1 className="titulo-pagina">Segunda Etapa</h1>
      <p className="subtitulo">Digite Informações do Carro</p>
      <form className="form-informacoes">
        <div className="input-group">
          <input type="text" placeholder="Marca" className="input" />
          <input type="text" placeholder="Modelo" className="input" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Valor" className="input" style={{ color: 'red' }} />
          <input type="text" placeholder="Câmbio" className="input" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Ano de Fabricação" className="input" />
          <input type="text" placeholder="Carroceria" className="input" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Ano de Modelo" className="input" />
          <input type="text" placeholder="Combustível" className="input" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Km" className="input" />
          <input type="text" placeholder="Cor" className="input" />
        </div>
        <div className="input-group">
          <textarea placeholder="Descrição do Veículo" className="input textarea" />
        </div>
        <Link to="/terceiraEtapa">
        <button className="botao-etapa-final">Etapa Final</button>
      </Link>
      </form>
    </div>
  );
};

export default InformacoesCarro;
