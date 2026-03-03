import React from "react";
import monImage from '../assets/images/fana.png';

export default function Home() {
    const styles = {
        section: {
            backgroundColor: '#0a0a0a', // Fond noir pour faire ressortir le blanc et le violet
            padding: '80px 0',
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center'
        },
        nameGradient: {
            background: 'linear-gradient(90deg, #b56ab8, #C586C0)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800',
            display: 'inline-block'
        },
        btnContact: {
            borderRadius: '50px',
            padding: '12px 30px',
            fontWeight: '600',
            color: '#FFF',
            backgroundColor: '#C586C0', // Ta couleur
            boxShadow: '0 4px 15px rgba(167, 80, 170, 0.4)',
            border: 'none',
            textDecoration: 'none',
            display: 'inline-block'
        },
        btnCV: {
            borderRadius: '50px',
            padding: '12px 30px',
            fontWeight: '600',
            border: '2px solid #b15294e3', // Ton violet
            color: '#FFF',
            textDecoration: 'none',
            display: 'inline-block',
            backgroundColor: 'transparent'
        }
    };

    return (
        <>
            <style>
                {`
                    .custom-btn:hover { 
                        transform: translateY(-3px); 
                        transition: all 0.3s ease;
                        filter: brightness(1.1);
                        box-shadow: 0 6px 20px rgba(197, 134, 192, 0.4) !important;
                    }
                    /* Pour s'assurer que les liens ne sont pas bleus */
                    a { text-decoration: none !important; }
                `}
            </style>

            <section style={styles.section} className="banner_section portfolio_section">
                <div className="container">
                    <div className="row align-items-center flex-column-reverse flex-lg-row">
                        
                        {/* CONTENU TEXTE */}
                        <div className="col-lg-7 text-center text-lg-start mt-5 mt-lg-0">
                            <h5 className="text-white fw-bold text-uppercase mb-3" style={{ letterSpacing: '2px', opacity: 0.9 }}>
                                Développeuse Fullstack
                            </h5>
                            <h1 className="display-3 fw-bold mb-3 text-white">
                                Bonjour, je suis <br /> 
                                <span style={styles.nameGradient}>Rafaniritsoa Fanantenana</span>
                            </h1>
                            <p className="lead text-white mb-4 mx-auto mx-lg-0" style={{ maxWidth: '600px', opacity: 0.8 }}>
                                Experte en <strong>Laravel, Symfony et React</strong>. 
                                Je construis des solutions robustes et automatise vos workflows avec <strong>n8n</strong>.
                            </p>
                            
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mt-4">
                                {/* BOUTON CONTACT */}
                                <a 
                                    href="mailto:rafaniritsoafanantenana@gmail.com?subject=Contact&body=Bonjour,%0D%0A%0D%0AJe vous contacte depuis votre site..."
                                    className="custom-btn" 
                                    style={styles.btnContact}
                                >
                                    <i className="bi bi-send me-2"></i>Me contacter
                                </a>

                                {/* BOUTON CV */}
                                <a 
                                    href="https://drive.google.com/file/d/1AJAe-tpfn0kQppNRzTWCMjoveFl_r8LL/view?usp=sharing" 
                                    target="_blank"
                                    className="custom-btn" 
                                    style={styles.btnCV}
                                >
                                    <i className="bi bi-download me-2"></i>Mon CV (PDF)
                                </a>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="col-lg-5 text-center">
                            <div className="position-relative d-inline-block">
                                {/* Cercle lumineux décoratif derrière l'image */}
                                <div className="position-absolute top-50 start-50 translate-middle rounded-circle" 
                                     style={{ 
                                         width: '100%', height: '100%', 
                                         backgroundColor: '#C586C0', 
                                         filter: 'blur(40px)', opacity: 0.2 
                                     }}>
                                </div>
                                <img 
                                    src={monImage} 
                                    alt="Rafaniritsoa Fanantenana" 
                                    className="img-fluid rounded-circle shadow-lg position-relative"
                                    style={{
                                        maxWidth: '320px',
                                        width: '85%',
                                        height: 'auto',
                                        border: '8px solid rgba(255,255,255,0.1)',
                                        zIndex: 1
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}