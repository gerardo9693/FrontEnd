import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import images from '../images/bg_3.jpg';
import about from '../images/Uber.jpg';
import {Link} from 'react-router-dom';

function Home(){
    return (
        <>
        <Navbar/>

        <section className="home-slider owl-carousel img owl-loaded owl-drag" style={{backgroundImage:`url(${images})`}}>

      <div className="owl-stage-outer">
        <div className="owl-stage" style={{transform: "translate3d(-2698px, 0px, 0px)", transition: "all 0s ease 0s", width: "9443px"}}><div className="owl-item cloned" style={{width: "1349px"}}><div className="slider-item">
          <div className="overlay"></div>
         
        </div>
        </div>
        <div className="owl-item cloned" style={{width: "1349px"}}><div className="slider-item" style={{backgroundImage:`url(${images})`}}>
          <div className="overlay"></div>
          
        </div></div><div className="owl-item active" style={{width: "1349px"}}><div className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text align-items-center" data-scrollax-parent="true">
  
              <div className="col-md-6 col-sm-12 ftco-animate fadeInUp ftco-animated">
                <span className="subheading">Bienvenido</span>
                <h1 className="mb-4">Ofecemos la mejor calidad de comida local Online</h1>
                <p className="mb-4 mb-md-5">La comida de tus restaurantes favoritos a domicilio</p>
                <p>
              <input type="email" className="text-dark btn btn-default p-3 px-xl-4 py-xl-3" style={{width:"400px",height:"54px", padding:"5px",borderRadius:"5px",backgroundColor:"#7f7f65", WebkitTextFillColor:"black"}} name="Direccion" id="Direccion" placeholder="Agrega tu sitio de Entrega" />
            <Link to="/menu" className="btn btn-primary p-3 px-xl-4 py-xl-3">Ver Menú</Link></p>
              </div>
              <div className="col-md-6 ftco-animate fadeInUp ftco-animated">
                <img src={require("../images/Cochinita.png")} className="img-fluid" alt=""/>
              </div>
  
            </div>
          </div>
        </div></div></div></div><div className="owl-nav disabled"><button role="presentation" className="owl-prev"><span className="ion-md-arrow-back"></span></button><button role="presentation" className="owl-next"><span className="ion-chevron-right"></span></button></div><div className="owl-dots"><button className="owl-dot active"><span></span></button><button className="owl-dot"><span></span></button><button className="owl-dot"><span></span></button></div></section>
        <div className="App">

    </div>

        <section className="ftco-about d-md-flex">
    	<div className="one-half img" style={{backgroundImage:`url(${about})`}}></div>
    	<div className="one-half ftco-animate fadeInUp ftco-animated">
        <div className="heading-section ftco-animate fadeInUp ftco-animated">
          <h2 className="mb-4">Bienvenido a <span className="flaticon-pizza">Uber Eats</span> Local Food</h2>
        </div>
        <div>
  				<p>Somos una empresa que ofrece el mejor servicio online de comida rapida y a domicilio.
					  Brindando al cliente la mejor calidad de atencion en sus pedidos, asugurando que
					  su producto sea entregado de manera eficiente y rapida.
				  </p>
  			</div>
    	</div>
    </section>
        <Footer/>
        {/* Fragment */}
        </>
    )
                
}

export default Home;