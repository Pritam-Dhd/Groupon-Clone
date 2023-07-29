import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Validation from "./Validation";
import Header from "./Header";
import Footer from "./Footer";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = Validation(email, password);
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      email: validation.email,
      password: validation.password,
    }));
    setButtonPressed(true);
  };

  const fetchUserData = async () => {
    try {
      const data = { name: name, email: email, password: password };
      const response = await axios.post("http://localhost:8000/add-user", data);
      if (response.data.message === "User Created Successfully") {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        navigate(`/`);
      } else if (
        response.data.message === "User with this email already exists."
      ) {
        setButtonPressed(false);
        alert("User Already Exists");
      } else {
        alert("Error Adding User");
        setButtonPressed(false);
      }
    } catch (error) {
      console.log(error);
      setButtonPressed(false);
    }
  };

  useEffect(() => {
    if (
      buttonPressed &&
      errorMessages.email === "" &&
      errorMessages.password === ""
    ) {
      fetchUserData();
    } else {
      setButtonPressed(false);
    }
  }, [buttonPressed]);

  return (
    <>
      <Header />
      <section className="h-100 form">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9 mb-5">
              <div className="text-center my-5">
                <img
                  src="https://w7.pngwing.com/pngs/773/90/png-transparent-iphone-groupon-deal-of-the-day-customer-service-cd-electronics-company-text.png"
                  alt="logo"
                  width="100"
                />
              </div>
              <div className="card shadow-lg">
                <div className="card-body p-5 form-body">
                  <h1 className="fs-4 card-title fw-bold mb-2">Register</h1>
                  <form method="POST">
                    <div className="mb-2">
                      <label className="mb-2 text-muted" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        name="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="mb-2">
                      <label className="mb-2 text-muted" htmlFor="email">
                        E-Mail Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {errorMessages.email && (
                      <p className="text-danger message">
                        {errorMessages.email}
                      </p>
                    )}

                    <div className="mb-2">
                      <label className="mb-2 text-muted" htmlFor="password">
                        Password
                      </label>
                      <div className="d-flex">
                        <input
                          id="password"
                          type={isPasswordVisible ? "text" : "password"}
                          className="form-control"
                          name="password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />

                        <span
                          className="password-toggle-icon mt-1 ms-2"
                          onClick={handleTogglePasswordVisibility}
                        >
                          <FontAwesomeIcon
                            icon={isPasswordVisible ? faEyeSlash : faEye}
                          />
                        </span>
                      </div>
                      {errorMessages.password && (
                        <p className="text-danger message">
                          {errorMessages.password}
                        </p>
                      )}
                    </div>
                    <div className="align-items-center d-flex">
                      <button
                        type="submit"
                        className="btn btn-primary ms-auto"
                        onClick={handleSubmit}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer py-3 border-0 ">
                  <div className="text-center">
                    Already have an account?{" "}
                    <a href="/login" className="text-dark">
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
