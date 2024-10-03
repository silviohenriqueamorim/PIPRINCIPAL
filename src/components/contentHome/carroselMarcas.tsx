import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carBrand1 from '../../assets/carBrand1.png';
import carBrand2 from '../../assets/carBrand3.png';
import carBrand3 from '../../assets/carBrand4.png';
import styles from './carroselMarcas.module.css';

const images = [
    carBrand1, "https://www.webmotors.com.br/imagens/prod/portal/img/logos/carro/byd.webp?s=fill&w=180&h=180&q=70", carBrand2, carBrand3, "https://www.webmotors.com.br/imagens/prod/portal/img/logos/carro/toyota.webp?s=fill&w=180&h=180&q=70",
    "https://www.webmotors.com.br/imagens/prod/portal/img/logos/carro/nissan.webp?s=fill&w=180&h=180&q=70"
];

const CardCarousel: React.FC = () => {
    const [visibleImagesCount, setVisibleImagesCount] = useState(images.length);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 450) {
                setVisibleImagesCount(images.length - 3);
            } else if (width < 600) {
                setVisibleImagesCount(images.length - 2);
            } else if (width < 992) {
                setVisibleImagesCount(images.length - 1);
            } else {
                setVisibleImagesCount(images.length);
            }
        };

        handleResize(); // Chama ao montar o componente
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.carousel + " row"}>
            {images.slice(0, visibleImagesCount).map((image, index) => (
                <div className={styles.card} key={index}>
                    <img src={image} className={styles.imgCard} alt={`Car Brand ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default CardCarousel;
