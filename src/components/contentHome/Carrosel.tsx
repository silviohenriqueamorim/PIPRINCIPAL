import React, { useState } from 'react';
import './Carrosel.css';
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
        <main className="main-content">
            <div className='pai'>
                <div>
                    <h1>Modelos mais Procurados</h1>
                </div>
            <section className="car-info">
                <img
                    src={images[currentIndex]}
                    alt="Imagem de um carro moderno em um ambiente urbano"
                    className="car-image"
                    />
                <button className="leftMod" onClick={prevImage}>‹</button>
                <button className="rightMod" onClick={nextImage}>›</button>
            </section>
        </div>
        </main>
    );
};

export default CarrosselMod;
