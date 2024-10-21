import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ProfilePage.module.css';
import EditProfile from './EditProfile'; // Importando o novo componente
import CardList from './MeusAnuncio';
import CardCompra from './CardCompra';

const ProfilePage: React.FC = () => {
    const cars = [
        {
            foto: 'https://via.placeholder.com/300x200',
            marca: 'Marca Exemplo',
            modelo: 'Modelo Exemplo',
            descricao: 'Descrição detalhada do carro.',
            anoFabricacao: 2024
        },
        {
            foto: 'https://via.placeholder.com/300x200',
            marca: 'Outra Marca',
            modelo: 'Outro Modelo',
            descricao: 'Outra descrição detalhada do carro.',
            anoFabricacao: 2023
        }
    ];

    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cpf: '',
        nascimento: '',
        telefone: '',
        senha: '',
        confirmarSenha: ''
    });
    const [showSenha, setShowSenha] = useState<boolean>(false);

    const handleSectionChange = (section: string) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
    };

    return (
        <div className={`container mt-5 ${styles.container}`}>
            <h1 className={styles.text}>Dados do Perfil</h1>
            <div className={styles.buttonGroup}>
                <button
                    type="button"
                    className={`${styles.button} ${styles.editProfile}`}
                    onClick={() => handleSectionChange('editProfile')}
                >
                    Editar Perfil
                </button>
                <button
                    type="button"
                    className={`${styles.button} ${styles.showSales}`}
                    onClick={() => handleSectionChange('sales')}
                >
                    Seus Anúncios
                </button>
                <button
                    type="button"
                    className={`${styles.button} ${styles.showPurchase}`}
                    onClick={() => handleSectionChange('purchases')}
                >
                    Mostrar Compras
                </button>
            </div>
            <div className={styles.sectionContent}>
                {activeSection === 'editProfile' && (
                    <EditProfile
                        formData={formData}
                        setFormData={setFormData}
                        showSenha={showSenha}
                        setShowSenha={setShowSenha}
                        handleSubmit={handleSubmit}
                    />
                )}
                {activeSection === 'sales' && (
                    <div className={styles.sales}>
                        <h2>Vendas</h2>
                        <div className={styles.carros}>
                            <CardList cars={cars} />
                        </div>
                        <p>Lista de vendas aqui...</p>
                    </div>
                )}
                {activeSection === 'purchases' && (
                    <div className={styles.purchases}>
                        <h2>Compras</h2>
                        <div className={styles.carros}>
                            <CardCompra cars={cars} />
                        </div>
                        <p>Lista de compras aqui...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
