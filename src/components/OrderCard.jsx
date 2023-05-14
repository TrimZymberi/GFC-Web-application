import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "react-use-cart";
import '../styles/card-style.css';


export default function ItemCard(props) {
  const location = useLocation();
  const links = [{ to: "/order" }];

  const { addItem } = useCart();

  return (
    <div className="col-11-md-6 col-lg-3 mx-0 mb-4" id="card-group">
      <div className="card h-100" id="Ordercard">
        <img src={props.img} className="card-img-top" id="cardImgs"/>
        <div className="card-body" id="cardBody">
          <h5 className="card-title" id="cardTitle">{props.title} </h5>
          <h5 className="card-text text-danger" id="cardPrice">{props.price} €</h5>
          <button
            className="btn btn-outline-danger"
            id="cardButton" 
            onClick={ ()=>addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
