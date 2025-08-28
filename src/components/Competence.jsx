import React from "react";
function Competence() {
    return (
        <>
            <div className="blog_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="blog_taital">Mes <span className="portfolio_taital_1">Compétences</span></h1>
                            {/* <p className="blog_text">upidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> */}
                        </div>
                    </div>
                </div>
                <div className="blog_section_2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="blog_box">
                                    <div class="blog_img mb-5">
                                        <h4 class="date_text">Front-end</h4>
                                    </div>
                                    <ul>
                                        <li className="mb-3 competence_text"><i className="bi bi-code" ></i> React</li>
                                        <li className="mb-3 competence_text"><i className="bi bi-code"></i> Boostrap</li>
                                        <li className="mb-3 competence_text" ><i className="bi bi-code"> </i>Tailwind</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog_box">
                                    <div class="blog_img mb-5">
                                        <h4 class="date_text">Back-end</h4>
                                    </div>
                                    <ul>
                                        <li className="mb-3 competence_text"><i className="bi bi-code" ></i> Laravel</li>
                                        <li className="mb-3 competence_text"><i className="bi bi-code"></i> Symfony</li>
                                        <li className="mb-3 competence_text" ><i className="bi bi-code"> </i>Express.js</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog_box">
                                    <div class="blog_img mb-5">
                                        <h4 class="date_text">Autre</h4>
                                    </div>
                                    <ul>
                                        <li className="mb-3 competence_text "><i className="bi bi-code" ></i> Github/Gitlab</li>
                                        <li className="mb-3 competence_text"><i className="bi bi-code"></i> MySql</li>
                                        <li className="mb-3 competence_text" ><i className="bi bi-code"> </i> Postgres</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="readmore_bt_1"><a href="#">Read More</a></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Competence