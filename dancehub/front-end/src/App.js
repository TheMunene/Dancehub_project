import React, { useState } from 'react';
//image imports
import logo from './assets/logo.png';
import cover from './assets/cover.png';
import sample from './assets/sample.jpg'
//components imports
import Choreographers from './components/team';
import PartnersSection from './components/Partners';
import Footer from './components/Footer';
import CustomerCards from './components/cards';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div style={{ height: '2500px' }}>
        <img className="w-full " src={cover} alt="Navigation Image" />
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl transition-all duration-300" aria-label="Global">
          <div className="lg:flex hidden mx-auto max-w-7xl items-center py-2 rounded-md justify-between px-6 mt-0 px-0">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-16 w-auto" src={logo} alt="Your Company" />
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="/about" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">About Us</a>
              <a href="/class" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Our Services</a>
              <a href="/resources" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Our Classes</a>
              <a href="/events" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Bookings</a>
              <a href="/contact" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Contact Us</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <div className="flex items-center lg:ml-8">
                <div className="ml-4 flow-root lg:ml-8">
                  <button onClick={() => setSearchModalOpen(true)} type="button" className="group -m-2 flex items-center p-2 bg-primary rounded-full">
                    <span className="sr-only">Search</span>
                    <svg className="h-6 w-6 text-yellow" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </nav>
        <div className="absolute top-1/2 left-1/5 transform -translate-x-1/5 -translate-y-1/5 text-left text-white">
           <h1 className="text-4xl font-bold">Empire Dance Kenya</h1>
            <p className="mt-2 text-lg"><span className='text-bold'>Dance</span> is the hidden language of the soul!</p>
    </div>
    <div className="mx-auto max-w-7xl lg:px-0 px-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Video Column */}
        <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-xl mt-20">
          <img src={sample} alt="Video Thumbnail" className="absolute inset-0 w-full rounded-lg h-full object-cover cursor-pointer" />
          <button onClick={() => console.log('Open video modal')} className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 cursor-pointer z-10">
            <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.5692 0.333374C25.8152 0.340374 28.9325 0.370707 32.2458 0.503707L33.4218 0.55504C36.7562 0.711374 40.0882 0.98204 41.7425 1.44171C43.9475 2.06237 45.6788 3.86837 46.2645 6.15971C47.1978 9.79971 47.3145 16.8977 47.3285 18.6174L47.3308 18.972V19.378C47.3145 21.0977 47.1978 28.198 46.2645 31.8357C45.6718 34.134 43.9382 35.9424 41.7425 36.5537C40.0882 37.0134 36.7562 37.284 33.4218 37.4404L32.2458 37.494C28.9325 37.6247 25.8152 37.6574 24.5692 37.662L24.0208 37.6644H23.4258C20.7892 37.648 9.76184 37.529 6.2525 36.5537C4.04984 35.933 2.31617 34.127 1.7305 31.8357C0.797171 28.1957 0.680504 21.0977 0.666504 19.378V18.6174C0.680504 16.8977 0.797171 9.79737 1.7305 6.15971C2.32317 3.86137 4.05684 2.05304 6.25484 1.44404C9.76184 0.466374 20.7915 0.347374 23.4282 0.333374H24.5692ZM19.3308 10.8334V27.1667L33.3308 19L19.3308 10.8334Z" fill="#FAFAFA"></path>
            </svg>
          </button>
        </div>

        {/* Text Column */}
        <div className="flex flex-col justify-center mt-20">
          <h2 className="text-4xl font-medium mb-4 dark:text-black">Why Empire Dance Kenya?</h2>
          <div className="mb-4 text-base text-black">
          Dance traverses generational, economic, cultural, and social spectra and is an obvious tool to achieve consensus and connectivity across all divides. Having recognized this truth, Empire Dance Kenya understands and works to offer solutions to the challenges presenting in the diverse spectra through dance; the world of dance is a peaceful one.
          </div>
          <a href="#" className="text-white w-40 bg-black mt-4 focus:ring-4 focus:outline-none focus:ring-gray-100 font-normal rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center hover:bg-gray-400">
            <span className="mr-2">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </div>
      </div>
     </div>

        {/* section text what we do*/}
     <div className='mt-8'>
      <p className='text-4xl font-medium mb-4 dark:text-black text-center	'>What We Do</p>
     </div>
       {/* 3 cards section*/}
     <CustomerCards activeTab={activeTab} />

     <div className="border-b border-black mt-8"></div>


       {/* our classes section*/}
       <div style={{ height: '380px' }} className="mx-auto max-w-7xl lg:px-0 px-10 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/** our classes photo column */}
          <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-xl mt-20">
          <img
            src={sample} 
            alt="Photo Thumbnail"
            className="absolute inset-0 w-full rounded-lg h-full object-cover cursor-pointer"
          />
          </div>
          {/** our classes text column */}
          <div className="flex flex-col justify-center mt-20">
          <h2 className="text-4xl font-medium mb-4 dark:text-white">Our Classes</h2>
          <div className="mb-4 text-base text-white">
          Dance traverses generational, economic, cultural, and social spectra and is an obvious tool to achieve consensus and connectivity across all divides. Having recognized this truth, Empire Dance Kenya understands and works to offer solutions to the challenges presenting in the diverse spectra through dance; the world of dance is a peaceful one.
          </div>
          <a href="#" className="text-black w-40 bg-white mt-4 focus:ring-4 focus:outline-none focus:ring-grey-100 font-normal rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center hover:bg-gray-400">
            <span className="mr-2">View Plans</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </div>
        </div>
       </div>

           {/* our studio*/}
        <div style={{ height: '380px' }} className="mx-auto max-w-7xl lg:px-0 mt-5 px-10 bg-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/**Text column */}
          <div className="flex flex-col justify-center mt-20 order-last md:order-first ml-1">
            <h2 className="text-4xl font-medium mb-4 dark:text-black">Our Classes</h2>
            <div className="mb-4 text-base text-black">
              Dance traverses generational, economic, cultural, and social spectra and is an obvious tool to achieve consensus and connectivity across all divides. Having recognized this truth, Empire Dance Kenya understands and works to offer solutions to the challenges presenting in the diverse spectra through dance; the world of dance is a peaceful one.
            </div>
            <a href="#" className="text-white w-40 bg-black mt-4 focus:ring-4 focus:outline-none focus:ring-grey-100 font-normal rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center ml-1 hover:bg-gray-400">
              <span className="mr-2">Book Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
              </svg>
            </a>
          </div>

          {/**Image column */}
          <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-xl mt-20 md:mt-0">
            <img
              src={sample} 
              alt="Photo Thumbnail"
              className="absolute inset-0 w-full rounded-lg h-full object-cover cursor-pointer"
            />
          </div>
          </div>
        </div>          

         {/* our Choreographers section*/}
         <Choreographers />

         {/* our Choreographers section*/}
         <PartnersSection />   
         <div className="border	border-gray-400 mt-8"></div>
          {/*Footer Section*/}
         <Footer />
   </div>
  );
  }

export default App;
