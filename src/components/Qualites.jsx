import React from "react";

function Qualites() {
    const qualities = [
        { title: "Sérieuse", icon: "bi-shield-check", desc: "Engagée dans la réussite de chaque projet." },
        { title: "Créative", icon: "bi-lightbulb", desc: "Toujours à la recherche de solutions innovantes." },
        { title: "Rigoureuse", icon: "bi-bullseye", desc: "Une attention particulière portée aux détails et à la qualité du code." },
        { title: "Dynamique", icon: "bi-lightning-charge", desc: "Réactive et motivée pour relever de nouveaux défis." }
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
            borderRadius: '15px',
            padding: '30px',
            border: '1px solid rgba(181, 106, 184, 0.1)',
            transition: 'all 0.3s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        },
        iconWrapper: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(197, 134, 192, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            color: '#C586C0',
            fontSize: '1.8rem',
            border: '1px solid rgba(197, 134, 192, 0.3)'
        }
    };

    return (
        <section style={styles.section} className="qualites_section">
            <div className="container">
                {/* Titre */}
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h1 className="display-4 fw-bold">
                            Mes <span style={styles.titleGradient}>Qualités</span>
                        </h1>
                        <div style={{ width: '50px', height: '4px', background: '#C586C0', margin: '15px auto', borderRadius: '2px' }}></div>
                    </div>
                </div>

                <div className="row g-4">
                    {qualities.map((q, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <div className="quality-card" style={styles.card}>
                                <div style={styles.iconWrapper}>
                                    <i className={`bi ${q.icon}`}></i>
                                </div>
                                <h4 style={{ color: '#C586C0', fontWeight: 'bold', marginBottom: '10px' }}>
                                    {q.title}
                                </h4>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7, margin: 0 }}>
                                    {q.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animation CSS */}
            <style>
                {`
                    .quality-card:hover {
                        transform: translateY(-10px);
                        border-color: #C586C0 !important;
                        background-color: #1a1a1a !important;
                        box-shadow: 0 10px 30px rgba(181, 106, 184, 0.1);
                    }
                    .quality-card:hover i {
                        transform: scale(1.2);
                        transition: transform 0.3s ease;
                    }
                `}
            </style>
        </section>
    );
}

export default Qualites;