import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ItemCard(props) {
  const location = useLocation();
  const links = [{ to: '/order'}];

  return (
    <div className="col-11-md-6 col-lg-3 mx-0 mb-4" style={{ width: '17rem' }}>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="btn border btn-outline-danger"
          isActive={() => link.to === location.pathname}
        >
          <div className="card p-0 overflow-hidden h-100 shadow">
            <img src={props.img} className="card-img-top img-fluid" />
            <div className="card-body text-center">
              <h5 className="card-title text-dark">{props.title}</h5>
              <h5 className="card-title text-danger">{props.price} €</h5>
              <p className="card-text">{props.desc}</p>
            </div>
          </div>
          <div>{link.text}</div>
        </Link>
      ))}
    </div>
  );
}
