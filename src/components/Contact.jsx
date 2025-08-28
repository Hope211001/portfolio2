import React from "react";
function Contact() {
    return (
        <>
            <div className="contact_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="contact_taital">Contactez - <span className="contact_taital_1">moi</span></h1>
                        </div>
                    </div>
                    <div className="contact_section_2">
                        <div className="row">
                            <div className="col-md-12 d-flex gap-2 justify-content-center align-item-center">
                                <div className="seemore_bt">
                                    <a href="https://www.linkedin.com/in/fanantenana-rafaniritsoa-b06738359" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-linkedin"></i> Linkedin
                                    </a>
                                </div>

                                <div className="seemore_bt">
                                    <a href="mailto:frafaniritsoa@gmail.com?subject=Contact&body=Bonjour,%0D%0A%0D%0AJe vous contacte depuis votre site...">
                                        <i className="bi bi-envelope"></i> Email
                                    </a>
                                </div>

                                <div className="seemore_bt">
                                    <a href="https://github.com/Hope211001" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-github"></i> Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact