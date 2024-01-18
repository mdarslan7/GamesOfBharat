// RotatingCarousel.js
import { useState } from 'react';
import styles from './css/RotatingCarousel.module.css';
import image1 from './images/1.jpeg';
import image2 from './images/2.jpeg';
import image3 from './images/3.jpeg';

const RotatingCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Assuming 3 faces in the carousel
  };

  const rotation = currentSlide * 120;

  return (
    <div className={styles.container}>
      <div
        className={styles.carousel}
        style={{ transform: `rotateY(${rotation}deg)` }}
        onClick={nextSlide}
      >
        {/* Repeat similar blocks for other faces */}
        <div className={styles.carousel__face} style={{ backgroundImage: `url(${image1})` }}>
          <span>Image A</span>
        </div>
        <div className={styles.carousel__face} style={{ backgroundImage: `url(${image2})` }}>
          <span>Image B</span>
        </div>
        <div className={styles.carousel__face} style={{ backgroundImage: `url(${image3})` }}>
          <span>Image C</span>
        </div>
      </div>
    </div>
  );
};

export default RotatingCarousel;
