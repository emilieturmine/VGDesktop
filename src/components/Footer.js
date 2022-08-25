import React from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
const Footer = () => {
    return (
        <div className="Footer" id="Footer">


            <footer id="footer" className=" text-center text-dark col-12 mt-5">


                <div className="row">

                    <div className="col-6 col-sm-4 ">
                        <h5 className="text-uppercase mt-5">Besoin d'aide?</h5>


                    </div>

                    <div className="col-6 col-sm-4 ">
                        <h5 className="text-uppercase mt-5 ">Services et Produits</h5>


                    </div>

                    <div className="col-6 col-sm-4  ">
                        <h5 className="text-uppercase mt-5">A propos</h5>


                    </div>


                </div>




            </footer>
        </div>
    );
};

export { Footer };