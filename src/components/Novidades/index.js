import React from 'react';
import { useState, useEffect } from 'react'
import { db, auth } from '../../firebaseConnection';
import { Link } from 'react-router-dom';
import './style.css';
import tubarao from "../assets/Megatubarão.jpg";
import img2 from '../assets/homem aranha fullhd.webp';
import img3 from '../assets/velozes em fullhd.jpg';
import img4 from '../assets/gran turismo.jpg';

import { 
    doc, 
    setDoc, 
    collection, 
    addDoc, 
    getDoc, 
    getDocs, 
    updateDoc, 
    deleteDoc,
    onSnapshot
  } from 'firebase/firestore'

function Novidades() {
    // const [idPost, setIdPost] = useState('')
    const [filmes, setPosts] = useState([]);
    // const [desc, setDesc] = useState('');
    useEffect(() => {
        async function loadPosts() {
            const unsub = onSnapshot(collection(db, "filmes"), (snapshot) => {
                let listaFilme = [];

                snapshot.forEach((doc) => {
                    listaFilme.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        categoria: doc.data().categoria,
                        foto: doc.data().foto,
                    })
                })

                setPosts(listaFilme);
            })
        }

        loadPosts();

    }, [])
    return (
        <section className="novidade">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h3 className="main title">Lançamentos em Cartaz</h3>
            </div>
            {filmes.map((filme) => {
                return (
                    <div className="col-md-6" key={filme.id}>
                        <div className="card">
                            {/* Limiting image size */}
                            <img src={filme.foto} alt="Mega" className="card-img-top img" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                            
                            <div className="card-body">
                                <h5 id="text">{filme.titulo}</h5>
                                <p className="card-text">{filme.categoria}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
</section>

    );
}

export default Novidades;
