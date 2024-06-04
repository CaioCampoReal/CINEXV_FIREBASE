import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../assets/logo.png';

// Links da seção "Company"
const companyLinks = [
    { text: 'Sobre', href: '#' },
    { text: 'Empregos', href: '#' },
    { text: 'Imprensa', href: '#' },
    { text: 'Novidades', href: '#' }
];

// Links da seção "Comunidades"
const communityLinks = [
    { text: 'Filmes', href: '#' },
    { text: 'Catálogos', href: '#' },
    { text: 'Estreias', href: '#' }
];

// Links da seção "Links úteis"
const usefulLinks = [
    { text: 'Ajuda', href: '#' },
    { text: 'Fidelidade', href: '#' },
    { text: 'Player', href: '#' }
];

// Links das redes sociais (exemplos com imagens vazias)
const socialMediaLinks = [
    { imgSrc: '', alt: '' },
    { imgSrc: '', alt: '' },
    { imgSrc: '', alt: '' }
];

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* Seção da logo */}
                    <div className="col-md-2">
                        <Link to="#" className="logo">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>

                    {/* Seção "Company" */}
                    <div className="col-md-2">
                        <h4>Company</h4>
                        <ul className="navbar-nav">
                            {companyLinks.map(link => (
                                <li key={link.text}>
                                    <a href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Seção "Comunidades" */}
                    <div className="col-md-2">
                        <h4>Comunidades</h4>
                        <ul className="navbar-nav">
                            {communityLinks.map(link => (
                                <li key={link.text}>
                                    <a href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Seção "Links úteis" */}
                    <div className="col-md-2">
                        <h4>Links úteis</h4>
                        <ul className="navbar-nav">
                            {usefulLinks.map(link => (
                                <li key={link.text}>
                                    <a href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Seção de links das redes sociais */}
                    <div className="col-md-4">
                        <ul className="navbar-nav">
                            {socialMediaLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#">
                                        <img src={link.imgSrc} alt={link.alt} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
