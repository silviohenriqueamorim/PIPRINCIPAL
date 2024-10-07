import './Card2.css';
import { Link } from 'react-router-dom';

const Card2 = () => {
  return (
    <main>
      <div className="card">
        <h2 className="card-title">Descubra as regras para postar um carro em nosso site!</h2>
        <div className='button'>
          <Link className='buttonRegras' to='/regras'>Regras</Link>
        </div>
      </div>
    </main>
  );
};

export default Card2;