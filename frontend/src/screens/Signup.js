import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Footer from "../components/Footer";
// import './FancyAlert'

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });

    const json = await response.json();

    if (!json.success) {
      alert("Enter Valid Credentials");
    } else {
      navigate("/login");
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
        className="vh-100"
        style={{
          background: "linear-gradient(120deg, #89f7fe, #66a6ff)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ zIndex: -1, overflow: "hidden" }}
        ></div>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black"
                style={{
                  borderRadius: "25px",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                  background: "#ffffff",
                }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p
                        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                        style={{
                          color: "#66a6ff",
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <br />
                        Create an Account
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <PersonIcon
                            style={{ fontSize: "2rem", color: "#66a6ff" }}
                          />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              value={credentials.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              style={{
                                border: "1px solid #66a6ff",
                                borderRadius: "10px",
                                padding: "10px",
                                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                              }}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <EmailIcon
                            style={{ fontSize: "2rem", color: "#66a6ff" }}
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
                                border: "1px solid #66a6ff",
                                borderRadius: "10px",
                                padding: "10px",
                                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                              }}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <HttpsIcon
                            style={{ fontSize: "2rem", color: "#66a6ff" }}
                          />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              name="password"
                              value={credentials.password}
                              onChange={handleChange}
                              placeholder="Password Min-5 characters"
                              style={{
                                border: "1px solid #66a6ff",
                                borderRadius: "10px",
                                padding: "10px",
                                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                              }}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <AddLocationIcon
                            style={{ fontSize: "2rem", color: "#66a6ff" }}
                          />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              className="form-control"
                              name="location"
                              value={credentials.location}
                              onChange={handleChange}
                              placeholder="Location"
                              style={{
                                border: "1px solid #66a6ff",
                                borderRadius: "10px",
                                padding: "10px",
                                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
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
                                "linear-gradient(120deg, #89f7fe, #66a6ff)",
                              border: "none",
                              borderRadius: "20px",
                              padding: "10px 20px",
                              fontSize: "1rem",
                              color: "#ffffff",
                              cursor: "pointer",
                              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                              transition: "all 0.3s ease",
                            }}
                          >
                            Submit
                          </button>
                          <Link
                            to="/login"
                            className="m-3 btn btn-danger"
                            style={{
                              background:
                                "linear-gradient(120deg, #66a6ff, #89f7fe)",
                              border: "none",
                              borderRadius: "20px",
                              padding: "10px 20px",
                              fontSize: "1rem",
                              color: "#ffffff",
                              cursor: "pointer",
                              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                              textDecoration: "none",
                              transition: "all 0.3s ease",
                            }}
                          >
                            Already a User
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                        style={{
                          borderRadius: "15px",
                          transform: "scale(1.1)",
                        }}
                      />
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
