import {
  CarouselProvider,
  ButtonBack,
  ButtonNext,
  Image,
  Slide,
  Slider,
} from "pure-react-carousel";
import React from "react";

import CustomDotGroup from "./CustomDotGroup";
import { Icon,Header } from "semantic-ui-react";

const ImageCarousel = () => (
  <CarouselProvider
    infinite={true}
    naturalSlideWidth={1080}
    naturalSlideHeight={400}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src="https://lorempixel.com/800/800/cats/0" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="https://lorempixel.com/800/800/cats/1" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://lorempixel.com/800/800/cats/2" />
      </Slide>
    </Slider>
    <ButtonBack> <Header as="h6" icon>
      <Icon name="chevron circle left">
      </Icon>
    </Header></ButtonBack>

   
    <ButtonNext>Next</ButtonNext>
    {/* <CustomDotGroup slides={3} /> */}
  </CarouselProvider>
);

export default ImageCarousel;
