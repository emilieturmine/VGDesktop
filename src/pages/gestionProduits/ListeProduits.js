import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSync } from '../../jsx/fetchSync';
import React from 'react';
import { Link } from 'react-router-dom';
const ListeProduits = (props) => {



    const handleClick = () => {

    }

    return (
        <>
            <div>
                Liste
                <Link to="gestionProduits/add">Ajouter</Link>
            </div>
            {
                props.data2.map((produit, index) =>
                    <div key={index}>
                        {produit.libelle}
                    </div>
                )
            }
        </>
    );
};

export { ListeProduits };