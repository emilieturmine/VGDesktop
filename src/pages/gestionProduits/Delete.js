import React from 'react';
import { fetchSync } from '../../jsx/fetchSync';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
const Delete = (props) => {

    const { id } = useParams();
    const [produit, setProduit] = useState(
        {
            reference: "",
            libelle: "",
            description: "",
            prixUnitaire: "",
            photo: "",
            stock: 0,
            tva: "",
            prixAchat: "",
            fournisseur: "",
            ssCategorie: "",
        }
    );
    useEffect(() => {
        // console.log("change id")
        fetchSync('/api/produits/' + id, 'get').then((data) => setProduit(data));

    },
        [id]);

    const navigate = useNavigate();

    const handleClickDeleteProduit = (p) => {
        console.log("click sur produit")
        console.log(p);
        props.onClick(p)
        navigate("/gestionProduits");
    }

    console.log(id);

    return (
        <div>
            <h1>Etes vous sur de vouloir supprimer ce produit?
            </h1>
            <button className="btn btn-danger" onClick={() => handleClickDeleteProduit(produit)}>Supprimer</button>
        </div>
    );
};

export default Delete;








