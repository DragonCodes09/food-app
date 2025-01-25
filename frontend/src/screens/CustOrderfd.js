import React, { useEffect, useState } from "react";

export default function CustOrderfd() {
  const [odata, setOdata] = useState([]);

  async function loadData() {
    try {
      let response = await fetch("http://localhost:5000/api/custorderdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ custEmail: localStorage.getItem("userEmail") }),
      });
      response = await response.json();
      setOdata(response);
    } catch (err) {
      console.error("Error fetching customer orders:", err);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div
        className="container m-auto mt-5 p-4"
        style={{
          background: "linear-gradient(135deg, #5c67f2, #9dceff)",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2
          className="text-center text-white mb-4"
          style={{
            textShadow: "0px 1px 5px rgba(0, 0, 0, 0.5)",
            fontWeight: "bold",
          }}
        >
          Your Order History 🛍️
        </h2>
        <div className="table-responsive">
          <table className="table table-hover text-white">
            <thead
              className="fs-5"
              style={{
                backgroundColor: "#4b4b4b",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Price</th>
                <th scope="col">Orders</th>
              </tr>
            </thead>
            <tbody>
              {odata.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-white fs-5"
                    style={{
                      padding: "20px",
                      backgroundColor: "#ff9a9e",
                      borderRadius: "10px",
                    }}
                  >
                    No Orders Found! 😞
                  </td>
                </tr>
              ) : (
                odata.map((order, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#ffffff10" : "#ffffff05",
                    }}
                  >
                    <th scope="row" style={{ color: "white" }}>
                      {index + 1}
                    </th>
                    <td style={{ color: "white" }}>{order.date}</td>
                    <td style={{ color: "white" }}>₹{order.price}</td>
                    <td style={{ color: "white" }}>
                      {order.order_data.map((item, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: "#ff9a9e",
                            borderRadius: "10px",
                            padding: "5px 10px",
                            marginRight: "5px",
                            display: "inline-block",
                            fontSize: "0.9rem",
                            fontWeight: "500",
                          }}
                        >
                          {item.name}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
