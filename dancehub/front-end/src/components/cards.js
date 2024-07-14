import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sample from '../assets/sample.jpg';

const cardsData = [
  {
    title: "coprate ",
    imageUrl: sample,
    description: "At Empire Dance Kenya, we specialize in bringing the joy of dance and the benefits of fitness to corporate environments. Our corporate dance programs are designed to enhance employee well-being, foster team spirit, and provide exceptional entertainment for your events.",
    link: "#",
  },
  {
    title: "personal",
    imageUrl: sample,
    description: "we believe that dance is for everyone, regardless of experience level. Our personal dance services are designed to cater to individual needs, whether you're a complete beginner or looking to advance to an intermediate level. We offer both private sessions and group classes to help you achieve your dance goals.",
    link: "#",
  },
  {
    title: "community",
    imageUrl: sample,
    description: "Monthly Billing: As a postpaid customer, I use electricity throughout the month and receive a bill at the end of the billing cycle. The bill is based on my actual consumption recorded by the meter.",
    link: "#",
  },
];

const CustomerCards = ({ activeTab }) => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div className={`bg-blue mt-6 gap-8 grid grid-cols-1 lg:grid-cols-3 transition-opacity border-slate-700	 ${activeTab === 1 ? 'opacity-100' : 'opacity-0'}`}>
      {cardsData.map((card, index) => (
        <div key={index} data-aos="flip-left" className="col-span-1 flex flex-col gap-4 group">
          <div
            className="w-full h-52 bg- rounded-xl bg-cover bg-top transition-all duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${card.imageUrl})`, filter: card.siteGrayscale ? 'grayscale(100%)' : 'none' }}
          ></div>
          <div className="border-b border-black"></div>
          <div className="flex flex-1 flex-col gap-1">
            <div className="font text-xl font- text-primary  flex-shrink-0 group-hover:text-">{card.title}</div>
            <div className="text-sm font- leading-7 text-black flex-1">
              <p>{card.description}</p>
            </div>
            <div className="flex mt-2 flex-shrink-0">
              <a href={card.link} className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-primary rounded hover:bg- group py-1.5 px-2.5">
                <span className="w-56 h-48 rounded bg-green absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="text-white w-40 bg-black mt-4 focus:ring-4 focus:outline-none focus:ring-gray-100 font-normal rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center group-hover:text-white hover:bg-gray-400">
                  Learn more
                  <svg className="h-5 w-5 flex-none text-white transform -rotate-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerCards;
