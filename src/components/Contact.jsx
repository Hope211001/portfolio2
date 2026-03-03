import React from "react";

function Contact() {
    const styles = {
        section: {
            backgroundColor: '#0a0a0a',
            padding: '100px 0',
            color: 'white',
            textAlign: 'center'
        },
        titleGradient: {
            background: 'linear-gradient(90deg, #b56ab8, #C586C0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800'
        },
        contactBtn: {
            padding: '15px 35px',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            border: '2px solid transparent',
            minWidth: '200px',
            justifyContent: 'center'
        }
    };

    return (
        <section style={styles.section} className="contact_section">
            <div className="container">
                {/* Titre */}
                <div className="row mb-5">
                    <div className="col-12">
                        <h1 className="display-4 fw-bold">
                            Contactez-<span style={styles.titleGradient}>moi</span>
                        </h1>
                        <p className="lead opacity-75 mt-3">
                            Une idée de projet ou une opportunité ? Discutons-en !
                        </p>
                        <div style={{ width: '50px', height: '4px', background: '#C586C0', margin: '20px auto', borderRadius: '2px' }}></div>
                    </div>
                </div>

                {/* Liens de contact */}
                <div className="row">
                    <div className="col-md-12 d-flex flex-wrap gap-4 justify-content-center align-items-center">
                        
                        {/* LINKEDIN */}
                        <a 
                            href="https://www.linkedin.com/in/fanantenana-rafaniritsoa-b06738359" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-btn linkedin-style"
                            style={styles.contactBtn}
                        >
                            <i className="bi bi-linkedin fs-4"></i> Linkedin
                        </a>

                        {/* EMAIL */}
                        <a 
                            href="mailto:rafaniritsoafanantenana@gmail.com?subject=Contact depuis le Portfolio&body=Bonjour Fanantenana,"
                            className="social-btn email-style"
                            style={styles.contactBtn}
                        >
                            <i className="bi bi-envelope-fill fs-4"></i> Email
                        </a>

                        {/* GITHUB */}
                        <a 
                            href="https://github.com/Hope211001" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-btn github-style"
                            style={styles.contactBtn}
                        >
                            <i className="bi bi-github fs-4"></i> Github
                        </a>

                    </div>
                </div>

                {/* Footer discret */}
                <div className="row mt-5 pt-5">
                    <div className="col-12 opacity-50 small">
                        <p>© 2024 Rafaniritsoa Fanantenana - Créé avec React & Bootstrap</p>
                    </div>
                </div>
            </div>

            {/* CSS des boutons */}
            <style>
                {`
                    /* Style LinkedIn */
                    .linkedin-style {
                        background: #0077b5;
                        color: white;
                    }
                    .linkedin-style:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 20px rgba(0, 119, 181, 0.4);
                        background: #0088cc;
                    }

                    /* Style Email - Utilisation de tes couleurs */
                    .email-style {
                        background: linear-gradient(45deg, #b56ab8, #C586C0);
                        color: white;
                    }
                    .email-style:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 20px rgba(181, 106, 184, 0.4);
                        filter: brightness(1.1);
                    }

                    /* Style Github */
                    .github-style {
                        background: #24292e;
                        color: white;
                        border: 1px solid #444 !important;
                    }
                    .github-style:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
                        background: #333;
                    }

                    .social-btn i {
                        transition: transform 0.3s ease;
                    }
                    .social-btn:hover i {
                        transform: scale(1.2) rotate(5deg);
                    }
                `}
            </style>
        </section>
    );
}

export default Contact;