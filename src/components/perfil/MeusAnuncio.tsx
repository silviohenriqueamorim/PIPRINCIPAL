import React from 'react';
import styles from './MeusAnuncio.module.css';
import MeuAnuncio from '../../assets/MeuAnuncio.jpg'

interface Car {
    foto: string;
    marca: string;
    modelo: string;
    preco: string; // Adicionando o preço como uma propriedade
    descricao: string;
}

interface CardListProps {
    cars: Car[];
}

const CardList: React.FC<CardListProps> = ({ cars }) => {
    return (
        <div className={styles.cardList}>
            {cars.map((veiculo, index) => (
                <div key={index} className={styles.card}>
                    <img src={MeuAnuncio} alt={veiculo.modelo} className={styles.cardImage} />
                    <div className={styles.cardInfo}>
                        <h2 className={styles.cardBrand}>{veiculo.marca}</h2>
                        <h3 className={styles.cardModel}>{veiculo.modelo}</h3>
                        <p className={styles.cardPrice}>{veiculo.preco}</p> {/* Exibindo o preço */}
                        <p className={styles.cardDescription}>{veiculo.descricao}</p>
                        <a href="AtualizarCarro"><button className={styles.atualizar}>Atualizar Dados Do Veículo</button></a> {/* Alterando o texto do botão */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardList;
