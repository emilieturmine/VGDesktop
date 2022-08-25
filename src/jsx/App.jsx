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

    useEffect(() => {
         
        fetchSync('https://127.0.0.1:8000/api/contacts', 'get').then( (data) => setData1(data) );
        fetchSync('https://127.0.0.1:8000/api/produits', 'get').then( (data) => setData2(data) );
       
    }, [])
    
    const handleChange = (produit) => {
        fetchSync('https://127.0.0.1:8000/api/produits', 'post', produit).then( () => {
            fetchSync('https://127.0.0.1:8000/api/produits', 'get').then( (data) => setData2(data) );
        });
    }

    
    
    return (
        <BrowserRouter>
       
        <Routes>

        <Route path="/" element={<Home data={data1}/>} />
            <Route path="gestionProduits/" element={<ListeProduits data={data2} />} />
                <Route path="gestionProduits/add" element={<Formulaire onChange={handleChange} />} />
           {/* <Route path="/Souscategories/:id" element={<Souscategories data={data2} onClick={handleClickSsCategorie} />} />
            <Route path="/Produits/:id" element={<Produits data={data3}/>} onClick={handleClickProduit} />
            <Route path="/Details/:id" element={<Details data={data4}/>} />
            <Route path="/Marques" element={<Marques data={data5}/>} />
            <Route path="/Actus" element={<Actus data={data6}/>} /> */}
         {/* path="*" fonctionne si jamais l'url ne correspond à rien de  declaré au dessus */}
           {/* <Route path="*" element={<Home />}/> */}

        </Routes>
    </BrowserRouter>
    );
};

export {App};