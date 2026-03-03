import React from "react";

function Competence() {
    const styles = {
        section: {
            backgroundColor: '#0a0a0a', // Fond noir
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
            borderRadius: '20px',
            padding: '40px 30px',
            border: '1px solid rgba(181, 106, 184, 0.1)',
            transition: 'all 0.4s ease',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
        },
        categoryTitle: {
            color: '#C586C0',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '25px',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        },
        list: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        listItem: {
            fontSize: '1.1rem',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            color: '#e0e0e0'
        },
        icon: {
            color: '#b56ab8',
            marginRight: '12px',
            fontSize: '1.2rem'
        }
    };

    return (
        <section style={styles.section} className="competence_section">
            <div className="container">
                {/* Titre principal */}
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h1 className="display-4 fw-bold text-white">
                            Mes <span style={styles.titleGradient}>Compétences</span>
                        </h1>
                        <div style={{ width: '50px', height: '4px', background: '#C586C0', margin: '15px auto', borderRadius: '2px' }}></div>
                    </div>
                </div>

                <div className="row g-4">
                    {/* Front-end */}
                    <div className="col-md-4">
                        <div className="skill-card" style={styles.card}>
                            <h4 style={styles.categoryTitle}>Front-end</h4>
                            <ul style={styles.list}>
                                <li style={styles.listItem}><i className="bi bi-patch-check-fill" style={styles.icon}></i> React</li>
                                <li style={styles.listItem}><i className="bi bi-patch-check-fill" style={styles.icon}></i> Bootstrap</li>
                                <li style={styles.listItem}><i className="bi bi-patch-check-fill" style={styles.icon}></i> Tailwind CSS</li>
                            </ul>
                        </div>
                    </div>

                    {/* Back-end */}
                    <div className="col-md-4">
                        <div className="skill-card" style={styles.card}>
                            <h4 style={styles.categoryTitle}>Back-end</h4>
                            <ul style={styles.list}>
                                <li style={styles.listItem}><i className="bi bi-patch-check-fill" style={styles.icon}></i> Laravel</li>
                                <li style={styles.listItem}><i className="bi bi-patch-check-fill" style={styles.icon}></i> Symfony</li>
                                <li style={styles.listItem}><i className="bi bi-patch-check-fill" style={styles.icon}></i> Express.js</li>
                            </ul>
                        </div>
                    </div>

                    {/* Autre */}
                    <div className="col-md-4">
                        <div className="skill-card" style={styles.card}>
                            <h4 style={styles.categoryTitle}>Outils & Data</h4>
                            <ul style={styles.list}>
                                <li style={styles.listItem}><i className="bi bi-patch-check-fill" style={styles.icon}></i> Github / Gitlab</li>
                                <li style={styles.listItem}><i className="bi bi-patch-check-fill" style={styles.icon}></i> MySQL</li>
                                <li style={styles.listItem}><i className="bi bi-patch-check-fill" style={styles.icon}></i> PostgreSQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Effets de survol CSS */}
            <style>
                {`
                    .skill-card:hover {
                        transform: translateY(-10px);
                        border-color: #C586C0 !important;
                        box-shadow: 0 10px 30px rgba(181, 106, 184, 0.15);
                        background-color: #1a1a1a !important;
                    }
                    .skill-card::before {
                        content: "";
                        position: absolute;
                        top: 0; left: 0; width: 4px; height: 0;
                        background: #C586C0;
                        transition: height 0.3s ease;
                    }
                    .skill-card:hover::before {
                        height: 100%;
                    }
                `}
            </style>
        </section>
    );
}

export default Competence;