import React, { useEffect, useRef, useState } from "react";
import "../styles/carousel.scss"; // You must define .slider, .list, .item, .active etc.

const Carousel = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const thumbnailRefs = useRef([]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Cleanup
  }, []);

  useEffect(() => {
    scrollActiveThumbnailIntoView();
    restartAutoSlide();
  }, [activeIndex]);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      goNext();
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const restartAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  const goNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const scrollActiveThumbnailIntoView = () => {
    const activeThumb = thumbnailRefs.current[activeIndex];
    if (activeThumb) {
      const rect = activeThumb.getBoundingClientRect();
      if (rect.left < 0 || rect.right > window.innerWidth) {
        activeThumb.scrollIntoView({ behavior: "smooth", inline: "nearest" });
      }
    }
  };

  return (
    <div className="slider">
      <div className="list">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item ${index === activeIndex ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button id="prev" onClick={goPrev}>
          rigth
        </button>
        <button id="next" onClick={goNext}>
          left
        </button>
      </div>

      <div className="thumbnail">
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (thumbnailRefs.current[index] = el)}
            className={`item ${index === activeIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          >
            <img src={slide.image} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
