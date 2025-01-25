import React, { useEffect, useState } from "react";
import "./slideshow.css";

const Slideshow = () => {
  const images = [
    "https://i.pinimg.com/736x/a8/51/fc/a851fcea43989c5bbe6d03f909ef921f.jpg", // Replace with your image URLs
    "https://i.pinimg.com/736x/fe/a0/ed/fea0ed47f6e40eccc0cec00eb7d4007b.jpg",
    "https://i.pinimg.com/736x/fa/8e/f7/fa8ef769e663ffaa5c474b6aa728e369.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slideshow ${index === currentImageIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default Slideshow;
