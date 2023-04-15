import React from 'react';

const Itemcard = (props) => {
    return(
        <div className="col-11-md-6 col-lg-3 mx-0 mb-4" style={{ width: '17rem' }}>
          <div class="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} class="card-img-top img-fluid"/>
            <div class="card-body text-center">
                <h5 class="card-title">{props.title}</h5>
                <h5 class="card-title">{props.price}    €</h5>
                <p class="card-text">{props.desc}</p>
                <button class="btn text-white bg-danger">Add to Cart</button>
            </div>
        </div>
    </div>
    );
};

export default Itemcard;