import React, { useEffect, useState } from "react";
import "../styles/product-list-style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import EditIcon from "../images/NotePencil-d.svg";
import DeleteIcon from "../images/X-f.svg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CategoryTable() {

  const [loading, setLoading] = useState(true);
    const [category, setCategorys] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/category`).then(res => {
    console.log(res.data);
    setCategorys(res.data.category);
    setLoading(false);
    });
  }, []);

  

  if(loading){
    return (
      <div className="text-center container mt-3">
      <div className="spinner-border" role="status">
      </div>
      <span className="m-3">Loading... Please wait.</span>
    </div>
    )
  }

  const deleteCategory = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText ='Deleting...';

    axios
      .delete(`http://localhost:8000/api/category/${id}/delete`)
      .then((res) => {
        alert(res.data.message);
        thisClicked.closest('tr').remove();
      })
      .catch(function (error) {
        if (error.response) {
  
          if (error.response.status === 404) {
            alert(error.response.data.message);
            thisClicked.innerText ='Delete';
          }
          if (error.response.status === 500) {
            alert(error.response.data);
          }
        }
      });
  }


  let categoryDetails= '';
  categoryDetails=(category.map((item, index) => {
    return (
        <tr key={index} className="table-row" >
        <td className="table-cell">
          <p className="product-id text-center">{item.id}</p>
        </td>
        <td className="table-cell">
          <h1 c lassName="product-header">
            {item.name}
          </h1>
        </td>
        <td className="table-cell">
          <p className="product-paragraph">{item.description}</p>
        </td>
        <td className="table-cell">
          <p htmlFor=" price" className="product-price">
            EUR {item.price}€
          </p>
        </td>

        <td className="table-cell">
          <div className="edit-centre">
            <Link to={`/categoryList/${item.id}/catEdit`} className="btn btn-outline-info"> <img src={EditIcon} alt="" />
              Edit</Link>
          </div>
        </td>
        <td className="table-cell">
          <div className="edit-centre">
            <button type="button" onClick={(e)=>deleteCategory(e, item.id)} className="btn btn-outline-danger"><img src={DeleteIcon} alt="" />
            Delete</button>
          </div>
        </td>
      </tr>
    )
  }));

  

  return (
    <table className="order-table my-table" cellSpacing="0">
      <thead>
      <tr className="table-row">
        <th className="table-header">ID</th>
        <th className="table-header">Category Name</th>
        <th className="text-black-50">Description</th>
        <th className="table-header"> Price</th>
        <th className="table-header">Edit Category</th>
        <th className="table-header">Delete Category</th>
      </tr>
      </thead>
      <tbody>
      {categoryDetails}
      </tbody>
    </table>
  );
}
