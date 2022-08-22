import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (

        <nav class="nav flex-column">
            <li className="nav-link active" aria-current="page">
                {/* <Link style={{ color: 'white' }} to="/"> */}
                Acceuil
                {/* </Link> */}
            </li>
            <li className="nav-link">
                {/* <Link style={{ color: 'white' }} to="/GestionCommandes"> */}
                Commandes
                {/* </Link> */}
            </li>
            <li className="nav-link">
                {/* <Link style={{ color: 'white' }} to="/GestionCatalogue"> */}
                Catalogue
                {/* </Link> */}
            </li>
            <li className="nav-link disabled">
                {/* <Link style={{ color: 'white' }} to="/GestionClients"> */}
                Clients
                {/* </Link> */}
            </li>
            <li className="nav-link disabled">
                {/* <Link style={{ color: 'white' }} to="/Sav"> */}
                SAV
                {/* </Link> */}
            </li>
            <li className="nav-link disabled">
                {/* <Link style={{ color: 'white' }} to="/TableauBord"> */}
                Tableau de bord
                {/* </Link> */}
            </li>
            <li className="Date">Date</li>
            <li className="Heure">heure</li>


        </nav>







    )
}

export { Navigation }
