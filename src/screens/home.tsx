import { useState } from 'react';
import Header from '../components/header/Header';
import CarroselMarcas from '../components/contentHome/carroselMarcas';
import Banner from '../components/contentHome/banner';
import Sty from './home.module.css';
import Card1 from '../components/contentHome/Card1';
import Card2 from '../components/contentHome/Card2';
import CarrosselMod from '../components/contentHome/Carrosel';
import CarouselType from '../components//contentHome/carouselType';
import Recentes from '../components/header/recentes';import tamanhoFamilia from '../assets/tamanhoFamilia.jpg';
import carrosEconomicos from '../assets/carrosEconomicos.jpg';
import diesel from '../assets/diesel.jpg';
import eletricos from '../assets/eletricos.png';
import hatches from '../assets/hatches.jpg';
import picape from '../assets/picape.png';
import sedans from '../assets/sedans.png';
import suvs from '../assets/suvs.png';

const images = [
    tamanhoFamilia,
    carrosEconomicos,
    diesel,
    eletricos,
    hatches,
    picape,
    sedans,
    suvs,
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
        {/* copiar Header e Recentes */}
            <Header 
                onPositionChange={handlePositionChange} 
                onFocusChange={setIsSearchFocused}
            />
            <div className={Sty.contentContainerhome}>
                <Banner />
                <div className={Sty.carouselWrapper} style={{display:"flex", justifyContent:"center", width:"100vw"}}>
                    <CarroselMarcas />
                </div>
                <div className={Sty.carouselWrapper}>
                    <CarouselType images={images} imagesToShow={3} />
                </div>
                <Card1 />
                <CarrosselMod />
                <Card2 />
            </div>
            {/* RECENTES DO HEADER */}
            {isSearchFocused && <Recentes position={recentesPosition} recentes={recentesArray} onSelect={handleSelectRecent} />}
        </div>
    );
};

export default Home;
