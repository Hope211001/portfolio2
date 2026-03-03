import React from "react";

function Projet() {
    // 1. LE TABLEAU DE DONNÉES (Dynamique)
    const projetsData = [
        {
            id: 1,
            title: "Gestion de demande de bourses",
            description: "Validation de demande, envoi d'emails de confirmation avec Laravel.",
            image: "images/projet/front-office-bourse.png",
            tech: "Laravel",
            link: "#"
        },
        {
            id: 2,
            title: "Gestion de Stock",
            description: "État de stock et approvisionnement en temps réel avec React et Express.js.",
            image: "images/projet/g-stock.png",
            tech: "React | Express",
            link: "#"
        },
        {
            id: 3,
            title: "Site Web Swiftcard",
            description: "ERP complet : Stock, Personnel, Fiches de paie et Comptabilité avec Symfony.",
            image: "images/projet/swiftcard.png",
            tech: "Symfony",
            link: "#"
        },
        {
            id: 4,
            title: "Site Web Databoost",
            description: "Solution de gestion d'entreprise, paie et ressources humaines avec Symfony.",
            image: "images/projet/databoost.png",
            tech: "Symfony",
            link: "https://databoost.mg/"
        }
    ];

    // 2. LES STYLES
    const styles = {
        section: {
            backgroundColor: '#0a0a0a',
            padding: '80px 0',
            color: 'white'
        },
        titleGradient: {
            background: 'linear-gradient(90deg, #b56ab8, #C586C0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800'
        },
        card: {
            backgroundColor: '#161616',
            border: '1px solid rgba(181, 106, 184, 0.2)',
            borderRadius: '15px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            height: '100%'
        },
        projectTitle: {
            color: '#C586C0',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '10px'
        },
        button: {
            backgroundColor: '#C586C0',
            border: 'none',
            borderRadius: '25px',
            padding: '8px 20px',
            color: 'white',
            fontWeight: '600',
            fontSize: '0.9rem',
            textDecoration: 'none'
        }
    };

    return (
        <section style={styles.section} className="portfolio_section">
            <div className="container">
                {/* TITRE FIXE */}
                <div className="row mb-5">
                    <div className="col-sm-12 text-center">
                        <h1 className="display-4 fw-bold text-white">
                            Mes <span style={styles.titleGradient}>Projets</span>
                        </h1>
                        <div style={{ width: '60px', height: '4px', background: '#C586C0', margin: '10px auto', borderRadius: '2px' }}></div>
                    </div>
                </div>

                {/* BOUCLE DYNAMIQUE (.map) */}
                <div className="row">
                    {projetsData.map((projet) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={projet.id}>
                            <div className="custom-card" style={styles.card}>
                                <div className="position-relative overflow-hidden">
                                    <img 
                                        src={projet.image} 
                                        alt={projet.title} 
                                        className="img-fluid w-100" 
                                        style={{ height: '220px', objectFit: 'cover' }} 
                                    />
                                    <div className="overlay-hover">
                                        <a href={projet.link} style={styles.button}>Voir détails</a>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 style={styles.projectTitle}>{projet.title}</h3>
                                    <p className="text-light opacity-75 small">
                                        {projet.description}
                                    </p>
                                    <span className="badge" style={{ backgroundColor: 'rgba(181, 106, 184, 0.2)', color: '#C586C0' }}>
                                        {projet.tech}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
                    .custom-card:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 10px 30px rgba(181, 106, 184, 0.2);
                        border-color: #C586C0 !important;
                    }
                    .overlay-hover {
                        position: absolute;
                        top: 0; left: 0; width: 100%; height: 100%;
                        background: rgba(18, 18, 18, 0.8);
                        display: flex; align-items: center; justify-content: center;
                        opacity: 0; transition: 0.3s ease;
                    }
                    .custom-card:hover .overlay-hover {
                        opacity: 1;
                    }
                    .custom-card img { transition: 0.5s ease; }
                    .custom-card:hover img { transform: scale(1.1); }
                `}
            </style>
        </section>
    );
}

export default Projet;