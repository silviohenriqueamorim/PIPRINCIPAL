
import { useState } from 'react';
import User from '../components/perfil/user';
import ProfilePage from '../components/perfil/ProfilePage';
import Header from '../components/header/Header';
import Recentes from '../components/header/recentes';
import Sty from './home.module.css';



const Perfil = () => {
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
        <div>
            <Header 
                onPositionChange={handlePositionChange} 
                onFocusChange={setIsSearchFocused} 
            />
            <div style={{overflowY:"scroll", height:"100vh", width:"100vw"}}>
                <div className={Sty.contentContainerhome} style={{width:"60vw", marginTop:"130px"}}>
                <User />
                <ProfilePage />
                </div>
            </div>
            {isSearchFocused && <Recentes position={recentesPosition} recentes={recentesArray} onSelect={handleSelectRecent} />}
        </div>
        
    );
};


export default Perfil;