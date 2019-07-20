import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from 'react-apollo-hooks';
import Navbar from '../components/Navbar';
import Header from '../components/Header'
import PostPreview from '../components/PostPreview';
import Footer from '../components/Footer';
import imageMenu from '../images/menu.jpg';

const ALL_COMIDA=gql`
query ALLCOMIDA{
    lstComida{
        _id,
        cNombre,
        cDescripcion,
        cPrecio
    }
}
`;


function Menu(){
  const {data,loading,error}=useQuery(ALL_COMIDA);
  if(error){
    return <h4>Error</h4>
}else{
    return (
        <>
        <Navbar/>
        <Header Nombre="Menu" imagen={imageMenu}/>
       
      <section className="ftco-section">
    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center fadeInUp ftco-animated">
            <h2 className="mb-4">Nuestro Menu</h2>
            <p>A veces, los sentimientos son difíciles de explicar, y qué sentimiento más fuerte que nuestro amor por la comida. Sin duda, hablar de gastronomía y alimentos levanta emociones muy fuertes y al tratar de explicarlas, ha habido ciertas personas que lo han dicho mejor que nadie. </p>
          </div>
        </div>
    	</div>
    	<div className="container-wrap">
                    {
                        loading?<h4>Loading...</h4>
                        : data.lstComida.map(post=>(
                          
                            <PostPreview _id={post._id} cNombre={post.cNombre} cDescripcion={post.cDescripcion} cPrecio={post.cPrecio} key={post._id}/>
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