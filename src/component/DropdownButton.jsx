// DropdownButton.js
import React, { useState } from 'react';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-pink-800 shadow-sm bg-pink-800 px-4 py-2 text-sm font-medium text-white hover:bg-pink-900 focus:outline-none focus:ring-1 focus:ring-pink-900 "
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          Category
          {/* Heroicon name: chevron-down */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12.586l-4.293-4.293a1 1 0 011.414-1.414L10 10.758l3.879-3.879a1 1 0 111.414 1.414L10 12.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {/* Dropdown items */}
            <a
              href="#"
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Gifts
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Perfumes
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Softtoys
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Electronics
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Make-ups
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
