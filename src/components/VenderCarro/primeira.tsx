import React from 'react';
import './primeira.css'; // Importe o CSS correspondente
import { Link } from 'react-router-dom';
import Header from '../header/Header';


const LocalizacaoCarro: React.FC = () => {

  const [recentesPosition, setRecentesPosition] = useState({ x: 0, y: 0, width: 0 });
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const recentesArray = ['Item 1', 'Item 2', 'Item 3'];

    const handlePositionChange = (x: number, y: number, width: number) => {
        setRecentesPosition({ x, y, width });

  return (
    <div className="localizacao-container">
      {/* copiar Header e Recentes */}
      <Header 
                onPositionChange={handlePositionChange} 
                onFocusChange={setIsSearchFocused}
            />
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
      {/* RECENTES DO HEADER */}
      {isSearchFocused && <Recentes position={recentesPosition} recentes={recentesArray} onSelect={handleSelectRecent} />}
    </div>
  );
};

export default LocalizacaoCarro;
