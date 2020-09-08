import React from "react";
import { Carousel } from "react-bootstrap";

function SlideImages(props) {
  const Slider = [];
  console.log(props.img)
  console.log(props.img.length)
  for (var i = 0; i < props.img.length; i++) {
    Slider.push(
      <Carousel.Item>
        <img className="d-block w-100" src={props.img[i]} alt={i} />
      </Carousel.Item>
    );
  }

  return <Carousel interval={null}>{Slider}</Carousel>;
}
export default SlideImages;
