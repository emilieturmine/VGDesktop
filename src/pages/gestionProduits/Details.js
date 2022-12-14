import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSync } from '../../jsx/fetchSync';

const Details = (props) => {

    const { id } = useParams();

    const [prod, setProd] = useState({
        libelle: "",
        photo: "",
        photo2: "",
        photo3: "",
        reference: "",
        description: "",
        prixUnitaire: "",
        stock: "",
        tva: "",
        fournisseur: "",

    });


    useEffect(() => {
        console.log("change id")
        fetchSync('/api/produits/' + id, 'get').then((data) => setProd(data));

    },
        [id]);

    console.log(id);
    return (
        <div>

            <div className="container">
                <div className="row">

                    <h2 className="col-sm-12 text-center mt-5"><strong>Fiche produit: </strong> </h2>
                    <article className="col-12 text-center mt-5">

                        <h3 className="card-title">{prod.libelle}</h3>
                        <div className="card-body text-dark mt-5">
                            <img src={"https://localhost:8000/imagesVG/propho/" + prod.photo} alt={prod.libelle} style={{ width: " 300px", height: "300px" }} /></div>

                        <img src={"https://localhost:8000/imagesVG/propho/" + prod.photo2} alt={prod.libelle} style={{ width: "100px", height: "100px" }} />
                        <img src={"https://localhost:8000/imagesVG/propho/" + prod.photo3} alt={prod.libelle} style={{ width: "100px", height: "100px" }} />
                    </article>
                    <div className="col-sm-12 text-center">
                        <article className="row text-center ml-5 mt-5">
                            <div className="col-sm-5">
                                <h4 className="strong text-info text-left ml-5 mt-5">Fiche technique: </h4>
                                <p className="text-dark text-left ml-5  mt-5"><strong>Reference: </strong>{prod.reference}</p>
                                <p className="text-dark text-left ml-5 mt-5"><strong>libelle:</strong>{prod.libelle}</p>


                            </div>
                            <div className="col-sm-3">
                                <h4 className="strong text-info text-center mt-5">Description</h4>
                                {prod.description}

                            </div>

                            <div className="col-sm-3 text center mb-3">
                                <h3 className="text-danger text-center mt-5 mb-5"><strong>Prix(HT):</strong>{prod.prixUnitaire} ???</h3>


                            </div>

                        </article>

                    </div>
                </div></div >


        </div>
    );
};

export { Details };