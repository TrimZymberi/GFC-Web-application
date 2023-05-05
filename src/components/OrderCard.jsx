import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function ItemCard(props) {
  const location = useLocation();
  const links = [{ to: "/order" }];

  const { addItem } = useCart();

  return (
    <div
      className="card-group"
      style={{ width: "30rem", height: "25rem", margin: "-2.5rem" }}
    >
      <div className="card " style={{ margin: "6rem" }}>
        <img src={props.img} className="//" style={{ width: "8rem" , height: "8rem"}} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title text-danger">{props.price} €</h5>
          <p className="card-text">{props.desc}</p>
          <button
            className="btn btn-outline-danger "
            onClick={ ()=>addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
