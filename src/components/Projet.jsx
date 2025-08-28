import React from "react";
function Projet() {
    return (
        <>
            <div className="portfolio_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="portfolio_taital">Mes <span className="portfolio_taital_1">Projets</span></h1>
                        </div>
                    </div>
                    <div className="portfolio_section">
                        <div className="portfolio_section_2">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className="container_main">
                                        <img src="images/projet/front-office-bourse.png" alt="Portfolio Image" className="image" />
                                        <div className="overlay">
                                            <div className="text">
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Voir detail</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-1 projet-content">
                                            <p className="competence_text mt-1">Gestion de demande des bourses</p>
                                            <p>Validation de demande , Envoyer par email la Confirmation de demande (avec Laravel)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="container_main">
                                        <img src="images/projet/g-stock.png" alt="Portfolio Image" className="image" />
                                        <div className="overlay">
                                            <div className="text">
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Voir detail</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-1 projet-content">
                                            <p className="competence_text mt-1">Gestion de stock</p>
                                            <p>L'etat de stock, approivisionnement avec (react et express.js)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="container_main">
                                        <img src="images/projet/swiftcard.png" alt="Portfolio Image" className="image" />
                                        <div className="overlay">
                                            <div className="text">
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Voir detail</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-1 projet-content">
                                            <p className="competence_text mt-1">site web swifcart</p>
                                            <p>Gestion de stock, gestion de personnel, comme le fiche de paye, comptabilité (avec Symfony)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio_section_2">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className="container_main">
                                        <img src="images/projet/databoost.png" alt="Portfolio Image" className="image" />
                                        <div className="overlay">
                                            <div className="text">
                                                <div className="btn_main">
                                                    <div className="buy_bt"><a href="#">Voir detail</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-1  projet-content">
                                            <p className="competence_text mt-1">Site web Databoost</p>
                                            <p>Gestion de stock, gestion de personnel, comme le fiche de paye, comptabilité (avec Symfony)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="seemore_bt"><a href="#">Voir detail</a></div> */}
                </div>
            </div>
        </>
    )
}

export default Projet