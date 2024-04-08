import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Lancamentos from "./pages/Lancamentos";
import Contato from "./pages/Contato";


import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/Lancamentos" element={<Lancamentos/>}/>
                <Route path="/Contato" element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;