import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Validation from "./Validation";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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
    console.log(errorMessages);
  };

  return (
    <>
      <Header />
      <section className="h-100 form">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9 mb-5">
              <div className="text-center my-4">
                <img
                  src="https://w7.pngwing.com/pngs/773/90/png-transparent-iphone-groupon-deal-of-the-day-customer-service-cd-electronics-company-text.png"
                  alt="logo"
                  width="100"
                />
              </div>
              <div className="card shadow-lg">
                <div className="card-body p-5 -mb-2 form-body">
                  <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                  <form method="POST">
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="email">
                        E-Mail Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        required
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {errorMessages.email && (
                      <p className="text-danger message">
                        {errorMessages.email}
                      </p>
                    )}

                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label className="text-muted" htmlFor="password">
                          Password
                        </label>
                      </div>
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
                    </div>
                    {errorMessages.password && (
                      <p className="text-danger message">
                        {errorMessages.password}
                      </p>
                    )}

                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="remember"
                          id="remember"
                          className="form-check-input"
                        />
                        <label for="remember" className="form-check-label">
                          Remember Me
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary ms-auto"
                        onClick={handleSubmit}
                      >
                        Login
                      </button>
                    </div>
                    <a href="forgot.html" className="float-start">
                      Forgot Password?
                    </a>
                  </form>
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-dark">
                      Create One
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

export default Login;
