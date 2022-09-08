import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
//Ajouter champ rechercher par date/statut/clients
//ajouter clients
//ajouter pagination
const ListeClients = (props) => {


    return (
        <>

            <h1 className=" text-info text-center mt-5">Liste des clients : </h1>
            <table className="table table-bordered mt-5" >
                <thead className="table bg-info mt-5 text-white text-center">
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>prenom</th>
                        <th>pseudo</th>
                        <th>mail</th>
                        <th>Adresse</th>
                        <th>roles</th>

                        <th>coefficient</th>

                    </tr>
                </thead>
                <tbody>
                    {props.data.map((listeUser,) =>
                        <tr key={listeUser.id} className="text-center">
                            <td> {listeUser.id}</td>
                            <td> {listeUser.nom}</td>
                            <td > {listeUser.prenom}</td>
                            <td > {listeUser.pseudo}</td>
                            <td >{listeUser.email}</td>
                            <td > {listeUser.adresse + ' ' + listeUser.cp + ' ' + listeUser.ville}</td>
                            <td >{listeUser.roles}</td>

                            <td >{listeUser.coefficient}</td>
                        </tr>
                    )}
                </tbody></table>
        </>
    )
}

export { ListeClients }
