import React from 'react'

export default function ItemCard(props) {
    return (
        
        <div className="col-11-md-6 col-lg-3 mx-0 mb-4" style={{ width: '17rem' }}>
            <button className='btn border bg-white'>
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} className="card-img-top img-fluid" />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title text-danger">{props.price}    €</h5>
                    <p className="card-text">{props.desc}</p>
                    
                </div>
            </div>
            </button>
        </div>
       
    )
}