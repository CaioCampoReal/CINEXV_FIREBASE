import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import tubarao from '../assets/mega fullhd.jpg';
import img2 from '../assets/homem aranha fullhd.webp';
import img3 from '../assets/velozes em fullhd.jpg';
import img4 from '../assets/gran turismo.jpg';


function Novidades() {
    return (
        <section className="novidade">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="main title">Lançamentos em Cartaz</h3>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={tubarao} alt="Mega" className="card-img-top img" />
                            <div className="card-body">
                                <h5 id="text">Os Mercenários</h5>
                                <p className="card-text">Ação/Aventura</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={img2} alt="Mega" className="card-img-top img" />  
                            <div className="card-body">
                                <h5>Os Mercenários</h5>
                                <p className="card-text">Ação/Aventura</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={img3} alt="Mega" className="card-img-top img" />  
                            <div className="card-body">
                                <h5>Os Mercenários</h5>
                                <p className="card-text">Ação/Aventura</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={img4} alt="Mega" className="card-img-top img" />  
                            <div className="card-body">
                                <h5>Os Mercenários</h5>
                                <p className="card-text">Ação/Aventura</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Novidades;
