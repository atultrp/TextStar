import React from 'react'
import PropTypes from 'prop-types'
// import { useState } from 'react'
import { Link } from 'react-router-dom'



export default function Navbar(props) {

    // const toggleBlue = ()=>{
    //     if(props.toggleMode === 'dark'){
    //         document.body.style.backgroundColor = "#323a40";
    //     }
    // }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutTitle}</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form> */}

                        {/* Code updating below this line */}

                        {/* <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}> */}
                            {/* <input class="form-check-input" type="checkbox" onClick={props.toggleMode} id="checkboxNoLabel" value="1" aria-label="..."/> */}
                            {/* <button type="button" onClick={props.toggleMode} onChange={toggleBlue} value="1" class="btn btn-primary"></button>
                        </div> */}

                        
                        {/* Code updating above this line */}

                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutTitle: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutTitle: 'About text here'
}