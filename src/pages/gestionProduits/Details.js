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

    console.log(id);

    useEffect(() => {
        console.log("change id")
        fetchSync('https://127.0.0.1:8000/api/produits/' + id, 'get').then((data) => setProd(data));

    },
        [id]);

    return (
        <div>

            <div className="container">
                <div className="row">

                    <h2 className="col-sm-12 text-center mt-5"><strong>Fiche produit: </strong> </h2>
                    <article classname="col-12 text-center mt-5">

                        <h3 classname="card-title">{prod.libelle}</h3>
                        <div classname="card-body text-dark mt-5">
                            <img src={"https://localhost:8000/imagesVG/propho/" + prod.photo} alt={prod.libelle} style={{ width: " 300px", height: "300px" }} /></div>

                        <img src={"https://localhost:8000/imagesVG/propho/" + prod.photo2} alt={prod.libelle} style={{ width: "100px", height: "100px" }} />
                        <img src={"https://localhost:8000/imagesVG/propho/" + prod.photo3} alt={prod.libelle} style={{ width: "100px", height: "100px" }} />
                    </article>
                    <div classname="col-sm-12 text-center">
                        <article classname="row text-center ml-5 mt-5">
                            <div classname="col-sm-5">
                                <h4 classname="strong text-info text-left ml-5 mt-5">Fiche technique: </h4>
                                <p classname="text-dark text-left ml-5  mt-5"><strong>Reference: </strong>{prod.reference}</p>
                                <p classname="text-dark text-left ml-5 mt-5"><strong>libelle:</strong>{prod.libelle}</p>


                            </div>
                            <div classname="col-sm-3">
                                <h4 classname="strong text-info text-center mt-5">Description</h4>
                                {prod.description}

                            </div>

                            <div classname="col-sm-3 text center mb-3">
                                <h3 classname="text-danger text-center mt-5 mb-5"><strong>Prix(HT):</strong>{prod.prixUnitaire} €</h3>


                            </div>
                        </article>

                    </div>
                </div></div >


        </div>
    );
};

export { Details };