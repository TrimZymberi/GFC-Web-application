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
        <h2 className="mb-3 text-center">Order Register</h2>
        <form onSubmit={handleValidation}>
          <div className="form-group  mb-2 ">
            <label htmlFor="text" className="form-label">
            Order ID
            </label>
            <input
              type="text"
              name="Name"
              className="form-control"
              placeholder="Enter Order ID "
              onChange={handleInput}
            ></input>
            {errors.Name && <p className="text-danger">{errors.Name}</p>}

          </div>

        
          <div className="form-group mb-2 ">
            <label htmlFor="Quantity" className="form-label">
              Description
            </label>
            <input
              type="number"
              name="Quantity"
              className="form-control"
              placeholder="Enter Description "
              onChange={handleInput}
            ></input>
            {errors.Quantity && <p className="text-danger">{errors.Quantity}</p>}

          </div>

          <div className="form-group mb-2 ">
            <label htmlFor="DateOfManufacture" className="form-label">
              Date of Order
            </label>
            <input
              type="date"
              name="dateOfManufacture"
              className="form-control"
              placeholder="Enter the date of Order "
              onChange={handleInput}
            ></input>
            {errors.DateOfManufacture && <p className="text-danger">{errors.DateOfManufacture}</p>}

          </div>

          <div className="form-group mb-2 ">
            <label htmlFor="Quantity" className="form-label">
              Price
            </label>
            <input
              type="number"
              name="Quantity"
              className="form-control"
              placeholder="Enter Price €"
              onChange={handleInput}
            ></input>
            {errors.Quantity && <p className="text-danger">{errors.Quantity}</p>}

          </div>
        
          <div className="form-group mb-2 ">
            <label htmlFor="Quantity" className="form-label">
              Orderd by
            </label>
            <input
              type="Name"
              name="Orderd by"
              className="form-control"
              placeholder="Enter the Name"
              onChange={handleInput}
            ></input>
            {errors.Quantity && <p className="text-danger">{errors.Quantity}</p>}

          </div>
          <div className="form-group mb-2 ">
            <label htmlFor="Quantity" className="form-label">
              Address
            </label>
            <input
              type="Name"
              name="Address"
              className="form-control"
              placeholder="Enter the Name"
              onChange={handleInput}
            ></input>
            {errors.Quantity && <p className="text-danger">{errors.Quantity}</p>}

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