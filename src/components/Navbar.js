import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    console.log(props.getPage)
    return (
        <header className={`p-3 text-bg-${props.mode}`}>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className={`d-flex align-items-center mb-2 mb-lg-0 text-${props.mode === 'dark' ? 'light' : 'dark'} text-decoration-none`}>
                        <img src={props.logo} alt="Logo" width="60" height="40" className="mx-2" />
                        <b className='mx-2'>{props.title}</b>
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className={`nav-link px-2 text-${props.getPage === 'Home' ? 'secondary' : 'dark'}`}>Home</Link></li>
                        <li><Link to="./about" className={`nav-link px-2 text-${props.getPage === 'About' ? 'secondary' : 'dark'}`}>About</Link></li>
                        {/* <li><Link to="features" className={`nav-link px-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Features</Link></li>
                        <li><Link to="./contact" className={`nav-link px-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Contact</Link></li>
                        <li><Link to="./passbook" className={`nav-link px-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Bank</Link></li> */}
                    </ul>

                    <div className="text-end">
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="toggleButton" />
                            <label className="form-check-label" htmlFor="toggleButton">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
};

// Navbar.defaultProps = {
//     title: 'PayPlus',
//     logo: 'logo'
// }