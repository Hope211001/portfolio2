import React, { useState } from "react";

function Header() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const styles = {
        header: {
            backgroundColor: '#0a0a0a', // Même fond noir que tes autres composants
            borderBottom: '1px solid rgba(181, 106, 184, 0.2)', // Fine ligne violette
            padding: '10px 0',
            zIndex: 1000
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: '800',
            color: '#ffffff',
            textDecoration: 'none',
            letterSpacing: '1px'
        },
        logoSpan: {
            color: '#C586C0', // Ta couleur rose/violette
        },
        navLink: {
            color: '#ffffff',
            fontWeight: '600',
            fontSize: '1rem',
            padding: '10px 20px',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }
    };

    return (
        <div className="sticky-top" style={styles.header}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    {/* LOGO */}
                    <a href="/" style={styles.logo}>
                        FANA <span style={styles.logoSpan}>RF</span>
                    </a>
                    
                    {/* BOUTON MOBILE (Hamburger) */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                        aria-controls="navbarSupportedContent"
                        aria-expanded={!isCollapsed}
                        style={{ borderColor: 'rgba(197, 134, 192, 0.5)' }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* LIENS */}
                    <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto"> 
                            <li className="nav-item">
                                <a 
                                    className="nav-link custom-nav-link" 
                                    href="https://github.com/Hope211001" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={styles.navLink}
                                >
                                    <i className="bi bi-github fs-5"></i> Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* CSS pour les effets de survol */}
            <style>
                {`
                    .custom-nav-link:hover {
                        color: #C586C0 !important;
                        transform: translateY(-2px);
                    }
                    /* Style pour le menu mobile quand il est ouvert */
                    @media (max-width: 991.98px) {
                        .navbar-collapse {
                            background: #161616;
                            margin-top: 15px;
                            padding: 20px;
                            border-radius: 10px;
                            border: 1px solid rgba(197, 134, 192, 0.2);
                        }
                    }
                `}
            </style>
        </div>
    );
}

export default Header;