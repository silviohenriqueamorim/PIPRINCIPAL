import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
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

    // Função para alterar a seção ativa
    const handleSectionChange = (section: string) => {
        if (activeSection === section) {
            // Se a seção já estiver ativa, esconder a seção
            setActiveSection(null);
        } else {
            // Caso contrário, definir a nova seção ativa
            setActiveSection(section);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Adicione a lógica para enviar os dados para o servidor
        console.log('Dados do formulário:', formData);
    };

    return (
        <div className="container mt-5">
            <h1 className="text">Dados do Perfil</h1>
            <div className="button" role="group">
                <button
                    type="button"
                    className="buton"
                    onClick={() => handleSectionChange('editProfile')}
                >
                    Editar Perfil
                </button>
                <button
                    type="button"
                    className="buton"
                    onClick={() => handleSectionChange('sales')}
                >
                    Mostrar Vendas
                </button>
                <button
                    type="button"
                    className="buton"
                    onClick={() => handleSectionChange('purchases')}
                >
                    Mostrar Compras
                </button>
            </div>
            <div className="section-content">
                {activeSection === 'editProfile' && (
                    <div className="login-container">
                        <div className="row login-header">
                            <div className="col-4"></div>
                        </div>

                        <div className="content">
                            <div className="row">
                                <div>
                                    <h2>Editar Perfil</h2>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder="Nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="cpf"
                                    placeholder="CPF"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    required
                                />
                                {/* <input
                                    type="text"
                                    name="cidade"
                                    placeholder="Cidade"
                                    value={formData.cidade}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="estado"
                                    placeholder="Estado"
                                    value={formData.estado}
                                    onChange={handleChange}
                                    required
                                /> */}
                                <input
                                    type="text"
                                    name="telefone"
                                    placeholder="Telefone"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type={showSenha ? "text" : "password"}
                                    name="senha"
                                    placeholder="Senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type={showSenha ? "text" : "password"}
                                    name="confirmarSenha"
                                    placeholder="Confirmar senha"
                                    value={formData.confirmarSenha}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit" className="login-button">Editar</button>
                            </form>
                            <div className="row">
                                <div className="col-11">
                                    <input
                                        id="mostrarSenha"
                                        type="checkbox"
                                        checked={showSenha}
                                        onChange={() => setShowSenha(!showSenha)}
                                    />
                                    Mostrar Senha
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                {activeSection === 'sales' && (
                    <div className='vendas'>
                        <h2>Vendas</h2>
                        {/* Adicione a lista de vendas aqui */}
                        <p>Lista de vendas aqui...</p>
                    </div>
                )}
                {activeSection === 'purchases' && (
                    <div className='vendas'>
                        <h2>Compras</h2>
                        {/* Adicione a lista de compras aqui */}
                        <p>Lista de compras aqui...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
