import React from 'react';

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg sticky-top"
            style={{
                backgroundColor: '#2f2f2f',
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                zIndex: 1030
            }}
        >
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold fs-3" href="#home">
                    Shaik Saniya Aara
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span
                        className="navbar-toggler-icon"
                        style={{ width: '1.5em', height: '1.5em' }}
                    ></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-4">
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#skills">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#projects">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#certifications">
                                Certifications
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
