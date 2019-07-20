import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header'
import Footer from '../components/Footer';
import acerca from '../images/acerca.jpg';


function About(){

    return (
        <>
        <Navbar/>
        <Header Nombre="Nosotros" imagen={acerca}/>
        
        <Footer/>
        {/* Fragment */}
        </>
    )
                
}

export default About;