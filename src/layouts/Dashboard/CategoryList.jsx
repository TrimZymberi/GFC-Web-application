import React, { useState } from "react";
import "../../styles/Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarDashboard from "../../components/NavbarDashboard";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

const CategoryList = () => {
  const navigate =useNavigate();
  const[inputErrorList, setInputErrorList]=useState({});
  const [category, setCategory] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleInput = (event) => {
    event.persist();
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const saveCategory = (event) => {
    event.preventDefault();

    const data = {
      name: category.name,
      price: category.price,
      description: category.description,
    };

    axios.post(`http://localhost:8000/api/category`, data).then((res) => {
     alert(res.data.message);
     navigate('/categoryList')
    })
    .catch(function (error) {
      if(error.response){
        if(error.response.status === 422){
          setInputErrorList(error.response.data.errors);
        }
        if(error.response.status === 500){
          alert(error.response.data);
          
        }
      }
    });
    
  };

  return (
    <>
      <NavbarDashboard />
      <div className="wrapper  d-flex  align-items-center justify-content-center mb-5">
        <div className="signup ">
          <h2 className="mb-3 text-center">
            Category Registration
            <Link
              to="/categoryList"
              className="btn btn-outline-danger float-end w-10"
            >
              {" "}
              Back
            </Link>
          </h2>
          <form onSubmit={saveCategory}>
            <div className="form-group  mb-2">
              <label htmlFor="CategoryName" className="form-label">
                Categories name
              </label>
              {/* <select id="disabledSelect" class="form-select">
              <option>Pick category</option>
              <option>Burgers & Wraps</option>
              <option>Buckets & pieces</option>
              <option>Snacks & Sides</option>
              <option>Beverages & Desserts</option>

            </select> */}
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
                value={category.name}
                onChange={handleInput}
              ></input>
              <span className="text-danger">{inputErrorList.name}</span>
              {/* <div className="invalid-feedback">burgers</div> */}
            </div>

            <div className="form-group  mb-2">
              <label htmlFor="Price" className="form-label">
                Price
              </label>
              <input
                type="text"
                name="price"
                className="form-control"
                placeholder="Enter Price"
                value={category.price}
                onChange={handleInput}
              ></input>
              <span className="text-danger">{inputErrorList.price}</span>

            </div>
            <div className="form-group  mb-2">
              <label htmlFor="Description" className="form-label">
                Description
              </label>
              <input
                type="textfield"
                name="description"
                className="form-control "
                placeholder="Description"
                value={category.description}
                onChange={handleInput}
              ></input>
              <span className="text-danger mt-5">{inputErrorList.description}</span>

            </div>

            <button type="submit" className="btn btn-danger w-100  mt-2">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
