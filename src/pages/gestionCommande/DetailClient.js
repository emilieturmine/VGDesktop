import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSync } from '../../jsx/fetchSync';

const DetailClient = (props) => {

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

                        <h4 className="card-title text-center text-info">Identification client:</h4>
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
                                <th className="text-dark text-left ml-5  mt-5"> {commande.user.id}</th>
                                <th className="text-dark text-left ml-5  mt-5"> {commande.user.nom}</th>
                                <th className="text-dark text-left ml-5  mt-5"> {commande.user.prenom}</th>
                                <th className="text-dark text-left ml-5  mt-5"> {commande.user.pseudo}</th>
                                <th className="text-dark text-left ml-5  mt-5">{commande.user.email}</th>
                                <th className="text-dark text-left ml-5  mt-5"> {commande.user.adresse + ' ' + commande.user.cp + ' ' + commande.user.ville}</th>
                                <th className="text-dark text-left ml-5  mt-5">{commande.user.roles}</th>

                                <th className="text-dark text-left ml-5  mt-5">{commande.user.coefficient}</th>

                            </tbody></table>
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

export { DetailClient };