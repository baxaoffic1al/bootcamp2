import React, { useState, useEffect, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';

const CurrencyDropdown = ({ selectedCurrency, onCurrencyChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currencies = [
    { code: 'USD', name: 'USD' },
    { code: 'UZS', name: 'UZS' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    onCurrencyChange(code); // Notify parent component of the change
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center hover:text-secondary duration-300 ease-linear font-serif"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedCurrency} <span className="text-secondary ml-2">▼</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-16 bg-primary text-white rounded shadow-lg"
          role="menu"
        >
          {currencies.map(({ code, name }) => (
            <div
              key={code}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(code);
              }}
              className="p-2 font-serif hover:bg-gray-900 hover:text-secondary duration-300 ease-linear cursor-pointer flex items-center justify-between"
              role="menuitem"
            >
              <span>{name}</span>
              {selectedCurrency === code && (
                <FaCheck className="ml-2 text-secondary" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;