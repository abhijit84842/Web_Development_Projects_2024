import React from "react";
import "../CSS/gallery.css";

import img1 from "../assets/images/galleryimages/img1.jpg";
import img2 from "../assets/images/galleryimages/img2.jpg";
import img3 from "../assets/images/galleryimages/img3.jpg";
import img4 from "../assets/images/galleryimages/img4.jpg";
import img5 from "../assets/images/galleryimages/img5.jpg";
import img6 from "../assets/images/galleryimages/img6.jpg";

const Gallery = () => {
  return (
    <div className="gallery-main-container">
      <h1>GALLERY</h1>
      <div className="gallery-sub-container">
        <img src={img1} alt="loading..." />
        <img src={img2} alt="loading.." />
        <img src={img3} alt="loading.." />
        <img src={img4} alt="loading..." />
        <img src={img5} alt="loading.." />
        <img src={img6} alt="loading.." />
      </div>
    </div>
  );
};

export default Gallery;
