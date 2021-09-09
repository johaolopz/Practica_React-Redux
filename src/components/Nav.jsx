import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import './nav.css'

function Nav () {
return (
    <div>
        <nav class="navbar navbar-light bg-light">
            <div className='navContainer'>
                <div className='aContainer'>
                <Link to='/'>
                    <span id='spanNav'>
                        <img id='imgNav' src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                        Johao Lopez
                    </span>
                </Link>
                </div>
                <div className='formContainer'>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to='/contador'>
                            <button class="btn btn-outline-success" type="submit">Contador</button>
                        </Link>
                        <Link to='/buscador'>
                            <button class="btn btn-outline-success" type="submit">Buscador</button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    </div>
);
}

export default Nav;