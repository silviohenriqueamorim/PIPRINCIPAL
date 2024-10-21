import React, { useState } from 'react';
import './terceira.css'; // Certifique-se de que o CSS está corretamente linkado

const InformacoesCarro: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);

  // Função para lidar com o upload de imagens
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files[0]) {
      const newImages = [...images];
      newImages[index] = e.target.files[0];
      setImages(newImages);
    }
  };

  return (
    <div className="informacoes-container">
      <h1 className="titulo-pagina">Etapa final</h1>
      <p className="subtitulo">Adicione Imagens do Carro</p>
      <div className="input-imagens-container">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="input-imagem">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, index)}
              className="input-file"
            />
          </div>
        ))}
      </div>
      <button className="botao-etapa-final">Etapa Final</button>
    </div>
  );
};

export default InformacoesCarro;
