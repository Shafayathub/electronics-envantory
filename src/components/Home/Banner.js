import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';

const Banner = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop>
        <div>
          <img src={banner1} alt="" />
          <p className="legend">Electronic Accessories</p>
        </div>
        <div>
          <img src={banner2} alt="" />
          <p className="legend">Augmented Reality</p>
        </div>
        <div>
          <img src={banner3} alt="" />
          <p className="legend">Micro Chipset</p>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
