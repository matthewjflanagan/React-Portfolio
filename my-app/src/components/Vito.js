import React from 'react';
import { Zoom } from "react-slideshow-image";
import vito1 from "../assets/vito1.jpg";
import vito2 from "../assets/vito2.jpg";
import vito3 from "../assets/vito3.jpg";
import vito4 from "../assets/vito4.jpg";
import vito5 from "../assets/vito5.jpg";

const images = [vito1, vito2, vito3, vito4, vito5];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

export default function Vito() {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
}