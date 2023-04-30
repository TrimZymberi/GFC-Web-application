import React,{ useState }from "react";
import "../../styles/Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import validation from "../../Validation/Validation";




const ProductRegister = () => {

const [values,setValues]=useState({
    Name: " ",
    Id: " ",
    Quantity:"",
    DateOfManufacture: "",
    ExpirationDate: "",
    
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
        <h2 className="mb-3 text-center">Product Register</h2>
        <form onSubmit={handleValidation}>
          <div className="form-group  mb-2 ">
            <label htmlFor="text" className="form-label">
              Name of Product
            </label>
            <input
              type="text"
              name="Name"
              className="form-control"
              placeholder="Enter product name  "
              onChange={handleInput}
            ></input>
            {errors.Name && <p className="text-danger">{errors.Name}</p>}

          </div>

          <div className="form-group  mb-2">
            <label htmlFor="id" className="form-label">
              Product Id 
            </label>
            <input
              type="number"
              name="id"
              className="form-control"
              placeholder="Enter product ID"
              onChange={handleInput}
            ></input>
            {errors.Id && <p className="text-danger">{errors.Id}</p>}

          </div>

          <div className="form-group mb-2 ">
            <label htmlFor="Quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              name="Quantity"
              className="form-control"
              placeholder="Enter Quantity "
              onChange={handleInput}
            ></input>
            {errors.Quantity && <p className="text-danger">{errors.Quantity}</p>}

          </div>

          <div className="form-group mb-2 ">
            <label htmlFor="DateOfManufacture" className="form-label">
              Date of Manufacture
            </label>
            <input
              type="date"
              name="dateOfManufacture"
              className="form-control"
              placeholder="Enter the date of Manufacture "
              onChange={handleInput}
            ></input>
            {errors.DateOfManufacture && <p className="text-danger">{errors.DateOfManufacture}</p>}

          </div>


          <div className="form-group mb-2 ">
            <label htmlFor="ExpirationDate" className="form-label">
             Expirtaion Date
            </label>
            <input
              type="date"
              name="ExpirationDate"
              className="form-control"
              placeholder="Enter the expiration date "
              onChange={handleInput}
            ></input>
            {errors.ExpirationDate && <p className="text-danger">{errors.ExpirationDate}</p>}

          </div>

    
          <button type="submit" className="btn btn-danger w-100  mt-2">
            Register
          </button>
         
          

        </form>
      </div>
    </div>
  );
};

export default ProductRegister;