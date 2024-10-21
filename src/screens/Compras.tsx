import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Compras.css';
import DetalhesVeiculos from '../components/Compras/DetalhesVeiculos';
import VendedorDetalhes from '../components/Compras/VendedorDetalhes';
import Proposta from '../components/Compras/Proposta';
import PaginaPagamento from '../components/Compras/PaginaPagamento';
import Header from '../components/header/Header';

const Compras: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vehicle' | 'seller' | 'proposta' | 'payment'>('vehicle');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleBuyClick = () => {
    setActiveTab('payment'); 
  };

  const handleSendMessageClick = () => {
    setActiveTab('proposta');
  };

  const handleBackClick = () => {
    setActiveTab('vehicle'); 
  };

  return (
    <div className="app-wrapper">
      <Header onPositionChange={() => {}} onFocusChange={setIsSearchFocused} />
      <div className="content">
        <div>

        <div className="nav">
          <button className="back-button" onClick={handleBackClick}>←</button>
          <h2>
            {activeTab === 'proposta' ? 'Enviar Proposta' : 
             activeTab === 'payment' ? 'Finalizando Compra' : 
             'Detalhes do anúncio'}
          </h2>
        </div>
        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === 'vehicle' ? 'active' : ''}`}
            onClick={() => setActiveTab('vehicle')}
            >
            Veículo
          </button>
          <button
            className={`tab-button ${activeTab === 'seller' ? 'active' : ''}`}
            onClick={() => setActiveTab('seller')}
            >
            Vendedor
          </button>
        </div>
        </div>
        <TransitionGroup>
          <CSSTransition
            key={activeTab}
            timeout={300}
            classNames="fade"
          >
            <div className="tab-content">
              {activeTab === 'vehicle' && <DetalhesVeiculos onBuyClick={handleBuyClick} onSendMessageClick={handleSendMessageClick} />}
              {activeTab === 'seller' && <VendedorDetalhes />}
              {activeTab === 'proposta' && <Proposta />}
              {activeTab === 'payment' && <PaginaPagamento />}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      {isSearchFocused && <div className="recentes"> {/* Substitua pelo componente Recentes se necessário */}Recentes</div>}
    </div>
  );
};

export default Compras;
