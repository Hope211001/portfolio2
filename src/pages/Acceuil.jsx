import React from "react";
import Header from "../components/Header";
import Qualites from "../components/Qualites";
import Competence from "../components/Competence";
import Contact from "../components/Contact";
import Projet from "../components/Projet";
import Home from "../components/Home";
function Acceuil() {
    return (
        <>
            <Header />
            <Home />
            <Projet />
            <Competence />
            <Qualites />
            <Contact />
        </>
    )
}

export default Acceuil;




