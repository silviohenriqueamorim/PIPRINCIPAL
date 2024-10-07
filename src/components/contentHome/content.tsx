import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Style from './content.css'; // Verifique o caminho do CSS
import CarroselMarcas from './carroselMarcas'; // Certifique-se de que o caminho está correto

const ContentHome: React.FC = () => {
    return (
        <div className={Style.contentContainer}>
            <CarroselMarcas />
        </div>
    );
};

export default ContentHome;
