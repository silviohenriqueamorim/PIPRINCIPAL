import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './screens/cadastro';
import Login from './screens/login';
import Home from './screens/home';
import Regras from './screens/Regras';
import Perfil from './screens/perfil';
import DetalhesAnuncio from './components/detAnuncio/detalhesAnuncio';
import Compras from './screens/Compras';
import AtualizarCarro from './screens/AtualizarCarro';
import PrimeiraEtapa from './components/VenderCarro/primeira';
import SegundaEtapa from './components/VenderCarro/segunda';
import TerceiraEtapa from './components/VenderCarro/terceira';


const App: React.FC = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/cu" element={<DetalhesAnuncio/>} />
        <Route path="/login" element={<Login />} />
        <Route path='/perfil' element={<Perfil/>} />
        <Route path='/Regras' element={<Regras/>} />
        <Route path='/AtualizarCarro' element={<AtualizarCarro/>} />
        <Route path="/PrimeiraEtapa" element={<PrimeiraEtapa />} />
        <Route path="/SegundaEtapa" element={<SegundaEtapa />} />
        <Route path="/TerceiraEtapa" element={<TerceiraEtapa />} />
      </Routes>
    </Router>
  );
};

export default App;
