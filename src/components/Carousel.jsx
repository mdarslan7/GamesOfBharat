import { useEffect, useState } from 'react';
import './css/Carousel.scss';

const App = () => {
  const imagesThree = [
    'https://source.unsplash.com/EbuaKnSm8Zw/800x533',
    'https://source.unsplash.com/kG38b7CFzTY/800x533',
    'https://source.unsplash.com/nvzvOPQW0gc/800x533',
  ];

  const imagesFour = [
    'https://source.unsplash.com/kG38b7CFzTY/800x533',
    'https://source.unsplash.com/EbuaKnSm8Zw/800x533',
    'https://source.unsplash.com/nvzvOPQW0gc/800x533',
    'https://source.unsplash.com/mCg0ZgD7BgU/800x533',
  ];

  const imagesEight = [
    'https://source.unsplash.com/nvzvOPQW0gc/800x533',
    'https://source.unsplash.com/EbuaKnSm8Zw/800x533',
    'https://source.unsplash.com/kG38b7CFzTY/800x533',
    'https://source.unsplash.com/mCg0ZgD7BgU/800x533',
    'https://source.unsplash.com/VkwRmha1_tI/800x533',
    'https://source.unsplash.com/1FWICvPQdkY/800x533',
    'https://source.unsplash.com/bjhrzvzZeq4/800x533',
    'https://source.unsplash.com/7mUXaBBrhoA/800x533',
  ];

  const imagesEightGap20 = [
    'https://source.unsplash.com/mCg0ZgD7BgU/800x533',
    'https://source.unsplash.com/EbuaKnSm8Zw/800x533',
    'https://source.unsplash.com/kG38b7CFzTY/800x533',
    'https://source.unsplash.com/nvzvOPQW0gc/800x533',
    'https://source.unsplash.com/VkwRmha1_tI/800x533',
    'https://source.unsplash.com/1FWICvPQdkY/800x533',
    'https://source.unsplash.com/bjhrzvzZeq4/800x533',
    'https://source.unsplash.com/7mUXaBBrhoA/800x533',
  ];

  const imagesEightGap80 = [
    'https://source.unsplash.com/VkwRmha1_tI/800x533',
    'https://source.unsplash.com/EbuaKnSm8Zw/800x533',
    'https://source.unsplash.com/kG38b7CFzTY/800x533',
    'https://source.unsplash.com/nvzvOPQW0gc/800x533',
    'https://source.unsplash.com/mCg0ZgD7BgU/800x533',
    'https://source.unsplash.com/1FWICvPQdkY/800x533',
    'https://source.unsplash.com/bjhrzvzZeq4/800x533',
    'https://source.unsplash.com/7mUXaBBrhoA/800x533',
  ];

  const imagesHiddenBackfaces = [
    'https://source.unsplash.com/bjhrzvzZeq4/800x533',
    'https://source.unsplash.com/EbuaKnSm8Zw/800x533',
    'https://source.unsplash.com/kG38b7CFzTY/800x533',
    'https://source.unsplash.com/nvzvOPQW0gc/800x533',
    'https://source.unsplash.com/mCg0ZgD7BgU/800x533',
    'https://source.unsplash.com/VkwRmha1_tI/800x533',
    'https://source.unsplash.com/1FWICvPQdkY/800x533',
    'https://source.unsplash.com/7mUXaBBrhoA/800x533',
  ];

  return (
    <div>
    <h1>3D Rotating Carousel Examples</h1>

    <h2>Three images</h2>
    <Carousel images={imagesThree} gap={0} bfc={false} />

    <h2>Four images</h2>
    <Carousel images={imagesFour} gap={0} bfc={false} />

    <h2>Eight images</h2>
    <Carousel images={imagesEight} gap={0} bfc={false} />

    <h2>Eight images, with 20px gap</h2>
    <Carousel images={imagesEightGap20} gap={20} bfc={false} />

    <h2>Eight images, with 80px gap</h2>
    <Carousel images={imagesEightGap80} gap={80} bfc={false} />

    <h2>Hidden backfaces</h2>
    <Carousel images={imagesHiddenBackfaces} gap={20} bfc={true} />
  </div>
  );
};

const Carousel = ({ images, gap, bfc }) => {
  const [theta, setTheta] = useState(0);
  const [currImage, setCurrImage] = useState(0);

  useEffect(() => {``
    const figure = document.querySelector('.carousel figure');
    const nav = document.querySelectorAll('.carousel .nav button');
    const n = images.length;

    const thetaValue = (2 * Math.PI) / n;
    setTheta(thetaValue);

    function setupCarousel(s) {
      const apothem = s / (2 * Math.tan(Math.PI / n));

      figure.style.transformOrigin = `50% 50% ${-apothem}px`;

      images.forEach((image, i) => {
        image.style.padding = `${gap}px`;
        image.style.transformOrigin = `50% 50% ${-apothem}px`;
        image.style.transform = `rotateY(${i * theta}rad)`;
        if (bfc) image.style.backfaceVisibility = 'hidden';
      });

      rotateCarousel(currImage);
    }

    function setupNavigation() {
      nav.forEach(button => {
        button.addEventListener('click', onClick, true);
      });

      function onClick(e) {
        e.stopPropagation();

        const t = e.target;
        if (t.classList.contains('next')) {
          setCurrImage(currImage + 1);
        } else {
          setCurrImage(currImage - 1);
        }
      }
    }

    function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }

    setupCarousel(parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener('resize', () => {
      setupCarousel(parseFloat(getComputedStyle(images[0]).width));
    });

    setupNavigation();

    return () => {
      window.removeEventListener('resize', () => {
        setupCarousel(parseFloat(getComputedStyle(images[0]).width));
      });
    };
  }, [images, gap, bfc, currImage, theta]);

  return (
    <div className="carousel">
      <figure>
        {images.map((src, index) => (
          <img key={index} src={src} alt="" />
        ))}
      </figure>
      <nav>
        <button className="nav prev">Prev</button>
        <button className="nav next">Next</button>
      </nav>
    </div>
  );
};

export default App;
