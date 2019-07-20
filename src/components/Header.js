import React from 'react';
import images from '../images/bg_3.jpg';
import imagen4 from '../images/bg_2.png';
import {Link} from 'react-router-dom';

function Header({Nombre,imagen}){
    return(
      <section className="home-slider owl-carousel img owl-loaded owl-drag" style={{backgroundImage:`url(${imagen})`}}>

      
      <div className="owl-stage-outer"><div className="owl-stage" style={{transform: "translate3d(-2698px, 0px, 0px)", transition: "all 0s ease 0s", width: "6745px"}}><div className="owl-item cloned" style={{width: "1349px"}}><div className="slider-item" style={{backgroundImage: `url(${imagen4})`}}>
          <div className="overlay"></div>
          
        </div></div><div className="owl-item cloned" style={{width: "1349px"}}><div className="slider-item" style={{backgroundImage:`url(${imagen})`}}>
          <div className="overlay"></div>
         
        </div></div><div className="owl-item active" style={{width: "1349px"}}><div className="slider-item" style={{backgroundImage:`url(${imagen})`}}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text justify-content-center align-items-center">
  
              <div className="col-md-7 col-sm-12 text-center ftco-animate fadeInUp ftco-animated">
                <h1 className="mb-3 mt-5 bread">{Nombre}</h1>
                <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>{Nombre}</span></p>
              </div>
  
            </div>
          </div>
        </div></div><div className="owl-item cloned" style={{width: "1349px"}}><div className="slider-item" style={{backgroundImage:`url(${images})`}}>
          <div className="overlay"></div>
          
        </div></div>
        </div></div><div className="owl-nav disabled"><button role="presentation" className="owl-prev"><span className="ion-md-arrow-back"></span></button><button role="presentation" className="owl-next"><span className="ion-chevron-right"></span></button></div><div className="owl-dots disabled"><button className="owl-dot active"><span></span></button></div></section>
         
    )
}

export default Header;