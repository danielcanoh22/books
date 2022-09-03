import slide1 from "../assets/images/slide1.jpg"
import slide2 from "../assets/images/slide2.jpg"
import slide3 from "../assets/images/slide3.jpg"

export const Slider = () => {
  return (
    <div className="container">
      <section className="slider">
        <ul className="slider-items">
          <li className="slider-item">
            <img src={slide1}></img>
          </li>
          <li className="slider-item">
            <img src={slide2}></img>
          </li>
          <li className="slider-item">
            <img src={slide3}></img>
          </li>
        </ul>
      </section>
    </div>
  );
};
