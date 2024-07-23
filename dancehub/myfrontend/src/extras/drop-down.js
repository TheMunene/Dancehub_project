import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import logo from './logo.png';


const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div className={classNames({ 'top-0 left-0 right-0  shadow-2xl bg-grey': isSticky })} style={{ height: '2000px' }}>
      <nav className={classNames('lg:flex hidden mx-auto max-w-7xl items-center bg-white py-2 rounded-md justify-between px-6', { 'mt-0 px-0': isSticky, 'mt-6 px-0 shadow': !isSticky })} aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-16 w-auto" src={logo} alt="Your Company" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="h" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">About</a>
          <a href="h" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Class</a>
          <a href="h" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Articles & Resources</a>
          <a href="h" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Events</a>
          <a href="h" className="text-base dark:text-black hover:underline hover:underline-offset-4 font-normal text-black">Contact Us</a>
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
      </nav>
    </div>
  );
  };

export default Navbar;
