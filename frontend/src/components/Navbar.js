import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modals";
import Cart from "../screens/Cart";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import CustOrderfd from "../screens/CustOrderfd";

import FoodBankIcon from "@mui/icons-material/FoodBank";

export default function Navbar() {
  const data = useCart();
  const dispatch = useDispatchCart();
  const navigate = useNavigate();

  const [cartView, setCartView] = useState(false);
  const [custOrder, setCustOrder] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    dispatch({ type: "ORDERRECEIVED" });
    navigate("/login"); // Redirect to the login page
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center w-100">
            <Link
              className="navbar-brand fs-1 d-flex align-items-center text-gradient"
              to="/"
              style={{ textDecoration: "none" }}
            >
              <span>Know Your</span>
              <FoodBankIcon
                style={{
                  fontSize: "2rem",
                  margin: "0 5px",
                  animation: "spinIcon 2s linear infinite",
                }}
              />
              <span>Meal</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <div
                    className="d-flex"
                    style={{
                      justifyContent: isMenuOpen ? "center" : "space-between",
                    }}
                  >
                    <Link
                      className="btn btn-animated mx-1"
                      to="/login"
                      style={{ background: "#fff", color: "#28a745" }}
                    >
                      Login
                    </Link>
                    <Link
                      className="btn btn-animated mx-1"
                      to="/createuser"
                      style={{ background: "#fff", color: "#28a745" }}
                    >
                      Signup
                    </Link>
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <div
                    className="d-flex"
                    style={{
                      justifyContent: isMenuOpen ? "center" : "flex-end",
                      alignItems: "center",
                      width: isMenuOpen ? null : "35vw",
                    }}
                  >
                    <button
                      className="btn btn-animated mx-2 fw-bold text-white"
                      onClick={() => {
                        setCartView(true);
                      }}
                    >
                      Cart
                      <span
                        className="badge bg-danger text-white fs-6 rounded-circle ms-2 text-white"
                        style={{
                          animation: "popBadge 1s ease-in-out infinite",
                        }}
                      >
                        {data.length}
                      </span>
                    </button>

                    <button
                      className="btn btn-animated mx-2 fw-bold text-white"
                      onClick={() => {
                        setCustOrder(true);
                      }}
                    >
                      Orders
                    </button>

                    <button
                      className="btn btn-animated mx-2 fw-bold text-white"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>

                  {cartView ? (
                    <Modal
                      onClose={() => {
                        setCartView(false);
                      }}
                      ta
                    >
                      <Cart
                        onCheckout={() => {
                          setCartView(false);
                        }}
                      />
                    </Modal>
                  ) : null}
                  {custOrder ? (
                    <Modal
                      onClose={() => {
                        setCustOrder(false);
                      }}
                    >
                      <CustOrderfd />
                    </Modal>
                  ) : null}
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Custom CSS */}
      <style>
        {`
          @keyframes spinIcon {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes popBadge {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          .btn-animated {
            transition: all 0.3s ease;
            border-radius: 25px;
            padding: 10px 20px;
            border: none;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
          }

          .btn-animated:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          }

          .text-gradient {
            background: linear-gradient(90deg, #89f7fe, #66a6ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
}
