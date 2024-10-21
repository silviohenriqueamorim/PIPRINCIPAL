import React from 'react';
import Style from './detalhesAnuncio.module.css'

const agora = new Date();
const formattedDate = agora.toLocaleDateString(); // Format the date

const DetalhesAnuncio = () => {
  return (
    <div className={Style.container} >
      <div className='cabeçalho' style={{backgroundColor:"red", display:"flex", width:"100vw"}}><div className='backButton' style={{justifySelf:"left", margin:"0 10px 0 10px"}}>‹-</div> <div className='titulo' style={{justifySelf:"center"}}>Tìtulo do Anúncio</div></div>

      <div className="content" style={{display:"flex", justifyContent:"center"}}>
        <div style={{}}><img className='imgCarro' src="https://www.webmotors.com.br/wp-content/uploads/2024/10/07173258/Hyundai-Creta-Comfort-3-scaled.webp" style={{width:"50vw"}} alt="" /></div>
        <div className='informaçõesCarro' style={{backgroundColor:"rosybrown", width:"50%"}}>
          <h2 className='tituloAnuncio'>Título do Anúncio</h2>
          <div className="flex">
            <div>data de publicação <span className="dataAnuncio">DD/MM/AAAA</span></div>
            <div>visto no dia: {formattedDate}</div>
            <div>Whatsapp</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DetalhesAnuncio;
