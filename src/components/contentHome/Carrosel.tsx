import React, { useState } from 'react';
import Styles from './Carrosel.module.css';
import carro1 from "../../assets/carro1.jpg";
import carro3 from "../../assets/carro1.png";

const images: string[] = [carro1, carro3];

const CarrosselMod: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <main className={Styles.mainContent}>
            <div className={Styles.pai}>
                <div>
                    <h1>Modelos mais Procurados</h1>
                </div>
                <section className={Styles.carInfo}>
                    <img
                        src={images[currentIndex]}
                        alt="Imagem de um carro moderno em um ambiente urbano"
                        className={Styles.carImage}
                    />
                    <button className={`${Styles.leftMod} ${Styles.button}`} onClick={prevImage}>‹</button>
                    <button className={`${Styles.rightMod} ${Styles.button}`} onClick={nextImage}>›</button>
                </section>
            </div>
        </main>
    );
};

export default CarrosselMod;