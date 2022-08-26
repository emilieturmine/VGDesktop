
import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const ListeProduits = (props) => {



    const handleClick = () => {

    }

    return (

        <div className="container">
            <div className="row">
                <h1 className="col-12 text-info text-center mt-5">
                    Liste des produits : </h1>
                <Link to="gestionProduits/add">Nouveau produit</Link>

            </div>
            <div className="row text-center mt-5">

                <table className="col-12 table table-bordered ">
                    <thead className=" bg-info text-white ">
                        <tr>
                            <th>Id</th>
                            <th>Libelle</th>
                            <th>PrixUnitaire</th>
                            <th>Photo</th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            props.data.map((listeProduit, index) =>
                                <div key={listeProduit.id}>
                                    <tr>

                                        <td>{listeProduit.id}</td>
                                        <td>{listeProduit.libelle}</td>
                                        <td>{listeProduit.prixUnitaire}</td>
                                        <td>{listeProduit.photo}</td>
                                    </tr>
                                </div>
                            )
                        }
                    </tbody>
                </table>
            </div> </div>
    );
};

export { ListeProduits };