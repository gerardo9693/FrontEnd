import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Login from '../views/Login';
import payload from '../utils/payload';

function Navbar() {
const [show,setShow]=useState(false);

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
				<div className="container">
					<a className="navbar-brand" href="index.html"><span className="flaticon-pizza-1 mr-1"></span>Uber Eats<br /><small>local food</small></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="oi oi-menu"></span> Menu
		      </button>
					<div className="collapse navbar-collapse" id="ftco-nav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active"><Link to="/" className="nav-link">Inicio</Link></li>

							<li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>

							<li className="nav-item"><Link to="/comida" className="nav-link">Comidas</Link></li>

							{
            payload().isAuthenticated?(
              <>
              <li className="nav-item">
                <Link className="nav-link" to="/">Bienvenido {payload().user.cNombre}</Link>
              </li>
			  <li className="nav-item">
                <Link className="nav-link" to="/logout">Salir</Link>
              </li>
              </>
            ):(
              <>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Registrase</Link>
              </li>
              </>
            )
          }
							<li className="nav-item"><Link to="/about" className="nav-link">Acerca de</Link></li>
							<li className="nav-item"><button className="nav-link"
								onClick={e => {
									setShow(!show);
								}}			  
								
							>Login</button></li>
						</ul>
					</div>
				</div>
			</nav>
			
			<Login isOpen={show} setShow={setShow}/>

		</>
	)
}

export default Navbar;
