// src/components/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Search the products..."
        value={searchTerm}
        onChange={handleChange}
        className="border border-gray-700 bg-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
                  <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-pink-800  border border-gray-700 hover:bg-gray-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-pink-800 dark:focus:ring-pink-900">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>

    </form>
  );
}

export default SearchBar;
