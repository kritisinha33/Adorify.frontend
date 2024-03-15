import React, { useState } from 'react'
import DropdownButton from './DropdownButton'
import SearchBar from './Searchbar';
import logo from "../assets/logo.png"
import loginlogo from "../assets/loginlogo.jpg"
 

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
 const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    
  };

  
  return (
    <div>
    <nav class="bg-white dark:bg-pink-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-8" alt="Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Adorify</span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-5 font-medium border border-pink-100 rounded-lg bg-pink-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-2 md:border-0 md:bg-white dark:bg-pink-800 md:dark:bg-pink-900 dark:border-pink-700">
              <li>
                <a href="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
              </li>
              <li>
                <a href="shop" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Product</a>
              </li>
              <li>
                <a href="About" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="Contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
              <li>
                <a href="Login" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <img src={loginlogo} alt="Logo" className='h-10 w-10'  />
                </a>
              </li>
            </ul>
           
           

          </div>
          <form>
          {/* {openCart ? <Cart setOpenCart={setOpenCart} /> : null} */}
          <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>

         <DropdownButton/>
              <div class="relative w-full">
              <div className="max-w-md w-full">
        <SearchBar onChange={handleSearchChange} />
        {/* Render search results or other content here */}
      </div>
              </div>
            </div>
          </form>

        </div>
      </nav>


    </div>
  )
}
