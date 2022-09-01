import React from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

const Entete = () => {
	return (
		<div >




			<header id="Entete">
				<div className="logo" id="logo">
					<img src="https://localhost:8000/imagesVG/Component/logo.png" alt="logo" style={{ width: "150px", height: "150px" }} className="img.fluid" id="Logo" />
				</div>

				<h1 className="mb-0">VILLAGE GREEN</h1>



			</header>

		</div>

	);
};

export { Entete };