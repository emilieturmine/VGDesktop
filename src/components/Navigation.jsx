import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light" id="Navigation">
            <li className="nav-link active" aria-current="page">
                <Link style={{ color: 'Dark' }} to="/">
                    Acceuil
                </Link>
            </li>
            <li className="nav-link">
                <Link style={{ color: 'white' }} to="/gestionCommande">
                    Commandes
                </Link>
            </li>
            <li className="nav-link">
                <Link style={{ color: 'Dark' }} to="/gestionProduits">
                    Catalogue
                </Link>
            </li>
            <li className="nav-link disabled">
                <Link style={{ color: 'white' }} to="/GestionClients">
                    Clients
                </Link>
            </li>
            <li className="nav-link disabled">
                <Link style={{ color: 'white' }} to="/Sav">
                    SAV
                </Link>
            </li>
            <li className="nav-link disabled">
                <Link style={{ color: 'white' }} to="/TableauBord">
                    Tableau de bord
                </Link>
            </li>
            <li className="nav-link disabled">Date</li>
            <li className="nav-link disabled">heure</li>


        </nav>







    )
}

export { Navigation }
