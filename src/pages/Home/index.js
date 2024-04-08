import { Link } from 'react-router-dom';
import Carrossel from '../../components/Carrossel';
import Novidades from '../../components/Novidades';
import Footer from '../../components/Footer';

function Home (){
    return(
        <>
            <Carrossel/>
            <Novidades/> 
            <Footer/>
        </>
    );
}

export default Home;