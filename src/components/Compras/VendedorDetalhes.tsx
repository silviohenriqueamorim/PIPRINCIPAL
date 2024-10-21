import React from 'react';
import styles from './VendedorDetalhes.module.css';

const SellerDetails: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Seção de Perfil do Vendedor */}
      <div className={styles.sellerProfile}>
        <img
          src="https://via.placeholder.com/100x100.png?text=Profile"
          alt="Foto do vendedor"
          className={styles.profileImg}
        />
        <div className={styles.profileInfo}>
          <h2>Emily Cristina Ferreira Da Cruz</h2>
          <p>Localização da Vendedora</p>
        </div>
      </div>

      {/* Seção de Conquistas */}
      <div className={styles.achievements}>
        <h3>Conquistas</h3>
        <p>Desde 01/2089 no nosso App</p>
        <p>Anunciou mais de 400 carros</p>
        <p>Responde em até 10 horas</p>
      </div>

      {/* Botões de Ação */}
      <div className={styles.actions}>
        <button className={styles.buyButton}>Comprar</button>
        <button className={styles.messageButton}>Enviar Mensagem</button>
      </div>
    </div>
  );
};

export default SellerDetails;
