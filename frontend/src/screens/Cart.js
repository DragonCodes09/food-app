import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart(props) {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3 text-white">
          Your Cart is Empty! 🛒
        </div>
      </div>
    );
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  console.log("cart", data);

  async function handleCheckOut(event) {
    const response = await fetch(
      "https://food-backend-y5cj.onrender.com/api/cartorderdata",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
          order: data,
          price: totalPrice,
        }),
      }
    );

    const json = await response.json();
    console.log(json);
    if (json.success) {
      dispatch({ type: "ORDERRECEIVED" });
      alert("YAY! Order Received 🎉");
      props.onCheckout();
    }
  }

  return (
    <div>
      <div
        className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md p-3"
        style={{
          background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
          borderRadius: "15px",
        }}
      >
        <table className="table table-hover">
          <thead
            className="text-white fs-4"
            style={{ backgroundColor: "#5c67f2" }}
          >
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody style={{ color: "#4b4b4b", fontWeight: "500" }}>
            {data.map((food, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>{food.size}</td>
                  <td>₹{food.price}</td>
                  <td>
                    <button
                      className="btn p-2 bg-danger text-white"
                      style={{
                        fontWeight: "bold",
                        boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
                      }}
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-center mt-4">
          <h1
            className="fs-2"
            style={{
              color: "#4b4b4b",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Total Price: ₹{totalPrice}/-
          </h1>
        </div>
        <div className="text-center">
          <button
            className="btn mt-4"
            style={{
              backgroundColor: "#5c67f2",
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "25px",
              boxShadow: "0px 3px 10px rgba(0,0,0,0.3)",
            }}
            onClick={handleCheckOut}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
