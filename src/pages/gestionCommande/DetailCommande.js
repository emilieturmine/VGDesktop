import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSync } from '../../jsx/fetchSync';

const DetailCommande = (props) => {

    const { id } = useParams();

    const [commande, setCommande] = useState({
        date: "",
        total: "",
        statut: "",
        cpF: "",
        villeF: "",
        livraisons: "",
        ligneDeCommandes: "",
        user: "",
        adresseF: "",
        fournisseur: "",

    });

    useEffect(() => {
        console.log("change id")
        fetchSync('https://127.0.0.1:8000/api/commandes/' + id, 'get').then((data) => setCommande(data));

    },
        [id]);

    console.log(id);

    return (
        <div>

            <div className="container">
                <div className="row">
                    <h2 className="col-sm-12 text-center mt-5"><strong>Details Commandes: </strong> </h2>
                    <article className="col-6  mt-5">
                        <h4 className="card-title">Identification de la commande:</h4>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Id : </strong>{commande.id}</p>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Date : </strong>{commande.date}</p>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Montant total :</strong>{commande.total}</p>
                    </article>
                    <article className="col-6  mt-5">
                        <h4 className="card-title">Identification client:</h4>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Nom:</strong> {commande.user.id}</p>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Nom:</strong> {commande.user.email}</p>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Nom:</strong> {commande.user.roles}</p>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Nom:</strong> {commande.user.pseudo}</p>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Nom:</strong> {commande.user.nom}</p>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Nom:</strong> {commande.user.prenom}</p>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Nom:</strong> {commande.user.adresse}</p>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Nom:</strong> {commande.user.cp}</p>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Nom:</strong> {commande.user.ville}</p>

                    </article>
                    <article className="col-6  mt-5">
                        <h4 className="card-title">Adresse de facturation</h4>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Adresse :</strong>{commande.adresseF}</p>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Code postal: </strong>{commande.cpF}</p>
                        <p className="text-dark text-left ml-5  mt-5"><strong>Ville :</strong>{commande.villeF}</p>
                    </article>
                    <p className="text-dark text-left ml-5  mt-5"><strong>Ligne de commande : </strong>{commande.ligneDeCommandes}</p>

                    {/* si le tableau livraisons contient une livraison (commande.livraisons.length > 0) 
                        alors on affiche commande.livraisons[0].adresseL
                        sinon on affiche ''
                    */}
                    <p className="text-dark text-left ml-5  mt-5"><strong>Adresse :</strong>{commande.livraisons.length > 0 ? commande.livraisons[0].adresseL : ''}</p>
                    <p className="text-dark text-left ml-5  mt-5"><strong>Montant total :</strong>{commande.total}</p>



                    <p className="text-dark text-left ml-5  mt-5"><strong>Nom:</strong> {commande.user.nom}</p>




                </div></div >


        </div>
    );
};

export { DetailCommande };