import React, { useState } from "react";

export default function Carousal(props) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-pause="false"
        style={{ position: "relative" }}
      >
        {/* Search Bar */}
        <div
          className="carousel-caption d-flex flex-column align-items-center"
          style={{
            zIndex: "10",
            top: "40%",
            transform: "translateY(-50%)",
            background: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            borderRadius: "15px",
            width: "80%",
            margin: "0 auto",
          }}
        >
          <h2
            className="text-white mb-4"
            style={{
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
              fontWeight: "bold",
            }}
          >
            Find Your Favorite Meal 🍔🍕
          </h2>
          <div className="d-flex w-100">
            <input
              type="search"
              placeholder="Search delicious dishes..."
              aria-label="Search"
              className="form-control me-2 p-3"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                props.setSearchedString(e.target.value); // Updated
              }}
              style={{
                borderRadius: "30px",
                border: "none",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </div>

        {/* Carousel Items */}
        <div
          className="carousel-inner"
          id="carousal"
          style={{ maxHeight: "500px" }}
        >
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1"
              className="d-block w-100"
              alt="Iron Skillet Meal"
              style={{
                objectFit: "cover",
                filter: "brightness(75%)",
              }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://burst.shopifycdn.com/photos/two-pizzas-and-wine.jpg?width=1850&format=pjpg&exif=1&iptc=1"
              className="d-block w-100"
              alt="Pizza and Wine"
              style={{
                objectFit: "cover",
                filter: "brightness(75%)",
              }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://burst.shopifycdn.com/photos/fried-comfort-food-chicken.jpg?width=1850&format=pjpg&exif=1&iptc=1"
              className="d-block w-100"
              alt="Fried Chicken"
              style={{
                objectFit: "cover",
                filter: "brightness(75%)",
              }}
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
          style={{
            filter: "invert(1)",
            opacity: "0.8",
          }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
          style={{
            filter: "invert(1)",
            opacity: "0.8",
          }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
