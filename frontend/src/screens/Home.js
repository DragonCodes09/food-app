import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousal from "../components/Carousal";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [searchedString, setSearchedString] = useState("");
  const [cardButton, setCardButton] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  async function loadData() {
    try {
      let response = await fetch(
        "https://food-backend-y5cj.onrender.com/api/foodData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFoodCat(data[1]);
      setFoodItem(data[0]);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      {cardButton && showAlert && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Hello Foodiee!</strong> You should Login Before You
          Proceed....
          <button
            type="button"
            className="close"
            onClick={() => setCardButton(false)}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <Carousal setSearchedString={setSearchedString} />
      <div
        className="container"
        style={{
          backgroundImage:
            "url(C:\\Users\\hp\\Downloads\\foodDeliveryApp\\my-app\\src\\img\\bg.png)",
        }}
      >
        {foodCat.length > 0 ? (
          foodCat.map((data, index) => (
            <div key={index} className="my-4">
              <h2 style={{ textAlign: "center" }}>{data.CategoryName}</h2>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {foodItem.length > 0 ? (
                  foodItem
                    .filter((item) => {
                      return (
                        item.CategoryName === data.CategoryName &&
                        item.name
                          .toLowerCase()
                          .includes(searchedString.toLowerCase())
                      );
                    })
                    .map((categFoodItem) => (
                      <div key={categFoodItem._id} className="my-3 mx-3">
                        <Cards
                          imglink={categFoodItem.img}
                          title={categFoodItem.name}
                          description={categFoodItem.description}
                          options={categFoodItem.options[0]}
                          setcardButton={setCardButton}
                          id={categFoodItem._id}
                        />
                      </div>
                    ))
                ) : (
                  <div>No Such Data Found</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>...loading</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
