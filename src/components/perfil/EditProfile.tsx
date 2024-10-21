import React from 'react';
import styles from './EditProfile.module.css';

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
    </svg>
);

interface EditProfileProps {
    formData: {
        nome: string;
        email: string;
        cpf: string;
        telefone: string;
        senha: string;
        confirmarSenha: string;
        nascimento: string; // Adicionei a propriedade nascimento
        cidade: string; // Adicionei a propriedade cidade
        estado: string; // Adicionei a propriedade estado
    };
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    showSenha: boolean;
    setShowSenha: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleDelete: () => void; // Função para lidar com a exclusão
}

const EditProfile: React.FC<EditProfileProps> = ({ formData, setFormData, showSenha, setShowSenha, handleSubmit, handleDelete }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className={styles.loginContainer}>
            <h2>Editar Perfil</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className={styles.fullWidth}
                />
                <div className={styles.row}>
                    <input
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        value={formData.cpf}
                        onChange={handleChange}
                        required
                        className={styles.halfWidth}
                    />
                    <input
                        type="date"
                        name="nascimento"
                        placeholder="Data de Nascimento"
                        value={formData.nascimento}
                        onChange={handleChange}
                        required
                        className={styles.halfWidth}
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.fullWidth}
                />
                <div className={styles.row}>
                    <input
                        type="text"
                        name="cidade"
                        placeholder="Cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        required
                        className={styles.halfWidth}
                    />
                    <input
                        type="text"
                        name="estado"
                        placeholder="Estado"
                        value={formData.estado}
                        onChange={handleChange}
                        required
                        className={styles.halfWidth}
                    />
                </div>
                <input
                    type="text"
                    name="telefone"
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className={styles.halfWidth}
                />
                <div className={styles.passwordContainer}>
                    <input
                        type={showSenha ? "text" : "password"}
                        name="senha"
                        placeholder="Senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                        className={styles.fullWidth}
                    />
                    <div className={styles.confirmPasswordContainer}>
                        <input
                            type={showSenha ? "text" : "password"}
                            name="confirmarSenha"
                            placeholder="Confirmar senha"
                            value={formData.confirmarSenha}
                            onChange={handleChange}
                            required
                            className={styles.fullWidth}
                        />
                        <div className={styles.showPassword}>
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
                <div className={styles.actions}>
                    <button type="button" onClick={handleDelete} className={styles.deleteButton}>
                        <TrashIcon />
                    </button>
                    <button type="submit" className={styles.loginButton}>Editar</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
