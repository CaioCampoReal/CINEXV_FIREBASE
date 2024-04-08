import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../assets/logo.png';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Link to="#" className="logo"><img src={logo} alt="Logo"></img></Link>
                    </div>
                    <div className="col-md-2">
                        <h4>Company</h4>
                        <ul className="navbar-nav">
                            <li><a href="">Sobre</a></li>
                            <li><a href="">Empregos</a></li>
                            <li><a href="">Imprensa</a></li>
                            <li><a href="">Novidades</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Comunidades</h4>
                        <ul className="navbar-nav">
                            <li><a href="">Filmes</a></li>
                            <li><a href="">Catálogos</a></li>
                            <li><a href="">Estreias</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Links úteis</h4>
                        <ul className="navbar-nav">
                            <li><a href="">Ajuda</a></li>
                            <li><a href="">Fidelidade</a></li>
                            <li><a href="">Player</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li><a href=""><img src="" alt="" /></a></li>
                            <li><a href=""><img src="" alt="" /></a></li>
                            <li><a href=""><img src="" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
