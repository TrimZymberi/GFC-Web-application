import React, { useEffect, useState } from 'react';
import "../../styles/Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import validation from "../../Validation/Validation";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams()
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [marketPrice, setMarketPrice] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [datecreated, setDateCreated] = useState("");
  const [createdby, setCreatedBy] = useState("");
  const [category, setCategory] = useState("");
  const [validationError, setValidationError] = useState({});

  const [errors, setErrors] = useState({});

  useEffect(()=>{
    fetchProduct()
  },[])

  const fetchProduct = async () => {
    await axios.get(`http://localhost:8000/api/product_list/${id}`).then(({data})=>{
      console.log('DATA PRODUCT', data.data)
      const { productname, description, marketprice, retailprice, datecreated, createdby,category } = data.data
      setProductName(productname)
      setDescription(description)
      setMarketPrice(marketprice)
      setRetailPrice(retailprice)
      setDateCreated(datecreated)
      setCreatedBy(createdby)
      setCategory(category)

    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const updateProduct = async (event) => {
    event.preventDefault();

    const formData = {
      'priview': 'a',
      'productname':productName,
      'description':description,
      'marketprice':parseFloat(marketPrice),
      'retailprice':parseFloat(retailPrice),
      'datecreated':datecreated,
      'createdby':createdby,
      'category':category,
    }
    
    console.log('FORM DATA', formData)

    await axios
      .put(`http://localhost:8000/api/product_list/${id}`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/productlist");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });

    // setErrors(validation(formData))
  };

  return (
    <div className="wrapper  d-flex  align-items-center justify-content-center mb-5">
      <div className="signup ">
        <h2 className="mb-3 text-center">Edit Product</h2>
        <form onSubmit={updateProduct}>
          <div className="form-group  mb-2 ">
            <label htmlFor="productname" className="form-label">
              Name of Product
            </label>
            <input
              type="text"
              name="productname"
              className="form-control"
              placeholder="Enter product name  "
              value={productName}
              onChange={(event) => {
                setProductName(event.target.value);
              }}
            ></input>
            {/* {errors.Name && <p className="text-danger">{errors.Name}</p>} */}
          </div>

          <div className="form-group  mb-2">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              type="number"
              name="description"
              className="form-control"
              placeholder="Enter description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
          </div>

          <div className="form-group mb-2 ">
            <label htmlFor="retailprice" className="form-label">
              Retail Price
            </label>
            <input
              type="number"
              name="retailprice"
              className="form-control"
              placeholder="Enter retail price "
              value={retailPrice}
              onChange={(event) => {
                setRetailPrice(event.target.value);
              }}
            ></input>
          </div>

          <div className="form-group mb-2 ">
            <label htmlFor="marketprice" className="form-label">
              Market Price
            </label>
            <input
              type="number"
              name="marketprice"
              className="form-control"
              placeholder="Enter market price "
              value={marketPrice}
              onChange={(event) => {
                setMarketPrice(event.target.value);
              }}
            ></input>
          </div>

          <div className="form-group mb-2 ">
            <label htmlFor="datecreated" className="form-label">
              Date Created
            </label>
            <input
              type="date"
              name="datecreated"
              className="form-control"
              placeholder="Enter created date "
              value={datecreated}
              onChange={(event) => {
                setDateCreated(event.target.value);
              }}
            ></input>
          </div>

          <div className="form-group mb-2 ">
            <label htmlFor="createdby" className="form-label">
              Created by
            </label>
            <input
              type="text"
              name="createdby"
              className="form-control"
              placeholder="Enter the creator "
              value={createdby}
              onChange={(event) => {
                setCreatedBy(event.target.value);
              }}
            ></input>
          </div>

          <div className="form-group mb-2 ">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="texy"
              name="category"
              className="form-control"
              placeholder="Enter category "
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            ></input>
          </div>

          <button type="submit" className="btn btn-danger w-100  mt-2">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
