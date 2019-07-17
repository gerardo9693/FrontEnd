import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from 'react-apollo-hooks';
import Navbar from '../components/Navbar';
import Header from '../components/Header'
import PostPreview from '../components/PostPreview';
import Footer from '../components/Footer';
import image from '../images/bg_1.jpg';
import images from '../images/bg_3.jpg';
import imagen4 from '../images/bg_2.png';
import imagen5 from '../images/pizza-1.jpg';
import imagen6 from '../images/bg_3.jpg';

const ALL_POST=gql`
query ALLPOST{
    listPosts{
        _id,
        title
    }
}
`;


function Menu(){
  const {data,loading,error}=useQuery(ALL_POST);
  if(error){
    return <h4>Error</h4>
}else{
    return (
        <>
        <Navbar/>
        <Header/>
        <section className="home-slider owl-carousel img owl-loaded owl-drag" style={{backgroundImage:`url(${images})`}}>

      
    <div className="owl-stage-outer"><div className="owl-stage" style={{transform: "translate3d(-2698px, 0px, 0px)", transition: "all 0s ease 0s", width: "6745px"}}><div className="owl-item cloned" style={{width: "1349px"}}><div className="slider-item" style={{backgroundImage: `url(${imagen4})`}}>
      	<div className="overlay"></div>
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center">

            <div className="col-md-7 col-sm-12 text-center ftco-animate fadeInUp ftco-animated">
            	<h1 className="mb-3 mt-5 bread">Menu</h1>
	            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Menu</span></p>
            </div>

          </div>
        </div>
      </div></div><div className="owl-item cloned" style={{width: "1349px"}}><div className="slider-item" style={{backgroundImage:`url(${images})`}}>
      	<div className="overlay"></div>
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center">

            <div className="col-md-7 col-sm-12 text-center ftco-animate fadeInUp ftco-animated">
            	<h1 className="mb-3 mt-5 bread">Menu</h1>
	            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Menu</span></p>
            </div>

          </div>
        </div>
      </div></div><div className="owl-item active" style={{width: "1349px"}}><div className="slider-item" style={{backgroundImage:`url(${images})`}}>
      	<div className="overlay"></div>
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center">

            <div className="col-md-7 col-sm-12 text-center ftco-animate fadeInUp ftco-animated">
            	<h1 className="mb-3 mt-5 bread">Menu</h1>
	            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Menu</span></p>
            </div>

          </div>
        </div>
      </div></div><div className="owl-item cloned" style={{width: "1349px"}}><div className="slider-item" style={{backgroundImage:`url(${images})`}}>
      	<div className="overlay"></div>
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center">

            <div className="col-md-7 col-sm-12 text-center ftco-animate fadeInUp ftco-animated">
            	<h1 className="mb-3 mt-5 bread">Menu</h1>
	            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Menu</span></p>
            </div>

          </div>
        </div>
      </div></div><div className="owl-item cloned" style={{width: "1349px"}}><div className="slider-item" style={{backgroundImage:`url(${images})`}}>
      	<div className="overlay"></div>
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center">

            <div className="col-md-7 col-sm-12 text-center ftco-animate fadeInUp ftco-animated">
            	<h1 className="mb-3 mt-5 bread">Menu</h1>
	            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Menu</span></p>
            </div>

          </div>
        </div>
      </div></div></div></div><div className="owl-nav disabled"><button role="presentation" className="owl-prev"><span className="ion-md-arrow-back"></span></button><button role="presentation" className="owl-next"><span className="ion-chevron-right"></span></button></div><div className="owl-dots disabled"><button className="owl-dot active"><span></span></button></div></section>
       
      <section class="ftco-section">
    	<div class="container">
    		<div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section ftco-animate text-center fadeInUp ftco-animated">
            <h2 class="mb-4">Nuestro Menu</h2>
            <p>A veces, los sentimientos son difíciles de explicar, y qué sentimiento más fuerte que nuestro amor por la comida. Sin duda, hablar de gastronomía y alimentos levanta emociones muy fuertes y al tratar de explicarlas, ha habido ciertas personas que lo han dicho mejor que nadie. </p>
          </div>
        </div>
    	</div>
    	<div class="container-wrap">
                    {
                        loading?<h4>Loading...</h4>
                        : data.listPosts.map(post=>(
                          
                            <PostPreview _id={post._id} title={post.title} key={post._id}/>
                        ))
                    }

    	</div>
  </section>
       
        {/* <section classNameName="home-slider owl-carousel img owl-loaded owl-drag" style={{backgroundImage:`url(${image})`}}>
          <div classNameName="container">

              <div classNameName="col-md-6 col-sm-12 order-md-last ftco-animate fadeInUp ftco-animated">
                <span classNameName="subheading">Crunchy</span>
                <h1 classNameName="mb-4">Italian Pizza</h1>
                <p classNameName="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <p><a href="#" classNameName="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="#" classNameName="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
              </div>
              <div classNameName="col-md-6 ftco-animate fadeInUp ftco-animated">
                <img src={imagen4} classNameName="img-fluid" alt=""/>
              </div>

          </div>

        
      
      
     
    </section>  */}
        <Footer/>
        {/* Fragment */}
        </>
    )
  }         
}

export default Menu;