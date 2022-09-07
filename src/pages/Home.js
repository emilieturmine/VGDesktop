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

                        <h1 className="text-center text-info mt-5 "><q><strong> Tout est possible à qui rêve, ose, travaille et n'abandonne jamais. </strong></q><p class="mt-3"> Xavier Dolan</p></h1>
                    </article>
                </div>
            </div>
        </div>
    );
};

export { Home };