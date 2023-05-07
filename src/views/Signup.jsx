import React, { useState } from "react";
import "../styles/Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axiosClient from '../axios';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState({ __html: '' });

  const navigate = useNavigate();

  const signupValidation = (ev) => {
    ev.preventDefault();
    setError({ __html: '' });

    axiosClient
      .post('/signup', {
        name: username,
        email,
        password,
        password_confirmation: passwordConfirmation,
        city,
        address
      })
      .then(({}) => {
        navigate('/');
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.errors) {
          const errors = error.response.data.errors;
          setError({
            name: errors.name ? errors.name.join("<br>") : "",
            email: errors.email ? errors.email.join("<br>") : "",
            password: errors.password ? errors.password.join("<br>") : "",
            password_confirmation: errors.password_confirmation ? errors.password_confirmation.join("<br>") : "",
            city: errors.city ? errors.city.join("<br>") : "",
            address: errors.address ? errors.address.join("<br>") : "",
            other: errors.error ? errors.error.join("<br>") : "",
          });
        } else if (error.response && error.response.data && error.response.data.error) {
          setError({
            email: "",
            password: "",
            other: error.response.data.error,
          });
        } else {
          setError({ other: "An error occurred. Please try again later."});
        }
      });
  };

  return (
    <div className="wrapper  d-flex  align-items-center justify-content-center mb-5">
      <title>GFC | Signup</title>

      <div className="signup ">
        <h2 className="mb-3 text-center">Sign up </h2>
        <form onSubmit={signupValidation}>
          <div className="form-group  mb-2 ">
            <label htmlFor="text" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={ev => setUsername(ev.target.value)} />
            {error.name && <p className="text-danger mt-2" dangerouslySetInnerHTML={{ __html: error.name }}></p>}

          </div>
          <div className="form-group mb-2 ">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={ev => setEmail(ev.target.value)}
            />
            {error.email && <p className="text-danger mt-2" dangerouslySetInnerHTML={{ __html: error.email }}></p>}

          </div>
          <div className="form-group  mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={password} onChange={ev => setPassword(ev.target.value)}
            />
          </div>
          <div className="form-group  mb-2">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              className="form-control "
              placeholder="Confirm password"
              value={passwordConfirmation} onChange={ev => setPasswordConfirmation(ev.target.value)} />
            {error.password && <p className="text-danger mt-2" dangerouslySetInnerHTML={{ __html: error.password}}></p>}

          </div>
          <div className="form-group  mt-2">
            <label htmlFor="address" className="form-label">
              City
            </label>
            <select
              id="disabledSelect"
              class="form-select"
              name="city"
              value={city}
              onChange={ev => setCity(ev.target.value)}>
              <option disabled value="">Select your city</option>
              <option value="Gjilan">Gjilan</option>
              <option value="Prishtina">Prishtina</option>
              <option value="Mitrovica">Mitrovica</option>
              <option value="Peja">Peja</option>
              <option value="Ferizaj">Ferizaj</option>
            </select>
          </div>
            {error.city && <p className="text-danger mt-2" dangerouslySetInnerHTML={{ __html: error.city }}></p>}

          <div className="form-group  mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="form-control"
              placeholder="Write your address here"
              value={address}
              onChange={ev => setAddress(ev.target.value)}
            />
          </div>

          {error.address && <p className="text-danger mt-2" dangerouslySetInnerHTML={{ __html: error.address }}></p>}

          <button type="submit" className="btn btn-danger w-100  mt-2">
            Sign Up
          </button>

          {error.other && <p className="text-danger mt-2" dangerouslySetInnerHTML={{ __html: error.other }}></p>}

          <p className="text-center mt-2 mb-3">
            Already have an account?{" "}
            <a href="/login" className="text-danger">
              Login
            </a>
          </p>
          <p className="text-secondary text-center ">
            -- -- -- -- -- -- -- or -- -- -- -- -- -- --
          </p>
          <button type="button" className="btn btnGuest w-100   mt-2">
            CONTINUE AS GUEST
          </button>
        </form>
      </div>
    </div>
  );
};
