import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheck } from 'react-icons/fa';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation(); // Destructure i18n from useTranslation
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'ru', name: 'RU' },
    { code: 'uz', name: 'UZ' },
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

  const handleLanguageSelect = (code) => {
    i18n.changeLanguage(code); // Change the language
    setIsOpen(false); // Close the dropdown
  };

  // Safely get the current language or default to 'ru'
  const currentLanguage = i18n.language || 'ru';

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
        {currentLanguage.toUpperCase()} <span className="text-secondary ml-2">▼</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-16 bg-primary text-white rounded shadow-lg"
          role="menu"
        >
          {languages.map(({ code, name }) => (
            <div
              key={code}
              onClick={(e) => {
                e.stopPropagation();
                handleLanguageSelect(code);
              }}
              className="font-serif p-2 hover:bg-gray-900 hover:text-secondary duration-300 ease-linear cursor-pointer flex items-center justify-between"
              role="menuitem"
            >
              <span>{name}</span>
              {currentLanguage === code && (
                <FaCheck className="ml-2 text-secondary" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;