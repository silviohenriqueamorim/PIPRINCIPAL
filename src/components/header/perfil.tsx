import perfilImage from '../../assets/perfil1.png'; // Substitua pelo caminho para a sua imagem de perfil
import sty from './perfil.module.css'; // Arquivo CSS para estilizar o perfil, se necessário
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Perfil = () => {
  return (
    <div className={`containerr ${sty.containerr}`}>
      <div className={`foto ${sty.foto}`}>
        <img
        src={perfilImage}
        alt="perfil"
        className={`perfilImage ${sty.perfilImage}`}
        />
      </div>
      <div  className={`texto ${sty.texto}`}>
        <div>Usuário</div>
        <div>ver perfil</div>
      </div>
      <div  className={`textinho ${sty.textinho}`}>
        <div>Usuário</div>
      </div>
    </div>
  );
};

export default Perfil;