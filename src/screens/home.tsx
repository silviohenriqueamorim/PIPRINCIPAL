import Header from '../components/header/Header';
import CarroselMarcas from '../components/contentHome/carroselMarcas';
import Banner from '../components/contentHome/banner';
//import Footer from '../components/header/footer/footer';
import './home.css';
import Card1 from './Card1';
import CarrosselMod from '../components/contentHome/Carrosel';
import CarouselType from '../components/carouselType';

const images = [
    'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardMobile/507b05cc-4af7-4d48-96f5-22ca1b545ffc_CardMobile.webp?s=fill&w=274&h=216&q=70',
    'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardMobile/28904da6-5db0-42e1-b74c-45fb9c83909f_CardMobile.webp?s=fill&w=274&h=216&q=70',
    'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardMobile/e849a8dc-1dff-4535-ac80-28273ce89947_CardMobile.webp?s=fill&w=274&h=216&q=70',
    'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardMobile/807577e8-f8f8-4744-ac73-ef03697e3e28_CardMobile.jpg?s=fill&w=274&h=216&q=70',
    'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardMobile/68928b84-9d65-4987-8a4a-c1d511cbfa79_CardMobile.jpg?s=fill&w=274&h=216&q=70',
    "https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/cdb35e13-66a2-4653-8414-f41f408e34da_CardDesktop.webp?s=fill&w=274&h=216&q=70",
    "https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/980c1c63-9e76-490e-b460-af82933530ae_CardDesktop.jpg?s=fill&w=274&h=216&q=70",
    "https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/7529b723-6701-4b1f-809c-139f972b707f_CardDesktop.jpg?s=fill&w=274&h=216&q=70",
  ];

const Home = () => {
    return (
        <div className="home-containerhome">
            <Header />
            <div className="content-containerhome">
                <Banner />
                <div style={{display:"flex", justifyContent:"center", width:"100vw",maxWidth:"1166px", margin:"0 auto", height:"fit-content"}}>
                    <CarroselMarcas />
                </div>
                <div style={{display:"flex", justifyContent:"center", width:"100vw", margin:"0"}}>
                    <CarouselType images={images} imagesToShow={3} />
                </div>
                <Card1 />
                <CarrosselMod />

            </div>
        </div>
    );
};

export default Home;
