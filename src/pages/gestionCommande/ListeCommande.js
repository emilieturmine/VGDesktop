import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
//Ajouter champ rechercher par date/statut/clients
//ajouter clients
//ajouter pagination
const ListeCommande = (props) => {


    return (
        <>

            <h1 className=" text-info text-center mt-5">Liste des commandes : </h1>

            <table className="table table-bordered mt-5" >
                <thead className="table bg-info mt-5 text-white text-center">
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Statut</th>
                        <th>Total</th>
                        <th>Clients</th>
                        <th>Details</th>

                    </tr>
                </thead>
                <tbody>
                    {props.data.commandes.map((listeCommande,) =>
                        <tr key={listeCommande.id} className="text-center">
                            <td>{listeCommande.id}</td>
                            <td>{listeCommande.date}</td>
                            <td>{listeCommande.statut}</td>
                            <td>{listeCommande.total}</td>
                            <td>{listeCommande.user.nom + ' ' + listeCommande.user.prenom}</td>
                            <td>
                                <button className=" text-white mt-5 mr-5">
                                    <Link
                                        to={"/DetailCommande/" + listeCommande.id}
                                        key={listeCommande.id}
                                        className="col-6 col-sm-3 justify-content-space-between text-center mt-5 "

                                    >
                                        Commande
                                    </Link>
                                </button>

                                <button className="text-white mt-5 mr-5">
                                    <Link
                                        to={"/DetailLivraison/" + listeCommande.id}
                                        key={listeCommande.id}
                                        className="col-6 col-sm-3 justify-content-space-between text-center mt-5 "

                                    >
                                        Livraison
                                    </Link></button>
                                <button className="text-white mt-5">
                                    <Link
                                        to={"/DetailClient/" + listeCommande.id}
                                        key={listeCommande.id}
                                        className="col-6 col-sm-3 justify-content-space-between text-center mt-5 "

                                    >
                                        Client
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export { ListeCommande }
