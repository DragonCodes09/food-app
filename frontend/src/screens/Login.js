import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import img1 from "../assets/A.png";
import Slideshow from "../components/slideshow"; // Import the slideshow component

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      navigate("/");
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
    }
  }

  function handleChange(event) {
    setCredentials((prevItems) => ({
      ...prevItems,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <>
      <Navbar />
      <section
        className="vh-100 position-relative"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ zIndex: -1, overflow: "hidden" }}
        >
          <Slideshow />
        </div>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black"
                style={{
                  borderRadius: "25px",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                  background: "rgba(255, 255, 255, 0.85)", // Semi-transparent background
                  backdropFilter: "blur(5px)", // Blur effect for background
                }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                      <img
                        src={img1}
                        className="img-fluid"
                        alt="Sample"
                        style={{
                          borderRadius: "15px",
                          transform: "scale(1.1)",
                        }}
                      />
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p
                        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                        style={{
                          color: "#f5576c",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                        }}
                      >
                        Login Here...
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <EmailIcon
                            style={{ fontSize: "2rem", color: "#f5576c" }}
                          />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              name="email"
                              value={credentials.email}
                              onChange={handleChange}
                              placeholder="Your Email"
                              style={{
                                border: "1px solid #f5576c",
                                borderRadius: "10px",
                                padding: "10px",
                                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                              }}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <HttpsIcon
                            style={{ fontSize: "2rem", color: "#f5576c" }}
                          />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              name="password"
                              value={credentials.password}
                              onChange={handleChange}
                              placeholder="Password"
                              style={{
                                border: "1px solid #f5576c",
                                borderRadius: "10px",
                                padding: "10px",
                                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                              }}
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="m-3 btn btn-success"
                            style={{
                              background:
                                "linear-gradient(120deg, #f093fb, #f5576c)",
                              border: "none",
                              borderRadius: "20px",
                              padding: "10px 20px",
                              fontSize: "1rem",
                              color: "#ffffff",
                              cursor: "pointer",
                              boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                              transition: "all 0.3s ease",
                            }}
                          >
                            Submit
                          </button>
                          <Link
                            to="/createuser"
                            className="m-3 btn btn-danger"
                            style={{
                              background:
                                "linear-gradient(120deg, #f5576c, #f093fb)",
                              border: "none",
                              borderRadius: "20px",
                              padding: "10px 20px",
                              fontSize: "1rem",
                              color: "#ffffff",
                              cursor: "pointer",
                              boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                              textDecoration: "none",
                              transition: "all 0.3s ease",
                            }}
                          >
                            Not A User!
                          </Link>
                        </div>
                      </form>
                    </div>
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
}
