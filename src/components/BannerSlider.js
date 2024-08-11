import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, 
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="banner.jpg" alt="Banner 1" className="w-full h-[500px] object-cover rounded-lg" />
      </div>
      <div>
        <img src="banner2.jpg" alt="Banner 2" className="w-full h-[500px] object-cover rounded-lg" />
      </div>
      <div>
        <img src="banner3.jpg" alt="Banner 3" className="w-full h-[500px] object-cover rounded-lg" />
      </div>
      
    </Slider>
  );
};

export default BannerSlider;
