import React, { useState } from "react";
import "../../styles/Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import validation from "../../Validation/Validation";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ProductRegister = () => {
  const navigate = useNavigate();
  // const [values,setValues]=useState({
  //     productname: '',
  //     description: "",
  //     marketprice: "",
  //     retailprice: "",
  //     marketprice: "",
  //     createdby: "",
  //     category: "",
  // });
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [marketPrice, setMarketPrice] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [datecreated, setDateCreated] = useState("");
  const [createdby, setCreatedBy] = useState("");
  const [category, setCategory] = useState("");
  const [validationError, setValidationError] = useState({});

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const handleValidation = async (event) => {
    event.preventDefault();
    const dateCreated = new Date(); // or your timestamp value
const timestampInSeconds = Math.floor(dateCreated.getTime() / 1000);
//     const formData = new FormData();
// formData.append('username', 'JohnDoe');
    // formData.append("description", description);
    // formData.append("marketprice", marketPrice);
    // formData.append("retailprice", retailPrice);
    // formData.append("datecreated", datecreated);
    // formData.append("createdby", createdby);
    // formData.append("category", category);

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
    console.log('product name', productName)

    await axios
      .post(`http://localhost:8000/api/product_list`, formData)
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
        <h2 className="mb-3 text-center">Product Register</h2>
        <form onSubmit={handleValidation}>
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

export default ProductRegister;
