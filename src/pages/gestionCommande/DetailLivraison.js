import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSync } from '../../jsx/fetchSync';

const DetailLivraison = (props) => {

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
                    <article className="col-6 text-center mt-5 "><h3 className="text-danger">Date de livraison :</h3> <p>{commande.livraisons.length > 0 ? commande.livraisons[0].date : ''} </p> </article>

                    <article className="col-6  mt-5">
                        <table className="table table-bordered " >
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

export { DetailLivraison };