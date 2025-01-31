import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import Categories from '../assets/categories.svg';
import Search from '../assets/search.svg';
import Login from '../assets/login.svg';
import LanguageSelector from './LanguageSelector';
import CurrencyDropdown from './CurrencySelector';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false); // State for mobile menu toggle
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleNav = () => {
    setNav(!nav);
  };

  const handleCurrencyChange = (code) => {
    setSelectedCurrency(code);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1360px] px-4 mx-auto text-white">
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
      <img src={Logo} alt="logo" className="h-10" />
        <li><a href="#" className="hover:text-secondary duration-300 ease-linear">Products</a></li>
        <li><a href="#" className="hover:text-secondary duration-300 ease-linear">Services</a></li>
        <li><a href="#" className="hover:text-secondary duration-300 ease-linear">Configurator</a></li>
        <li><a href="#" className="hover:text-secondary duration-300 ease-linear">About Brand</a></li>
      </ul>

      {/* Desktop Icons and Dropdowns */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="hover:text-secondary hover:border-secondary duration-300 ease-linear border border-white py-1 px-2">Contact Us</a>
        <LanguageSelector />
        <CurrencyDropdown
          selectedCurrency={selectedCurrency}
          onCurrencyChange={handleCurrencyChange}
        />
        <img src={Categories} alt="icon" className="hover:text-secondary duration-300 ease-linear" />
        <img src={Search} alt="icon" />
        <img src={Login} alt="icon" />
      </div>

      {/* Mobile Icons and Menu Toggle */}
      <div className="flex justify-between items-center space-x-8">
        <img src={Logo} alt="logo" className="h-10 md:hidden" />
        <div className="md:hidden cursor-pointer flex items-center space-x-5">
          <img src={Categories} alt="icon" className="hover:text-secondary duration-300 ease-linear" />
          <img src={Search} alt="icon" />
        </div>

        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
        <div
          className={
            nav
              ? 'fixed right-0 top-[50px] w-[60%] h-full bg-darkBlue ease-in-out duration-500 p-4'
              : 'fixed right-[-100%]'
          }
        >
          {/* Mobile Menu Content */}

          <ul className="flex flex-col space-y-4 mt-8">
            <li><a href="#" className="hover:text-secondary duration-300 ease-linear">Products</a></li>
            <li><a href="#" className="hover:text-secondary duration-300 ease-linear">Services</a></li>
            <li><a href="#" className="hover:text-secondary duration-300 ease-linear">Configurator</a></li>
            <li><a href="#" className="hover:text-secondary duration-300 ease-linear">About Brand</a></li>
          </ul>

          <div className="flex flex-row space-x-4 mt-4">
            <LanguageSelector />
            <CurrencyDropdown
              selectedCurrency={selectedCurrency}
              onCurrencyChange={handleCurrencyChange}
            />
          </div>
          <a href="#" className="hover:text-secondary hover:border-secondary duration-300 ease-linear underline">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;