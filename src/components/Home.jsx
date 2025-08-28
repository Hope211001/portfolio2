import React from "react";
export default function Home() {
    return (
        <>
            <div className="banner_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="banner_taital_main">
                                <h3 className="banner_text">Bonjour, je suis <br /> <span className="mt-3">Rafaniritsoa Fanantenana</span></h3>
                                <h1 className="banner_taital">Développeur Laravel | Symfony | React</h1>
                                <p className="mb-4">Passionné par le web, je crée des applications modernes alliant performance et élégance. Mon expertise technique et ma créativité me permettent de relever les défis complexes du développement.</p>
                                <div className="acceuil_bt d-flex gap-2 justify-content-start align-items-center">
                                    <a href="contact.html" className="">Contactez-moi</a>
                                    <a href="cv.pdf" className="acceuil_bt2">Télécharger mon CV</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="social_icon">
                                <ul>
                                    <li><a href="#"><i className="bi bi-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="bi bi-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="bi bi-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="bi bi-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}