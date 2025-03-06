import '../css/carousel.css';
import Iconleft from '../assets/chevron-left.png';
import IconRight from '../assets/chevron-right.png';
import Lot1 from '../assets/image-lot-1.jpg';
import Lot2 from '../assets/image-lot-2.jpg';
import Lot3 from '../assets/image-lot-3.jpg';
import { useState } from 'react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Lot1, Lot2, Lot3];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="carousel">
      <div className="card-carousel">
        <img
          src={Iconleft}
          alt="left-chevron"
          className="chevron"
          onClick={prevImage}
        />
        <div className="card">
          <div className="image-container">
            <img
              src={images[currentIndex]}
              alt={`lot-${currentIndex + 1}`}
              className="img"
            />
          </div>
        </div>
        <img
          src={IconRight}
          alt="right-chevron"
          className="chevron"
          onClick={nextImage}
        />
      </div>
    </div>
  );
}
