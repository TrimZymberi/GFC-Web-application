import React, { useState } from "react";
import "../styles/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Validation from "../Validation/Validation";

const Login = () => {
  const [values, setValues] = useState({
    email: " ",
    password: "",
  });

  const  [errors,setErrors]=useState({});

  const handleInput = (event) => {
    const newObj = { ...values, [event.target.name]: event.target.values };
    setValues(newObj);
  };

  const handleValidation = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="wrapper d-flex  align-items-center justify-content-center">
      <div className="login">
        <h2 className="mb-3 text-center">Login </h2>
        <form onSubmit={handleValidation}>
          <div className="form-group  mb-2 ">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleInput}
            ></input>
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>

          <div className="form-group  mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleInput}
            ></input>
            {errors.password && <p className="text-danger">{errors.password}</p>}

          </div>

          <div className="form-group  mb-2">
            <input type="checkbox" className="form-check-input"></input>
            <label htmlFor="check" className="form-check-label">
              I'm not a robot
            </label>
          </div>
          <button type="submit" className="btn btn-danger w-100  mt-2">
            Login
          </button>
          <p className="text-center mt-2 mb-3">
            Forgot your password?{" "}
            <a href="/" className="text-danger">
              Recover password
            </a>
          </p>
          <p className="text-secondary text-center">
            -- -- -- -- -- -- -- or -- -- -- -- -- -- --
          </p>
          <button type="button" className="btn w-100 btnGuest  mt-2">
            CONTINUE AS GUEST
          </button>
          <p className="text-center mt-2">
            New on Ordering App?{" "}
            <a href="/signup" className="text-danger">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

