import React from 'react';
import {Link} from "gatsby";
import './style.scss';
import './columns.scss';

const Navbar = () => (
<div className="hero-head">
	<div className="columns is-mobile is-marginless heading has-text-weight-bold">
		<div className="column left">
		<Link to="/" className="navbar-item has-text-white has-background-success">Inicio</Link>
		</div>

		<div className="column right">
		<Link to="#contacto" className="navbar-item has-text-white has-background-success">Contacto</Link>
		</div>
	</div>
</div>
);

export default Navbar;
