import React, { useState } from "react";

function Header() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <div className="header_section copyright_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="logo"><a href="index.html" className="logo-fana text-light">Fana <span>RF</span></a></div>
                        <button
                            className="navbar-toggler navbar-toggler"
                            type="button"
                            onClick={toggleNavbar}
                            aria-controls="navbarSupportedContent"
                            aria-expanded={!isCollapsed}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://github.com"><i className="bi bi-git"></i> Github</a>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;