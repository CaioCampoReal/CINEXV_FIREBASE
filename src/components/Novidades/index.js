import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConnection';
import './style.css';

import { collection, onSnapshot } from 'firebase/firestore';

function Novidades() {
    const [filmes, setPosts] = useState([]);

    useEffect(() => {
        // Função para carregar os posts de filmes do Firestore
        async function loadPosts() {
            const unsub = onSnapshot(collection(db, "filmes"), (snapshot) => {
                let listaFilme = [];

                snapshot.forEach((doc) => {
                    listaFilme.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        categoria: doc.data().categoria,
                        foto: doc.data().foto,
                    });
                });

                setPosts(listaFilme);
            });

            return () => unsub();
        }

        loadPosts();
    }, []);

    return (
        <section className="novidade">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="main-title">Lançamentos em Cartaz</h3>
                    </div>
                    {filmes.map((filme) => (
                        <div className="col-md-6" key={filme.id}>
                            <div className="card">
                                {/* Limitação do tamanho da imagem */}
                                <img 
                                    src={filme.foto} 
                                    alt={filme.titulo} 
                                    className="card-img-top img" 
                                    style={{ maxWidth: '100%', maxHeight: '200px' }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{filme.titulo}</h5>
                                    <p className="card-text">{filme.categoria}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Novidades;
