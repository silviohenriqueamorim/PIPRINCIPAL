import React, { useState , useEffect } from 'react'; 
import styles from './carouselType.module.css'

interface CarouselProps {
  images: string[]; // Lista de URLs de imagens
  imagesToShow?: number; // Imagens a serem exibidas por vez (opcional)
}

const CarouselType: React.FC<CarouselProps> = ({ images, imagesToShow = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [coiso, setCoiso] = useState(70); // Inicializa coiso com 70
  const [coisa, setCoisa] = useState(4); // Inicializa coisa com 4

  const updateCoiso = () => {
    const width = window.innerWidth;
    if (width > 1537) {
      setCoiso(76.5);
    } else if (width >= 1189 && width <= 1536) {
      setCoiso(76.5);
    } else if (width >= 992 && width <= 1190) {
      setCoiso(76.5);
    } else {
      setCoisa(3);
      setCoiso(105);
    }
  };

  useEffect(() => {
    updateCoiso(); // Atualiza o valor de coiso ao montar o componente

    window.addEventListener('resize', updateCoiso); // Adiciona listener para redimensionamento

    return () => {
      window.removeEventListener('resize', updateCoiso); // Remove listener ao desmontar
    };
  }, []);
  // Função para mostrar próxima imagem
  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + 1, images.length - coisa) // Limita o índice para não exceder o número de imagens
    );
  };

  // Função para imagem anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      Math.max(prevIndex - 1, 0) // Limita o índice para não ser menor que 0
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.carouselButton + " " + styles.prevButton} onClick={prevImage}>
      ➔
      </button>
      <div
        className={styles.carouselWrapper}
        style={{ transform: `translateX(-${(currentIndex * coiso) / imagesToShow}%)` }} 
      >
        {/* Mapeia e exibe as imagens */}
        {images.map((image, index) => (
          <img
            key={index} 
            className={styles.carouselImage} 
            src={image} 
            alt={`Carousel Image ${index + 1}`} // Adicionando alt para acessibilidade
          />
        ))}
      </div>
      
      <button className={styles.carouselButton + " " + styles.nextButton} onClick={nextImage}>
      ➔
      </button>
    </div>
  );
};

export default CarouselType;
