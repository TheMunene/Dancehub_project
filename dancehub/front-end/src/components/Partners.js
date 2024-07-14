import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sample from '../assets/sample.jpg'

const partners = [
  {
    img:  sample,
    alt: ''
  },
  {
    img: sample,
    alt: ''
  },
  {
    img: sample,
    alt: ''
  },
  {
    img: sample,
    alt: ''
  },
  {
    img: sample,
    alt: ''
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const PartnersSection = () => {
  return (
    <div style={{ height: '300px' }} className="mx-auto max-w-6xl lg:px-0 px-10  bg-white pb-10">
      <div className="flex flex-wrap justify-start items-center -left-20 -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <h2 className="text-3xl lg:text-4xl my-6 font-bold lg:py-0">
            Our Partners
          </h2>
        </div>
      </div>

      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="item">
            <div className="border-2 rounded-lg border-gray-300 bg-white p-4 text-center hover:border-black">
              <img src={partner.img} className="h-28 object-contain mx-auto" alt={partner.alt} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSection;
