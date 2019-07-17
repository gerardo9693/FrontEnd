import React from 'react';
import { Link } from 'react-router-dom'
import imagen5 from '../images/pizza-1.jpg';

function PostPreview({_id,title}) {

	return (
    
    <div class="">
      <Link to={`/post/${_id}`}>
				<h2 className="post-title">
					{title}
		  		</h2>
				
			</Link>
    <div class="col-lg-10 d-flex ftco-animate fadeInUp ftco-animated">
      <div class="services-wrap d-flex">
        <a href="#" class="img" style={{backgroundImage:`url(${imagen5})`}}></a>
        <div class="text p-4">
          <h3>Italian Pizza</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia </p>
          <p class="price"><span>$2.90</span> <a href="#" class="ml-2 btn btn-white btn-outline-white">Order</a></p>
        </div>
      </div>
    </div>
    </div>

	)

}

export default PostPreview;