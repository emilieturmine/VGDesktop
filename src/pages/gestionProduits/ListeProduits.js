import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

const ListeProduits = (props) => {
    const handleClick = () => { }

    return (
        <>
            <h1 className=" text-info text-center mt-5">Liste des produits : </h1>
            <button
                className=" text-center btn btn-success mt-5
                text_white "
            >
                {' '}
                <Link to="/add">Nouveau produit</Link>
            </button>

            <table className="table table-bordered mt-5" >
                <thead className="table bg-info mt-5 text-white text-center">
                    <tr>
                        <th>Id</th>
                        <th>Libelle</th>
                        <th>Reference</th>
                        <th>PrixUnitaire</th>
                        <th>Photo</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((listeProduit, index) => (
                        <tr key={listeProduit.id} className="text-center">
                            <td>{listeProduit.id}</td>
                            <td>{listeProduit.libelle}</td>
                            <td>{listeProduit.reference}</td>
                            <td>{listeProduit.prixUnitaire}</td>

                            <td>   <img src={"https://localhost:8000/imagesVG/propho/" + listeProduit.photo} alt={listeProduit.libelle} style={{ width: "150px", height: "150px" }} /></td>
                            <td>
                                <button className="bg-info text-white mt-5">Details</button>
                                <button className="bg-warning text-white ml-3 mt-5">Modifier</button>
                                <button className="bg-danger text-white mt-5">Supprimer</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export { ListeProduits }
