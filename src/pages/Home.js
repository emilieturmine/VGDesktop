import React from 'react';
import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';
import { Entete } from '../components/Entete';

import { useState, useEffect } from 'react';

import React from 'react';

const Home = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <article className="col-sm-12">
                        <h2 className="text-center mt-5"><strong>Bienvenue!!</strong></h2>
                    </article>
                </div>
            </div>
        </div>
    );
};

export { Home };