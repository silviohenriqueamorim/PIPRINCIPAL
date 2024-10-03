import React from 'react';
import './user.css';
import perfil from '../../assets/perfil1.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const User: React.FC = () => {
  
    const Usuario = {
        name: 'João da Silva',
        nascimento: '01/01/1990',
        cpf: '123.456.789-00',
        email: 'joao.silva@example.com',
        telefone: '(11) 98765-4321',
    };

    return (
        <div className="container">
            <div className="dados">
                <div className="perfil-container">
                <img src={perfil} alt="perfil" className='perfil'/>
                </div>
                <div className="userInfo">
                    <h2>{Usuario.name}</h2>
                    <p><strong>Data de Nascimento:</strong> {Usuario.nascimento}</p>
                    <hr className="hr"/>

                    <p><strong>CPF:</strong> {Usuario.cpf}</p>
                    <hr className="hr"/>

                    <p><strong>Email:</strong> {Usuario.email}</p>
                    <hr className="hr"/>

                    <p><strong>Telefone:</strong> {Usuario.telefone}</p>
                    <hr className="hr"/>
                </div>
            </div>
        </div>
    );
};

export default User;