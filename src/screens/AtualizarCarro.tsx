import React, { useState } from 'react';
import './AtualizarCarro.css';
import Header from '../components/header/Header';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    cep: '',
    cidade: '',
    estado: '',
    logradouro: '',
    numero: '',
    complemento: '',
    marca: '',
    modelo: '',
    informacoes: '',
    valor: '',
    anoFabricacao: '',
    anoModelo: '',
    km: '',
    cambio: '',
    carroceria: '',
    combustivel: '',
    cor: '',
    descricao: '',
  });

  const [photos, setPhotos] = useState<(string | null)[]>(Array(6).fill(null));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.cep || !formData.cidade || !formData.estado) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    console.log('Dados enviados:', formData);
  };

  const handlePhotoUpload = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newPhotos = [...photos];
        newPhotos[index] = reader.result as string;
        setPhotos(newPhotos);
      };
      reader.readAsDataURL(file);
    }
  };

    const [recentesPosition, setRecentesPosition] = useState({ x: 0, y: 0, width: 0 });
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const recentesArray = ['Item 1', 'Item 2', 'Item 3'];

    const handlePositionChange = (x: number, y: number, width: number) => {
        setRecentesPosition({ x, y, width });
    };

    const handleSelectRecent = (item: string) => {
        const searchInput = document.getElementById("searchBar") as HTMLInputElement;
        if (searchInput) {
            searchInput.value = item;
            searchInput.focus(); 
            const event = new KeyboardEvent('keydown', { key: 'Enter' });
            searchInput.dispatchEvent(event);
        }
    };

  return (
    <>
          <Header 
            onPositionChange={handlePositionChange} 
            onFocusChange={setIsSearchFocused}
            />
      <header>
        <h1>Formulário de Carros</h1>
      </header>

      <div className="containerAtualizarCarro">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="onde">Onde se localiza o Carro?</h2>
          <div className="form-group">
            <input type="number" name="cep" placeholder="CEP" onChange={handleChange} />
            <input type="text" name="cidade" placeholder="Cidade" onChange={handleChange} />
            <input type="text" name="estado" placeholder="Estado" onChange={handleChange} />
            <input type="text" name="logradouro" placeholder="Logradouro" onChange={handleChange} />
            <input type="text" name="numero" placeholder="Número" onChange={handleChange} />
            <input type="text" name="complemento" placeholder="Complemento" onChange={handleChange} />
          </div>

          <h3>Fotos</h3>
          <div className="photo-section">
            {photos.map((photo, index) => (
              <div key={index} className="photo-placeholder" onClick={() => document.getElementById(`fileInput-${index}`)?.click()}>
                {photo ? <img src={photo} alt={`Preview ${index + 1}`} /> : '+'}
                <input
                  type="file"
                  id={`fileInput-${index}`}
                  accept="image/*"
                  onChange={handlePhotoUpload(index)}
                />
              </div>
            ))}
          </div>

          <h3>Digite Informações do Carro</h3>
          <div className="form-group">
            <input type="text" name="marca" placeholder="Marca" onChange={handleChange} />
            <input type="text" name="modelo" placeholder="Modelo" onChange={handleChange} />
            <input type="text" name="informacoes" placeholder="Informações do carro" onChange={handleChange} />
            <input type="text" name="valor" placeholder="Valor" onChange={handleChange} />
            <input type="text" name="anoFabricacao" placeholder="Ano de Fabricação" onChange={handleChange} />
            <input type="text" name="anoModelo" placeholder="Ano de Modelo" onChange={handleChange} />
            <input type="text" name="km" placeholder="Km" onChange={handleChange} />
            <input type="text" name="cambio" placeholder="Câmbio" onChange={handleChange} />
            <input type="text" name="carroceria" placeholder="Carroceria" onChange={handleChange} />
          </div>
          <div className='outro'>
            <input type="text" name="combustivel" placeholder="Combustível" onChange={handleChange} />
            <input type="text" name="cor" placeholder="Cor" onChange={handleChange} />
          </div>
          <textarea className="descricao" name="descricao" placeholder="Descrição do Veículo" onChange={handleChange}></textarea>
          <button type="submit" className="confirm-button">Confirmar</button>
        </form>

      </div>
      {isSearchFocused && <Recentes position={recentesPosition} recentes={recentesArray} onSelect={handleSelectRecent} />}
    </>
  );
};

export default App;
