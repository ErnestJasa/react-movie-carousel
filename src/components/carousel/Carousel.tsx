// import CarouselItem from "./CarouselItem";
import { movies } from "../../data/data";
import { useState } from "react";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = movies.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(movies) || movies.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <button className="left-arrow" onClick={prevSlide}>
        left
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        right
      </button>

      {movies.map((movie, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <h5>{movie.title}</h5>
                <img className="image" src={movie.img} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default Carousel;
