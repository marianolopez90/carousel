import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Img2 from '../../logo.svg';

const Carousel = () => {
  const images = [
    { url: Img2 },
    { url: Img2 },
    { url: Img2 },
  ];
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height={667}
        images={images}
        showBullets={true}
        showNavs={true}
        loop
        autoPlay
      />
    </div>
  );
};

export default Carousel;
