import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/index.css';import {Home} from '../pages/Home';
import { fetchSync } from './fetchSync';
import { useState, useEffect } from 'react';
import React from 'react';
import { ListeProduits } from '../pages/gestionProduits/ListeProduits';
import { Formulaire } from '../pages/gestionProduits/Formulaire';

const App = (props) => {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);


    useEffect(() => {
        fetchSync('https://127.0.0.1:8000/api/produits', 'get').then( (data) => setData1(data) );
        fetchSync('https://127.0.0.1:8000/api/ss_categories', 'get').then( (data) => setData2(data) );
        fetchSync('https://127.0.0.1:8000/api/fournisseurs', 'get').then( (data) => setData3(data) );
    }, [])
    const dataFP = {
        produits: data1,
        ssCategories : data2,
        fournisseurs: data3,
    }
    const handleChange = (produit) => {
        fetchSync('https://127.0.0.1:8000/api/produits', 'post', produit).then( (retour) => {

            fetchSync('https://127.0.0.1:8000/api/produits', 'get').then( (data) => setData(data) );
        });
    }

    
    
    return (
        <BrowserRouter>
       
        <Routes>

        <Route path="/" element={<Home data={data1}/>} />
            <Route path="gestionProduits/" element={<ListeProduits data={data1} />} />
                <Route path="/add" element={<Formulaire data={dataFP} />} onChange={handleChange} />
         
         {/* path="*" fonctionne si jamais l'url ne correspond à rien de  declaré au dessus */}
           {/* <Route path="*" element={<Home />}/> */}

        </Routes>
    </BrowserRouter>
    );
};

export {App};