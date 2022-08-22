import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Slider = ({ data }) => {
  const responsive = {
    300: {
      items: 3,
    },
    512: {
      items: 3,
    },
    1024: {
      items: 5,
    },
  };
  const items =
    data &&
    data.map((data) => (
      <p className="bg-[#f2f2f2] p-2 md:px-4  md:w-36 w-28 mx-12  text-lg  text-center rounded-full">
        {data.topic}
      </p>
    ));

  return (
    <AliceCarousel
      infinite
      autoPlay
      autoPlayDirection="ltr"
      autoPlayInterval={1000}
      autoHeight
      items={items}
      disableDotsControls
      disableButtonsControls
      disableSlideInfo
      paddingLeft={0}
      responsive={responsive}
    />
  );
};
