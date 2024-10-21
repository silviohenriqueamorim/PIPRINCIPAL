import React from 'react';
import './primeira.css'; // Importe o CSS correspondente
import { Link } from 'react-router-dom';

const LocalizacaoCarro: React.FC = () => {
  return (
    <div className="localizacao-container">
      <h1 className="titulo-pagina">Primeira Etapa</h1>
      <p className="subtitulo">Onde se localiza o Carro?</p>
      <form className="form-localizacao">
        <div className="input-group">
          <input type="text" placeholder="CEP" className="input" />
          <input type="text" placeholder="Estado" className="input" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Cidade" className="input" />
          <input type="text" placeholder="Número" className="input" />
        </div>
        <input type="text" placeholder="Logradouro" className="input" />
        <input type="text" placeholder="Complemento" className="input" />


        <Link to="/segundaEtapa">
        <button className="botao-proxima-etapa">Próxima Etapa</button>
      </Link>

      </form>
    </div>
  );
};

export default LocalizacaoCarro;
