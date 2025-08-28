import React from "react";
function Qualites() {
    return (
        <>
            {/* services section start */}
            <div className="services_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="services_taital text-center">Mes <span className="portfolio_taital_1">Qualités</span></h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="services_section_2">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="box_main ">
                                    {/* <div className="app_icon"><img src="images/icon-1.png" alt="App Icon" /></div>
                                    <div className="app_icon_1"><img src="images/icon-1.png" alt="App Icon" /></div> */}
                                    <h4 className="services_text active"><i  className="bi bi-check text-success"></i> Sérieuse</h4>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="box_main ">
                                    {/* <div className="app_icon"><img src="images/icon-2.png" alt="Website Icon" /></div>
                                    <div className="app_icon_1"><img src="images/icon-6.png" alt="Website Icon" /></div> */}
                                    <h4 className="services_text"><i  className="bi bi-check text-success"></i> Créative</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="box_main ">
                                    {/* <div className="app_icon"><img src="images/icon-3.png" alt="HTML Icon" /></div>
                                    <div className="app_icon_1"><img src="images/icon-7.png" alt="HTML Icon" /></div> */}
                                    <h4 className="services_text"><i  className="bi bi-check text-success"></i> Travail en Equipe</h4>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="box_main ">
                                    {/* <div className="app_icon"><img src="images/icon-4.png" alt="Logo Icon" /></div>
                                    <div className="app_icon_1"><img src="images/icon-8.png" alt="Logo Icon" /></div> */}
                                    <h4 className="services_text"><i  className="bi bi-check text-success"></i> Honête</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* services section end */}
        </>
    )
}

export default Qualites