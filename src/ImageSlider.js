import React, { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat", // Add this line to prevent image repetition
};

const sliderContainerStyles = {
  width: "500px", // Set the desired width here
  height: "300px", // Set the desired height here
  position: "relative",
  overflow: "hidden", // Hide any overflow if the slider is larger than the container
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "grey",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "grey",
  zIndex: 1,
  cursor: "pointer",
};

const dotContainerStyles = {
  textAlign: "center",
  marginTop: "10px", // Adjust the distance between the image slider and dots
};

const dotStyle = {
  margin: "0 5px", // Adjust the spacing between dots
  cursor: "pointer",
  fontSize: "20px",
  display: "inline-block", // Display dots in a line
};

const activeDotStyle = {
  ...dotStyle,
  fontSize: "30px", // You can adjust the active dot size here
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div>
      <div style={sliderContainerStyles}>
        <div>
          <div onClick={goToPrevious} style={leftArrowStyles}>
            ❰
          </div>
          <div onClick={goToNext} style={rightArrowStyles}>
            ❱
          </div>
        </div>
        <div style={slideStylesWidthBackground}></div>
      </div>
      <div style={dotContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={slideIndex === currentIndex ? activeDotStyle : dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
