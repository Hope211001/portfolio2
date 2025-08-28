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
                                <div className="seemore_bt"><a href="#"><i  className="bi bi-linkedin"></i> Linkedin</a></div>
                                <div className="seemore_bt"><a href="#"><i  className="bi bi-envelope"></i> Email</a></div>
                                <div className="seemore_bt"><a href="#"><i  className="bi bi-git"></i> Github</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact