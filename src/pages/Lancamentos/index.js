import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import img1 from '../promo1.jpeg'
import img2 from '../promo2.png'
import img3 from '../promo3.png'
import img4 from '../promo4.png'


function Lancamentos() {
    return (
        <section className="novidade lancamento">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="main title">Novidade e Promoções</h3>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={img1} alt="Mega" className="card-img-top img" />
                            <div className="card-body">
                                <h5 id="text">Promoção</h5>
                                <p className="card-text">Semana do Cinema</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={img2} alt="Mega" className="card-img-top img" />  
                            <div className="card-body">
                                <h5>Promoção</h5>
                                <p className="card-text">Semana do Cinema</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={img3} alt="Mega" className="card-img-top img" />  
                            <div className="card-body">
                                <h5>Promoção</h5>
                                <p className="card-text">Semana do Cinema</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={img4} alt="Mega" className="card-img-top img" />  
                            <div className="card-body">
                                <h5>Promoção</h5>
                                <p className="card-text">Semana do Cinema</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Lancamentos;
