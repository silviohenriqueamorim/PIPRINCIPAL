import React, { useState } from 'react';
import styles from './PaginaPagamento.module.css';

const PaymentPage = () => {
  const [activePaymentMethod, setActivePaymentMethod] = useState<'pix' | 'boleto' | 'card' | null>(null);

  const handlePaymentSelection = (method: 'pix' | 'boleto' | 'card') => {
    setActivePaymentMethod(method);
  };

  return (
    <div className={styles.paymentContainer}>
      <h1>Escolha a forma de pagamento</h1>
      <div className={styles.paymentMethods}>
        <button onClick={() => handlePaymentSelection('pix')}>Pix</button>
        <button onClick={() => handlePaymentSelection('boleto')}>Boleto</button>
        <button onClick={() => handlePaymentSelection('card')}>Cadastrar Cartão</button>
      </div>
      
      {activePaymentMethod === 'pix' && (
        <div className={styles.paymentDetail}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuEIzrAnoE6-6TrLFKG3kdUsNZ05IMmE-0w&s" alt="QR Code" />
        </div>
      )}
      
      {activePaymentMethod === 'boleto' && (
        <div className={styles.paymentDetail}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8MkbPJMPgomnkftCNACZ-U3vBeZ2oOFzMuLKSq6Axb6F3qcQDhS_vF_aT2gqVef5vg&usqp=CAU" alt="Barcode" />
        </div>
      )}

      {activePaymentMethod === 'card' && (
        <div className={`${styles.paymentDetail} ${styles.cardInfo}`}>
          <h2>Informações do Cartão</h2>
          <input type="text" placeholder="Número do Cartão" className={styles.fullWidth} />
          <div className={styles.halfWidthContainer}>
            <input type="text" placeholder="Data de Validade (MM/AA)" className={styles.halfWidth} />
            <input type="text" placeholder="CVV" className={styles.halfWidth} />
          </div>
          <input type="text" placeholder="Nome do Titular" className={styles.fullWidth} />
          <button className={styles.submitButton}>Cadastrar</button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
