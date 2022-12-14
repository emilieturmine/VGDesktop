import { Entete } from '../../components/Entete';
import React from 'react';

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Formulaire1 = (props) => {

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

    const navigate = useNavigate();


    const handleChangeNewProduit = (evt) => {
        let p = { ...produit };
        // if (evt.target.name == "reference") {
        //    p.reference = evt.target.value; 
        // }
        // if (evt.target.name == "libelle") {
        //     p.libelle = evt.target.value; 
        //  }
        p[evt.target.name] = evt.target.value;
        setProduit(p);
    }

    const handleSubmit = (evt) => {

        props.onChange(produit);

        navigate("/gestionProduits");
    }


    return (

        <div className="container">

            <div className="row">
                <form className="was-validated col-12  text-info">
                    <h1 className="form-group text-center mt-5">Creer un produit</h1>

                    <label htmlFor="reference">Reference:</label>
                    <input type="text" className="form-control mt-5" name="reference" placeholder='La reference du produit' value={produit.reference} onChange={handleChangeNewProduit} required /><br />

                    <label htmlFor="libelle">Libelle:</label>
                    <input type="text" className="form-control mt-3" name="libelle" placeholder='Le libelle du produit' value={produit.libelle} onChange={handleChangeNewProduit} required /><br />

                    <label htmlFor="description">Description:</label>
                    <textarea type="textarea" className="form-control mt-3" name="description" placeholder='La description du produit' value={produit.description} onChange={handleChangeNewProduit} required /><br />

                    <label htmlFor="prixUnitaire">Prix Unitaire:</label>
                    <input type="text" className="form-control mt-3" name="prixUnitaire" placeholder='Le prix unitaire du produit' value={produit.prixUnitaire} onChange={handleChangeNewProduit} required /><br />

                    <label htmlFor="photo">Photo:</label>
                    <input type="text" className="form-control mt-3" name="photo" placeholder='La photo du produit' value={produit.photo} onChange={handleChangeNewProduit} required /><br />

                    <label htmlFor="stock">Stock:</label>
                    <input type="number" className="form-control mt-3" name="stock" placeholder='Le stock du produit' value={produit.stock} onChange={handleChangeNewProduit} required /><br />

                    <label htmlFor="tva">TVA:</label>
                    <input type="text" className="form-control mt-3" name="tva" placeholder=' Le taux de TVA du produit' value={produit.tva} onChange={handleChangeNewProduit} required /><br />

                    <label htmlFor="prixAchat">Prix d'achat:</label>
                    <input type="text" className="form-control mt-3" name="prixAchat" placeholder="Le prix d'achat" value={produit.prixAchat} onChange={handleChangeNewProduit} required /><br />

                    <div className="form-group">

                        <label htmlFor="fournisseur">Fournisseur:</label>
                        <select className="form-control mt-3" name="fournisseur" placeholder="Choisissez le nom du fournisseur" value={produit.fournisseur} onChange={handleChangeNewProduit} required >
                            <option value="Choisissez" selected>Choisissez le fournisseur.</option>
                            {props.data.fournisseurs.map((fournisseurs, index) => (
                                <option key={fournisseurs.id} className="text-center">{fournisseurs.nom}</option>

                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ssCategorie">Sous-categorie:</label>
                        <select className="form-control mt-3" name="ssCategorie" value={produit.ssCategorie} onChange={handleChangeNewProduit} required >
                            <option value="Choisissez" selected>Choisissez la sous categorie.</option>
                            {props.data.ssCategories.map((ssCategories, index) => (
                                <option key={ssCategories.id} placeholder="Choisissez la cat??gorie" className="text-center">{ssCategories.nom}</option>

                            ))}</select>
                    </div>
                    <button className='btn btn-success mt-5' type="button" onClick={handleSubmit}>Valider</button>







                    <button className='btn btn-warning mt-5' type="button"><Link to="/gestionProduits">Retour</Link></button>

                </form >
            </div >
        </div >

    );
}

export { Formulaire1 };