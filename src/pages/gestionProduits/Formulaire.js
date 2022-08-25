import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Formulaire = (props) => {

    const [produit, setProduit] = useState(
        {
            nom: "",
            prix: 0,
            description: ""
        }
    );
    const navigate = useNavigate();


    const handleChange = (evt) => {
        let p = { ...produit };
        p[evt.target.name] = evt.target.value;
        setProduit(p);
    }

    const handleSubmit = (evt) => {
        props.onChange(produit);

        navigate("/gestionProduits");
    }


    return (
        <>
            <div>
                Formulaire
            </div>
            <fieldset>
                <legend>Nouveau produit</legend>
                <input type="text" name="nom" value={produit.libelle} onChange={handleChange} /><br />
                <input type="text" name="prix" value={produit.prixUnitaire} onChange={handleChange} /><br />
                <input type="text" name="description" value={produit.description} onChange={handleChange} /><br />
                <button className='btn btn-success' onClick={handleSubmit}>Valider</button>
                <Link className='btn btn-warning' to="/">Retour</Link>
            </fieldset>
        </>
    );
}

export { Formulaire };