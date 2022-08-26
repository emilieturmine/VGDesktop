import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/index.css';import {Home} from '../pages/Home';
import { fetchSync } from './fetchSync';
import { useState, useEffect } from 'react';
import React from 'react';
import { ListeProduits } from '../pages/gestionProduits/ListeProduits';
import { Formulaire } from '../pages/gestionProduits/Formulaire';

const App = (props) => {

    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    


    useEffect(() => {
        fetchSync('https://127.0.0.1:8000/api/produits', 'get').then( (data) => setData(data) );
       
    }, [])
    
    const handleChange = (produit) => {
        fetchSync('https://127.0.0.1:8000/api/produits', 'post', Produit).then( () => {
            fetchSync('https://127.0.0.1:8000/api/produits', 'get').then( (data) => setData(data) );
        });
    }

    
    
    return (
        <BrowserRouter>
       
        <Routes>

        <Route path="/" element={<Home data={data}/>} />
            <Route path="gestionProduits/" element={<ListeProduits data={data} />} />
                <Route path="gestionProduits/add" element={<Formulaire onChange={handleChange} />} />
         
         {/* path="*" fonctionne si jamais l'url ne correspond à rien de  declaré au dessus */}
           {/* <Route path="*" element={<Home />}/> */}

        </Routes>
    </BrowserRouter>
    );
};

export {App};