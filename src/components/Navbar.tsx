"use client"

import React from 'react'
import { FaX, FaBars } from 'react-icons/fa6'
import { IoIosSearch } from 'react-icons/io'


interface NavbarProps{
    isMenuVisible:boolean;
    toggleMenu: () =>void;
}

const Navbar: React.FC<NavbarProps> = ({isMenuVisible, toggleMenu}) => {

    const scrollToElement = (id:string) => {
        const element = document.getElementById(id)

        if(element){
            element.scrollIntoView({behavior:'smooth'})
        }
    }

  return (
    <header className='relative'>

        <nav className='container relative h-10 flex items-center md:justify-between p-10 mx-auto lg:gap-64'>

            <div className='bg-slate-50'>
                <a href='#' className='text-2xl font-bold'>
                    Onetime Del.
                </a>
            </div>

            {/* absolute top-16 md:top-0 w-full bg-white md:bg-transparent z-10 */}

            <div className={`${isMenuVisible ? 'block' : 'hidden'} z-10 md:z-0 md:block mt-40 md:mt-0 bg-white rounded-md`}>

                <ul className='flex flex-col p-4 md:flex-row text-center md:items-start gap-3 md:gap-3 lg:gap-7 cursor-pointer mt-3'>
                    <li className='navbar_link'>
                        <a href='#home' onClick={(e) => {e.preventDefault(); toggleMenu(); scrollToElement('home')}}>Home</a>
                    </li>
                    <li className='navbar_link'>
                        <a href='#why' onClick={(e) => {e.preventDefault(); toggleMenu(); scrollToElement('why')}}>Why us</a>
                    </li>
                    <li className='navbar_link'>
                        <a href='#about' onClick={(e) => {e.preventDefault(); toggleMenu(); scrollToElement('about')}}>About</a>
                    </li>
                    <li className='navbar_link'>
                        <a href='#work' onClick={(e) => {e.preventDefault(); toggleMenu(); scrollToElement('work')}}>How we work</a>
                    </li>
                    <li className='navbar_link'>
                        <a href='#faq' onClick={(e) => {e.preventDefault(); toggleMenu(); scrollToElement('faq')}}>FAQ</a>
                    </li>
                    <li className='navbar_link'>
                        <a href='#contact' onClick={(e) => {e.preventDefault(); toggleMenu(); scrollToElement('contact')}}>Contact</a>
                    </li>
                </ul>
            </div>
            
            {/* <div className='hidden md:flex items-center rounded-md ml-5'>
                <input placeholder='search' className='outline-none w-1/2'/>
                <IoIosSearch className='text-3xl'/>
            </div> */}

            <div className='absolute right-20'>
                <FaBars onClick={toggleMenu} className='cursor-pointer md:hidden text-2xl'/>

            </div>
        </nav>
    </header>
  )
}

export default Navbar