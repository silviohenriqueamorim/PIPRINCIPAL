import Recentes from '../components/header/recentes';
import { useState } from 'react';
import styles from './Regras.module.css';
import Header from '../components/header/Header';

function Regras() {
  const [recentesPosition, setRecentesPosition] = useState({ x: 0, y: 0, width: 0 });
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const recentesArray = ['Item 1', 'Item 2', 'Item 3'];

  const handlePositionChange = (x: number, y: number, width: number) => {
      setRecentesPosition({ x, y, width });
  };

  const handleSelectRecent = (item: string) => {
      const searchInput = document.getElementById("searchBar") as HTMLInputElement;
      if (searchInput) {
          searchInput.value = item;
          searchInput.focus(); 
          const event = new KeyboardEvent('keydown', { key: 'Enter' });
          searchInput.dispatchEvent(event);
      }
  };

  return (
    <div className={styles.regrasContainer}>
    <Header 
        onPositionChange={handlePositionChange} 
        onFocusChange={setIsSearchFocused}
    />
      <main className={styles.containerRegras}>
        <h1 className={styles.title}>Regras e Políticas</h1>

        <h2 className={styles.subtitle}>Regra 1: Verificação de Identidade</h2>
        <p className={styles.text}>
          Todos os usuários devem verificar sua identidade antes de realizar qualquer transação. Isso pode incluir o envio de documentos de identidade e comprovantes de endereço. A verificação é essencial para garantir a segurança e a integridade das transações.
        </p>

        <h2 className={styles.subtitle}>Regra 2: Cadastro e Informações de Veículos</h2>
        <p className={styles.text}>
          Ao cadastrar um veículo para venda, os vendedores devem fornecer informações precisas e completas sobre o carro, incluindo histórico de manutenção, quilometragem, e condição atual. Qualquer tentativa de fornecer informações falsas ou enganosas pode resultar na remoção do anúncio e possíveis ações legais.
        </p>

        <h2 className={styles.subtitle}>Regra 3: Transações Seguras</h2>
        <p className={styles.text}>
          Recomendamos que as transações sejam realizadas através dos métodos de pagamento seguros oferecidos pelo site. Evite realizar pagamentos fora da plataforma, pois isso pode comprometer sua segurança. O site não se responsabiliza por transações realizadas fora do ambiente seguro.
        </p>

        <h2 className={styles.subtitle}>Regra 4: Política de Devolução e Cancelamento</h2>
        <p className={styles.text}>
          Todos os veículos vendidos no site são vendidos como-is. Recomendamos que os compradores realizem uma inspeção completa antes de concluir a compra. Em caso de problemas significativos após a compra, o comprador deve entrar em contato com o suporte ao cliente para discutir possíveis soluções. A política de devolução e cancelamento pode variar conforme o vendedor e deve ser verificada antes da compra.
        </p>

        <h2 className={styles.subtitle}>Regra 5: Suporte ao Cliente</h2>
        <p className={styles.text}>
          Oferecemos suporte ao cliente para ajudar com dúvidas, problemas e questões relacionadas à compra e venda de veículos. O suporte está disponível por meio de e-mail, telefone e chat ao vivo durante o horário comercial. Respostas rápidas e precisas são garantidas para garantir a melhor experiência possível para nossos usuários.
        </p>

        <h2 className={styles.subtitle}>Regra 6: Privacidade e Proteção de Dados</h2>
        <p className={styles.text}>
          Respeitamos a privacidade dos nossos usuários e estamos comprometidos em proteger seus dados pessoais. As informações coletadas são usadas exclusivamente para fins de transações e comunicação relacionadas ao site. Para mais detalhes, consulte nossa política de privacidade.
        </p>

        <h2 className={styles.subtitle}>Regra 7: Conduta e Comportamento dos Usuários</h2>
        <p className={styles.text}>
          Todos os usuários devem manter um comportamento respeitoso e profissional na plataforma. Qualquer forma de assédio, discriminação ou comportamento inadequado não será tolerada e pode resultar na suspensão ou exclusão da conta.
        </p>

        <h2 className={styles.subtitle}>Regra 8: Responsabilidade dos Anúncios</h2>
        <p className={styles.text}>
          Os vendedores são responsáveis pela veracidade das informações fornecidas em seus anúncios. O site não se responsabiliza por discrepâncias entre a descrição do veículo e sua condição real. É recomendável que os compradores solicitem informações adicionais e realizem inspeções antes de finalizar a compra.
        </p>

        <h2 className={styles.subtitle}>Regra 9: Alterações e Atualizações</h2>
        <p className={styles.text}>
          O site se reserva o direito de modificar estas regras e políticas a qualquer momento. Os usuários serão notificados sobre alterações significativas. É responsabilidade dos usuários revisar periodicamente as regras para estar ciente de quaisquer mudanças.
        </p>

        <h2 className={styles.subtitle}>Regra 10: Propriedade Intelectual</h2>
        <p className={styles.text}>
          Todo o conteúdo disponível no site, incluindo textos, imagens e gráficos, é protegido por direitos autorais e outras leis de propriedade intelectual. Nenhum material do site pode ser copiado, reproduzido ou distribuído sem a devida autorização.
        </p>
      </main>
      {isSearchFocused && <Recentes position={recentesPosition} recentes={recentesArray} onSelect={handleSelectRecent} />}
  </div>
  );
}

export default Regras;
