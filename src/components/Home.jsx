import React from "react";
import monImage from '../assets/images/fana.png';
export default function Home() {
    return (
        <>
            <div className="banner_section layout_padding">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Colonne texte */}
                        <div className="col-lg-8 col-md-7 col-sm-12">
                            <div className="banner_taital_main">
                                <h3 className="banner_text">
                                    Bonjour, je suis <br /> 
                                    <span className="mt-3">Rafaniritsoa Fanantenana</span>
                                </h3>
                                <h1 className="banner_taital">Développeuse Laravel | Symfony | n8n</h1>
                                <p className="mb-4">
                                    Passionné par le web, je crée des applications modernes alliant performance et élégance. 
                                    Mon expertise technique et ma créativité me permettent de relever les défis complexes du développement.
                                </p>
                                {/* Espacement au-dessus des boutons */}
                                <div className="acceuil_bt d-flex flex-column flex-sm-row gap-2 justify-content-start align-items-start align-items-sm-center mt-4">
                                    <a href="contact.html" className="btn-primary">Contactez-moi</a>
                                    <a href="cv.pdf" className="acceuil_bt2">Télécharger mon CV</a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Colonne image */}
                        <div className="col-lg-4 col-md-5 col-sm-12">
                            <div className="banner_image text-center mt-4 mt-md-0">
                                <img 
                                    src={monImage} 
                                    alt="Rafaniritsoa Fanantenana - Développeuse Web" 
                                    className="img-fluid rounded-circle shadow-lg"
                                    style={{
                                        maxWidth: '280px',
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}