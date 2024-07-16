"use client"

import About from "@/components/About";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Talk from "@/components/Talk";
import Why_Us from "@/components/Why_Us";
import Work from "@/components/Work";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Home() {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [showscroll, setShowscroll] = useState(false)

  const toggleMenu = () => {
    setIsMenuVisible(true);
  }

  const hideMenu = () => {
    setIsMenuVisible(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowscroll(scrollY >= 100)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  };


  return (
    <main>
      <Navbar isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} hideMenu = {hideMenu}/>
      
      <div id="home">
        <HomeSection />
      </div>

      <div id="why">
        <Why_Us />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="work">
        <Work />
      </div>

      <div id="pricing">
        <Pricing />
      </div>

      <div id="talk">
        <Talk />
      </div>

      <div id="faq">
        <FaqSection />
      </div>

      <div id="contact">
        <Footer />
      </div>

      {showscroll && (
        <div className="fixed right-4 bottom-12 shadow-sm inline-block py-10 z-50 hover:-translate-y-1 ease-in duration-200">

            <div className='mainbox'>

            <div className='parent'>

                <div className='child'>
                    
                    <div className='subchild'>
                        <a href='tel:+254 712456890'>
                            <FaPhoneAlt id='call'/>
                        </a>
                    </div>

                </div>

            </div>

            </div>

        </div>
      )}
      


      {showscroll && (
        <div className="fixed right-4 bottom-4 z-50">
            <a href="#" 
            onClick={scrollToTop}
            className="bg-yellow-500 
              shadow-sm inline-block px-4 py-2 rounded-full text-lg text-black 
              hover:-translate-y-1 ease-in duration-200">

              <span className="mr-2">Back To Top</span>  

            </a>

        </div>
      )}


    </main>
  );
}
