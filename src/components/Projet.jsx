import React from "react";

function Projet() {
    const projetsData = [
        {
            id: 1,
            title: "ImmoScraper Pro",
            description: "Système d'extraction automatique d'annonces immobilières multi-plateformes avec tableau de bord.",
            image: "images/projet/immoscout.PNG",
            tech: "React, n8n, Express.js",
            link: "https://immosocout.netlify.app/"
        },
        {
            id: 2,
            title: "SlayRadio Web",
            description: "Développement d'une plateforme de streaming radio en ligne avec gestion de flux en temps réel.",
            image: "images/projet/slay-radio.PNG",
            tech: "Symfony ,  Tailwind CSS ",
            link: "https://slayradio.ch/"
        },
        {
            id: 3,
            title: "Scraping Social Media",
            description: "Automatisation de collecte de données Facebook et Instagram synchronisée avec Supabase via n8n.",
            image: "images/projet/automatic-bnb.PNG",
            tech: "React, Supabase, n8n",
            link: "https://automaticbnb.netlify.app/login"
        },
        {
            id: 4,
            title: "Développement d’un site web avec chatbot intelligent",
            description: "Conception et développement d’un site web moderne intégrant un chatbot interactif pour assister les visiteurs, répondre aux questions fréquentes et améliorer l’expérience utilisateur.",
            image: "images/projet/databoost.png",
            tech: "Symfony, Tailwind CSS, jQuery, Chatbot IA",
            link: "https://databoost.mg/"
        }
    ];

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
            border: '1px solid rgba(181, 106, 184, 0.1)',
            borderRadius: '15px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        projectTitle: {
            color: '#C586C0',
            fontSize: '1.4rem',
            fontWeight: '700',
            marginBottom: '12px'
        },
        button: {
            backgroundColor: '#C586C0',
            border: 'none',
            borderRadius: '25px',
            padding: '12px 30px',
            color: 'white',
            fontWeight: '600',
            fontSize: '0.9rem',
            textDecoration: 'none',
            transition: '0.3s'
        }
    };

    return (
        <section style={styles.section} className="portfolio_section">
            <div className="container">
                {/* EN-TÊTE */}
                <div className="row mb-5">
                    <div className="col-sm-12 text-center">
                        <h1 className="display-4 fw-bold text-white">
                            Mes <span style={styles.titleGradient}>Projets</span>
                        </h1>
                        <div style={{ width: '60px', height: '4px', background: '#C586C0', margin: '15px auto', borderRadius: '2px' }}></div>
                    </div>
                </div>

                {/* GRILLE DE PROJETS (2 Colonnes sur Desktop) */}
                <div className="row g-4 justify-content-center">
                    {projetsData.map((projet) => (
                        /* ICI : On utilise col-lg-6 pour avoir 2 colonnes par ligne */
                        <div className="col-lg-6 col-md-12" key={projet.id}>
                            <div className="custom-card" style={styles.card}>
                                {/* IMAGE AVEC OVERLAY */}
                                <div className="position-relative overflow-hidden">
                                    <img
                                        src={projet.image}
                                        alt={projet.title}
                                        className="img-fluid w-100"
                                        style={{ height: '280px', objectFit: 'cover' }}
                                    />
                                    <div className="overlay-hover">
                                        <a href={projet.link} target="_blank" rel="noreferrer" style={styles.button}>
                                            Voir le projet
                                        </a>
                                    </div>
                                </div>

                                {/* CONTENU DE LA CARTE */}
                                <div className="p-4 d-flex flex-column flex-grow-1">
                                    <h3 style={styles.projectTitle}>{projet.title}</h3>
                                    <p className="text-secondary mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        {projet.description}
                                    </p>

                                    {/* TECH & LINK MOBILE */}
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <span className="badge px-3 py-2" style={{ backgroundColor: 'rgba(181, 106, 184, 0.1)', color: '#C586C0', borderRadius: '8px', fontSize: '0.8rem' }}>
                                            {projet.tech}
                                        </span>
                                    </div>
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
                        box-shadow: 0 20px 40px rgba(181, 106, 184, 0.15);
                        border-color: rgba(181, 106, 184, 0.5) !important;
                    }
                    .overlay-hover {
                        position: absolute;
                        top: 0; left: 0; width: 100%; height: 100%;
                        background: rgba(10, 10, 10, 0.8);
                        display: flex; align-items: center; justify-content: center;
                        opacity: 0; transition: all 0.4s ease;
                        backdrop-filter: blur(4px);
                    }
                    .custom-card:hover .overlay-hover {
                        opacity: 1;
                    }
                    .custom-card img { transition: 0.8s ease; }
                    .custom-card:hover img { transform: scale(1.08); }
                `}
            </style>
        </section>
    );
}

export default Projet;