import React from 'react';
import { Link } from 'react-router-dom'
import imagen5 from '../images/pizza-1.jpg';

function PostPreview({_id,cNombre,cDescripcion,cPrecio}) {

	return (
    
    <div className="">
      <Link to={`/post/${_id}`}>
				<h2 className="post-title">
					{cNombre}
		  		</h2>
				
			</Link>
    <div className="col-lg-10 d-flex ftco-animate fadeInUp ftco-animated">
      <div className="services-wrap d-flex">
        <a href="#" className="img" style={{backgroundImage:`url(${imagen5})`}}></a>
        <div className="text p-4">
          <h3>{cNombre}</h3>
          <p>{cDescripcion} </p>
          <p className="price"><span>{cPrecio}</span> <Link to={`/post/${_id}`} className="ml-2 btn btn-white btn-outline-white">Order</Link></p>
        </div>
      </div>
    </div>
    </div>

	)

}

export default PostPreview;