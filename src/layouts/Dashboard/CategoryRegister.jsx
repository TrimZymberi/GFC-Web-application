import React,{ useState }from "react";
import "../../styles/Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import validation from "../../Validation/Validation";


const CategoryRegister = () => {

const [values,setValues]=useState({
    Name: "",
    Image: "",
    Price: "",
    Description: ""
});
    const[errors,setErrors]=useState({});

    const handleInput= event =>{
        setValues({...values,[event.target.name]: [event.target.value]})
    }

    const handleValidation =(event)=>{
        event.preventDefault();
        setErrors(validation(values))
    }

  return (
    <div className="wrapper  d-flex  align-items-center justify-content-center mb-5">
      <div className="signup ">
        <h2 className="mb-3 text-center">Category Registration</h2>
        <form onSubmit={handleValidation}>
        <div className="form-group  mb-2">
            <label htmlFor="CategoryName" className="form-label">
              Categories name
            </label>
            <select id="disabledSelect" class="form-select">
              <option>Pick category</option>
              <option>Burgers & Wraps</option>
              <option>Buckets & pieces</option>
              <option>Snacks & Sides</option>
              <option>Beverages & Desserts</option>

            </select>
            <div className="invalid-feedback">burgers</div>
          </div>

          <div className="form-group  mb-2">
            <label htmlFor="Img" className="form-label">
              Image
            </label>
            <input
              type="image"
              name="image"
              className="form-control"
              placeholder="Enter Price"
              onChange={handleInput}
            ></input>
            {errors.Image && <p className="text-danger">{errors.Image}</p>}

          </div>

          <div className="form-group  mb-2">
            <label htmlFor="Price" className="form-label">
              Price
            </label>
            <input
              type="text"
              name="Price"
              className="form-control"
              placeholder="Enter Price"
              onChange={handleInput}
            ></input>
            {errors.Price && <p className="text-danger">{errors.Price}</p>}

          </div>
          <div className="form-group  mb-2">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input
              type="textfield"
              name="Description"
              className="form-control "
              placeholder="Description"
              onChange={handleInput}
            ></input>
            {errors.confirm_password && <p className="text-danger">{errors.confirm_password}</p>}

          </div>
         
         

       
          <button type="submit" className="btn btn-danger w-100  mt-2">
            Register
          </button>
       
         
       
        </form>
      </div>
    </div>
  );
};

export default CategoryRegister;
