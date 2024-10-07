import React from 'react';
import './Card.css'; // Inclua o CSS para estilizar os cartões, se necessário

interface Car {
    foto: string;
    marca: string;
    modelo: string;
    descricao: string;
    anoFabricacao: number;
}

interface CardCompraProps {
    cars: Car[];
}

const CardCompra: React.FC<CardCompraProps> = ({ cars }) => {
    return (
        <div className="card-list">
            {cars.map((Veiculo, index) => (
                <div key={index} className="card">
                    <img src={Veiculo.foto} alt={Veiculo.modelo} className="card-image" />
                    <div className="card-info">
                        <h2 className="card-brand">{Veiculo.marca}</h2>
                        <h3 className="card-model">{Veiculo.modelo}</h3>
                    </div>
                    <div className="card-details">
                        <p className="card-description">{Veiculo.descricao}</p>
                        <p className="card-year">Ano de Fabricação: {Veiculo.anoFabricacao}</p>
                        <button className='atualizar'>Detalhe do veículo </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardCompra;
