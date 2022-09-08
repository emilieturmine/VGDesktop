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
        livraisons: [],
        ligneDeCommandes: [],
        user: "",
        adresseF: "",
        fournisseur: "",

    });

    useEffect(() => {
        console.log("change id")
        fetchSync('/api/commandes/' + id, 'get').then((data) => setCommande(data));

    },
        [id]);

    console.log(id);

    return (
        <div>

            <div className="container">
                <div className="row">
                    <h1 className="col-sm-12 text-center mt-5 text-info"><strong>Details Commandes: </strong> </h1>
                    <article className="row mt-5">

                        <h4 className="col-12 card-title text-center text-info mb-5">Identification de la commande:</h4>
                        <p className="col-3 text-dark "><strong className='text-info'>Id : </strong>{commande.id}</p>
                        <p className="col-3 "><strong className='text-info'>Date : </strong>{commande.date}</p>
                        <p className="col-3 "><strong className='text-info'>Montant total :</strong>{commande.total}</p>
                        <p className="col-3 "><strong className='text-info'>Statut :</strong>{commande.statut}</p>
                    </article>


                    <article className="col-12  mt-5">
                        <h4 className="card-title text-center text-info">Ligne de commande:</h4>
                        <table className="table table-bordered mt-5" >
                            <thead className="table bg-info mt-5 text-white text-center">
                                <tr>
                                    <th>Id</th>
                                    <th>Libelle</th>
                                    <th>Reference</th>
                                    <th>Photo</th>
                                    <th>PrixUnitaire</th>
                                    <th>Quantité</th>
                                    <th>Total ligne</th>
                                </tr>
                            </thead>
                            <tbody>
                                {commande.ligneDeCommandes.map((ligne) =>
                                    <tr key={ligne.produit.id} className="text-center">
                                        <th className="text-dark text-left ml-5  mt-5">{ligne.produit.id}</th>
                                        <th className="text-dark text-left ml-5  mt-5">{ligne.produit.libelle}</th>
                                        <th className="text-dark text-left ml-5  mt-5">{ligne.produit.reference}</th>
                                        <th className="text-dark text-left ml-5  mt-5"> <img src={"https://localhost:8000/imagesVG/propho/" + ligne.produit.photo} alt={ligne.produit.libelle} style={{ width: "150px", height: "150px" }} /></th>
                                        <th className="text-dark text-left ml-5  mt-5">{ligne.prixVente}</th>
                                        <th className="text-dark text-left ml-5  mt-5">{ligne.quantite}</th>
                                        <th className="text-dark text-left ml-5  mt-5">{ligne.totalLigne}</th>
                                    </tr>)}
                            </tbody>
                        </table>
                    </article>

                    <article className="col-12  mt-5">

                        <h4 className="card-title text-center text-info">Identification client:</h4>
                        <table className="table table-bordered mt-5" >
                            <thead className="table bg-info mt-5 text-white text-center">
                                <tr>
                                    <th>Id</th>
                                    <th>mail</th>
                                    <th>Nom</th>
                                    <th>Adresse</th>
                                    <th>Code Postal</th>
                                    <th>Ville</th>
                                </tr>
                            </thead>
                            <tbody>
                                <th className="text-dark text-left ml-5  mt-5"> {commande.user.id}</th>
                                <th className="text-dark text-left ml-5  mt-5">{commande.user.email}</th>
                                <th className="text-dark text-left ml-5  mt-5"> {commande.user.nom + ' ' + commande.user.prenom}</th>
                                <th className="text-dark text-left ml-5  mt-5"> {commande.user.adresse + ' ' + commande.user.cp + ' ' + commande.user.ville}</th>
                                <th className="text-dark text-left ml-5  mt-5">{commande.user.cp}</th>
                                <th className="text-dark text-left ml-5  mt-5">{commande.user.ville}</th>
                            </tbody></table>
                    </article>

                    <article className="col-6  mt-5">
                        <table className="table table-bordered mt-5" >
                            <thead className="table bg-info mt-5 text-white text-center">
                                <tr>
                                    Adresse de facturation</tr></thead><tbody><tr>
                                        <th className="text-dark text-left ml-5  mt-5">{commande.adresseF}</th>
                                        <th className="text-dark text-left ml-5  mt-5">{commande.cpF}</th>
                                        <th className="text-dark text-left ml-5  mt-5">{commande.villeF}</th>
                                    </tr> </tbody></table></article>


                    {/* si le tableau livraisons contient une livraison (commande.livraisons.length > 0) 
                        alors on affiche commande.livraisons[0].adresseL
                        sinon on affiche ''
                    */}
                    <article className="col-6  mt-5">
                        <table className="table table-bordered mt-5" >
                            <thead className="table bg-info mt-5 text-white text-center">
                                <tr>
                                    Adresse de Livraison
                                </tr></thead><tbody><tr>
                                    <th className="text-dark text-left ml-5  mt-5">{commande.livraisons.length > 0 ? commande.livraisons[0].adresseL : ''}</th>
                                    <th className="text-dark text-left ml-5  mt-5">{commande.livraisons.length > 0 ? commande.livraisons[0].cpL : ''}</th>
                                    <th className="text-dark text-left ml-5  mt-5">{commande.livraisons.length > 0 ? commande.livraisons[0].villeL : ''}</th>
                                </tr></tbody></table>
                    </article>

                    <button className=" text-white mt-5 mr-5">
                        <Link
                            to={"/gestionCommande"}

                            className="col-6 col-sm-3 justify-content-space-between text-center mt-5 "

                        >
                            Retour a la liste
                        </Link>
                    </button>


                </div></div >


        </div >
    );
};

export { DetailCommande };