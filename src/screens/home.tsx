import { useState } from 'react';
import Header from '../components/header/Header';
import CarroselMarcas from '../components/contentHome/carroselMarcas';
import Banner from '../components/contentHome/banner';
import Sty from './home.module.css';
import Card1 from '../components/contentHome/Card1';
import Card2 from '../components/contentHome/Card2';
import CarrosselMod from '../components/contentHome/Carrosel';
import CarouselType from '../components/carouselType';
import Recentes from '../components/header/recentes';

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
        <div className={Sty.homeContainerhome}>
            <Header 
                onPositionChange={handlePositionChange} 
                onFocusChange={setIsSearchFocused}
            />
            <div className={Sty.contentContainerhome}>
                <Banner />
                <div className={Sty.carouselWrapper}>
                    <CarroselMarcas />
                </div>
                <div className={Sty.carouselWrapper}>
                    <CarouselType images={images} imagesToShow={3} />
                </div>
                <Card1 />
                <CarrosselMod />
                <Card2 />
            </div>
            {isSearchFocused && <Recentes position={recentesPosition} recentes={recentesArray} onSelect={handleSelectRecent} />}
        </div>
    );
};

export default Home;
