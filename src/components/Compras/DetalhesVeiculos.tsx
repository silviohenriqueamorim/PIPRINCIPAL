import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const VehicleDetails = ({ onBuyClick, onSendMessageClick }) => {
  const car = {
    imageUrls: [
      '../src/assets/car1.png',
      '../src/assets/car2.png',
      '../src/assets/car3.png',
      '../src/assets/car4.png'
    ],
    brand: 'Marca',
    model: 'Modelo',
    price: 150000,
    seller: 'Nome do Vendedor',
    city: 'Cidade',
    transmission: 'Automático',
    manufactureYear: 2020,
    bodyType: 'Sedan',
    modelYear: 2021,
    fuelType: 'Gasolina',
    mileage: 30000,
    color: 'Preto',
    description: 'Descrição detalhada do veículo.'
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <div className="container">
      {/* Seção de Imagem */}
      <div className="car-image">
        <Slider {...settings}>
          {car.imageUrls.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`${car.brand} ${car.model}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Informações do Veículo */}
      <div className="car-details">
        <h1>{car.brand} {car.model}</h1>
        <h2>{formatCurrency(car.price)}</h2>
        <div className="details-section">
          <h3>Detalhes do Anúncio</h3>
          <div className="details-columns">
            <div className="details-column">
              <p><strong>Veículo:</strong> {car.model}</p>
              <p><strong>Vendedor:</strong> {car.seller}</p>
              <p><strong>Marca:</strong> {car.brand}</p>
              <p><strong>Modelo:</strong> {car.model}</p>
              <p><strong>Cidade:</strong> {car.city}</p>
              <p><strong>Câmbio:</strong> {car.transmission}</p>
            </div>
            <div className="details-column">
              <p><strong>Ano de Fabricação:</strong> {car.manufactureYear}</p>
              <p><strong>Carroceria:</strong> {car.bodyType}</p>
              <p><strong>Ano de Modelo:</strong> {car.modelYear}</p>
              <p><strong>Combustível:</strong> {car.fuelType}</p>
              <p><strong>KM:</strong> {car.mileage.toLocaleString('pt-BR')} km</p>
              <p><strong>Cor:</strong> {car.color}</p>
            </div>
          </div>
          <h3>Descrição do Veículo</h3>
          <p>{car.description}</p>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="buttons">
        <button className="buy-button" onClick={onBuyClick}>Comprar</button>
        <button className="call-button">📞</button>
        <button className="message-button" onClick={onSendMessageClick}>Enviar Mensagem</button>
      </div>
    </div>
  );
};

export default VehicleDetails;
