import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/index.css';import {Home} from '../pages/Home';
import { fetchSync, fetchActionSync } from './fetchSync';
import { useState, useEffect } from 'react';
import React from 'react';
import { ListeProduits } from '../pages/gestionProduits/ListeProduits';
import { Formulaire1 } from '../pages/gestionProduits/Formulaire1';
import { Details } from '../pages/gestionProduits/Details';
import { Formulaire2 } from '../pages/gestionProduits/Formulaire2';
import { Entete } from '../components/Entete';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import Delete from '../pages/gestionProduits/Delete';
import { ListeCommande } from '../pages/gestionCommande/ListeCommande';
import { DetailCommande } from '../pages/gestionCommande/DetailCommande';
import {DetailLivraison}from '../pages/gestionCommande/DetailLivraison';
import {DetailClient}from '../pages/gestionCommande/DetailClient';
import {ListeClients} from '../pages/gestionClients/ListeClients';
//Creation d'une fonction composant

    const App = (props) => {

        // Déclaration des variables d'état (Renvoie une valeur d’état local et une fonction pour la mettre à jour.)

            //produit
                const [data1, setData1] = useState([]);
            //ss categorie
                const [data2, setData2] = useState([]);
            //fournisseur
                const [data3, setData3] = useState([]);
            //details produits
                const [data4, setData4] = useState([]);
            //commandes
                const [data5, setData5] = useState([]);
            //clients
                const [data6, setData6] = useState([]);
            //Livraison
                const [data7, setData7] = useState([]);
            
    // Declaration de variables plus complexes

        //Pour le formulaire 1 (ajout produit)
        
        const dataFP = {
            produits: data1,
            ssCategories : data2,
            fournisseurs: data3,
        }

        // pour la partie gestion de commande

        const dataGC = {
            produits: data1,
            commandes : data5,
            clients: data6,
        }

// Declaration des hooks d'effets

     //Pour la partie Gestion Commande

        //pour la page ListeCommande    
            useEffect(() => {
                fetchSync('/api/commandes', 'get').then( (data) => setData5(data) );
                fetchSync('/api/users', 'get').then( (data) => setData6(data) );
            }, [])

            //pour les pages Details 
                useEffect(() => {
                    fetchSync('/api/commandes', 'get').then( (data) => setData5(data) );
                }, [])
        
    //Pour la partie Gestion Clients

                //pour la page ListeClients    

                useEffect(() => {
                    fetchSync('/api/users', 'get').then( (data) => setData6(data) );
                   
                }, [])







    //Pour la partie Gestion Produit

            //pour la page ListeProduits    
                useEffect(() => {
                    fetchSync('/api/produits', 'get').then( (data) => setData1(data) );
                }, [])
    
                //Pour le formulaire 1 (ajout produit) et 2 (modif produit)
                    useEffect(() => {
                        fetchSync('/api/produits', 'get').then( (data) => setData1(data) );
                        fetchSync('/api/ss_categories', 'get').then( (data) => setData2(data) );
                        fetchSync('/api/fournisseurs', 'get').then( (data) => setData3(data) );
                    }, [])
    
                //Pour la page detail
                    useEffect(() => {
                        fetchSync('/api/produits', 'get').then( (data) => setData1(data) );
                
                    }, [])

    
// Declaration des evenements 
    //Evt OnChange pour les formulaire (un événement onChange est déclenché lorsque des valeurs sont saisies dans l’entrée. Cela déclenche une fonction handleChange() , qui est utilisée pour définir un nouvel état pour l’entrée.)
      
        //Pour ajouter un nouveau produit
            const handleChangeNewProduit = (produit) => {
                fetchSync('/api/produits', 'post', produit).then( (retour) => {
                    fetchSync('/api/produits', 'get').then( (data) =>  { setData1(data);
                    });
                });
            }
        
        // Pour enregistrer les modifications du formulaire et renvoyés une liste a jour
            const handleChangeUpdateProduit = (produit) => {
                fetchSync('/api/produits/' + produit.id, 'put', produit).then( (retour) => {
                    fetchSync('/api/produits', 'get').then( (data) =>  {setData1(data);
                    });
                });
            }
        
        // Pour supprimer un produit
        const handleClickDeleteProduit = (produit) => {
            fetchActionSync('/api/produits/' + produit.id, 'delete').then( (retour) => {
                fetchSync('/api/produits', 'get').then( (data) =>  {setData1(data);
                });
            });
        }
    
    return (
        <BrowserRouter>
       
            <Entete />
            <Navigation />

            <Routes>

            <Route path="/" element={<Home data={data1}/>} />
                <Route path="gestionCommande/" element={<ListeCommande data={dataGC} />} />
                    <Route path="/DetailCommande/:id" element={<DetailCommande data={data5}  />} />
                    <Route path="/DetailLivraison/:id" element={<DetailLivraison data={data5}  />} />
                    <Route path="/DetailClient/:id" element={<DetailClient data={data5}  />} />
                
                <Route path="gestionProduits/" element={<ListeProduits data={data1} />} />
                    <Route path="/add" element={<Formulaire1 data={dataFP} onChange={handleChangeNewProduit} />} />
                    <Route path="/update/:id" element={<Formulaire2 data={dataFP} onChange={handleChangeUpdateProduit} />} />
                    <Route path="/Details/:id" element={<Details data={data4}  />} />
                    <Route path="/delete/:id" element={<Delete data={data1} onClick={handleClickDeleteProduit} />} />
                
                <Route path="gestionClients/" element={<ListeClients data={data6} />} />
                    
                    
                                {/* path="*" fonctionne si jamais l'url ne correspond à rien de  declaré au dessus */}
            {/* <Route path="*" element={<Home />}/> */}

            </Routes>

           

        </BrowserRouter>
    );
};

export {App};