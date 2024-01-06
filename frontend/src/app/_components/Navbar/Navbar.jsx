"use client";

import Image from "next/image";
import { useState } from 'react';


const Navbar = (props) => {
   
  let { contactBtnClass, logo, alt } = props
  
  const [isOpen, setIsOpen] = useState(false);

  if (!contactBtnClass || !logo) {
    return (
        <h1 className="font-bold text-4xl text-red-600">One of props missing</h1>
    )
  }


  return (
    <>
        <nav className="bg-transparent border-gray-200 py-2.5 z-10 relative">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="/" className="flex items-center">
                    <Image src={logo} className="lg:h-10 h-7 w-fit" alt={alt} />
                </a>
                <div className="flex items-center lg:order-2">
                    <div className="hidden mt-2 mr-4 sm:inline-block">
                        <span></span>
                    </div>

                    <a href="contact"
                        className={"text-black bg-white font-extrabold rounded-full text-sm border-4 uppercase px-4 lg:px-10 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 " + contactBtnClass }>
                            Contact
                    </a>
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden"
                        aria-controls="mobile-menu-2" aria-expanded="true"
                        onClick={() => {setIsOpen(!isOpen); console.log(isOpen)}}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className={"items-center justify-between w-full lg:flex lg:w-auto lg:order-1 " + (isOpen ? 'show' : 'hidden')}  id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0">
                        <li>
                            <a href="/"
                                className="block py-2 pl-3 pr-4 text-black font-bold border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0"
                                aria-current="page">Accueil</a>
                        </li>
                        <li>
                            <a href="/mechanique"
                                className="block py-2 pl-3 pr-4 text-black font-bold border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0">Mécanique</a>
                        </li>
                        <li>
                            <a href="/wash"
                                className="block py-2 pl-3 pr-4 text-black font-bold border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0">Wash</a>
                        </li>
                        <li>
                            <a href="/achat-depot-revente"
                                className="block py-2 pl-3 pr-4 text-black font-bold border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0">Achat Dépôt Revente</a>
                        </li>
                        <li>
                            <a href="/covering-detailing"
                                className="block py-2 pl-3 pr-4 text-black font-bold border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0">Covering</a>
                        </li>
                        <li>
                            <a href="/service"
                                className="block py-2 pl-3 pr-4 text-black font-bold border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0">Services</a>
                        </li>
                        <li>
                            <a href="/promo"
                                className="block py-2 pl-3 pr-4 text-black font-bold border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0">Promo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;