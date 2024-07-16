"use client"

import React from 'react'
import { FaX, FaBars } from 'react-icons/fa6'
import { IoIosSearch } from 'react-icons/io'


interface NavbarProps{
    isMenuVisible:boolean;
    toggleMenu: () =>void;
    hideMenu: ()=>void;
}

const Navbar: React.FC<NavbarProps> = ({isMenuVisible, toggleMenu, hideMenu}) => {

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


            <div className={`${isMenuVisible ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} fixed top-0 md:-top-2 left-0 w-full h-full transition-transform bg-white duration-300 md:block md:relative md:w-auto md:h-auto md:bg-white md:mt-0 md:rounded-md z-10`}>

                <ul className='flex flex-col p-4 md:flex-row text-center md:items-start gap-10 md:gap-4 lg:gap-7 cursor-pointer lg:mt-3 mt-44'>
                    <li className='navbar_link'>
                        <a href='#home' onClick={(e) => {e.preventDefault(); hideMenu(); scrollToElement('home')}}>Home</a>
                    </li>

                    <li className='navbar_link'>
                        <a href='#why' onClick={(e) => {e.preventDefault(); hideMenu(); scrollToElement('why')}}>Why us</a>
                    </li>

                    <li className='navbar_link'>
                        <a href='#about' onClick={(e) => {e.preventDefault(); hideMenu(); scrollToElement('about')}}>About</a>
                    </li>

                    <li className='navbar_link'>
                        <a href='#work' onClick={(e) => {e.preventDefault(); hideMenu(); scrollToElement('work')}}>How we work</a>
                    </li>

                    <li className='navbar_link'>
                        <a href='#pricing' onClick={(e) => {e.preventDefault(); hideMenu(); scrollToElement('pricing')}}>Pricing</a>
                    </li>

                    <li className='navbar_link'>
                        <a href='#faq' onClick={(e) => {e.preventDefault(); hideMenu(); scrollToElement('faq')}}>FAQ</a>
                    </li>

                    <li className='navbar_link'>
                        <a href='#contact' onClick={(e) => {e.preventDefault(); hideMenu(); scrollToElement('contact')}}>Contact</a>
                    </li>
                </ul>
            </div>
            

            <div className='absolute top-5 right-5 z-20'>
                {isMenuVisible ? <FaX onClick={hideMenu} className='cursor-pointer md:hidden text-2xl fixed right-10 top-10' /> : <FaBars onClick={toggleMenu} className='cursor-pointer md:hidden text-2xl'/>}
            </div>
        </nav>
    </header>
  )
}

export default Navbar









//className={`${isMenuVisible ? 'block fixed top-0 left-0 w-full h-full bg-blue-300 translate-x-0' : 'hidden'} z-10 md:z-0 md:block md:mt-0 bg-white rounded-md`}