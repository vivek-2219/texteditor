import React from 'react';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
                <div className="container-fluid">
                    <div className="navbar-brand">{props.title}</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link text-${props.theme==='light'?'black':'light'}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${props.theme==='light'?'black':'light'}`} href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${props.theme==='light'?'black':'light'}`} href="contact">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className={`btn btn-outline-secondary text-${props.textColor}`} type="submit">Search</button>
                        </form>
                        <div className="dropdown">
                            <button className={`btn btn-${props.mode} dropdown-toggle mx-4`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Theme
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><div className="dropdown-item" onClick={props.lightMode}>Light</div></li>
                                <li><div className="dropdown-item" onClick={props.darkMode}>Dark</div></li>
                                <li><div className="dropdown-item" onClick={props.cobaltMode}>Cobalt</div></li>
                                <li><div className="dropdown-item" onClick={props.bloodMode}>Blood</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
