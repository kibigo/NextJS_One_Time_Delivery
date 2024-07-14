import React from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io5'



const Footer = () => {

    const scrollToElement = (id:string) => {
        const element = document.getElementById(id)

        if(element){
            element.scrollIntoView({behavior:'smooth'})
        }
    }
  return (
    <section className='relative bg-blue-100 mx-auto py-6'>

            <div className='container grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mx-auto p-2 gap-5 md:gap-0'>

                <div>
                    <span className='block font-bold text-2xl'>One time</span>
                    <span className='block font-bold text-2xl'>deliveries</span>

                </div>

                <div className='flex flex-col'>
                    <h2 className='font-bold'>About</h2>

                    <ul className='flex flex-col gap-2 cursor-pointer mt-2'>
                        <li>
                            <a href='#home' onClick={(e) => {e.preventDefault(); scrollToElement('home')}}>Home</a>
                        </li>

                        <li>
                            <a href='#about' onClick={(e) => {e.preventDefault(); scrollToElement('about')}}>About</a>
                        </li>
                        <li>
                            <a href='#work' onClick={(e) => {e.preventDefault(); scrollToElement('work')}}>How We Work</a>
                        </li>

                        <li>
                            <a href='#contact' onClick={(e) => {e.preventDefault(); scrollToElement('contact')}}>Contact</a>
                        </li>
                    </ul>
                </div>


                <div className='flex flex-col md:mt-0'>
                    <h2 className='font-bold'>Support</h2>

                    <ul className='flex flex-col gap-2 cursor-pointer mt-2'>
                        <li>
                            <a>Feedback</a>
                        </li>
                        {/* <li>
                            <a>Account</a>
                        </li> */}
                        <li>
                            <a href='tel:+254712456897'>Support Center</a>
                        </li>
                        <li>
                            <a href='tel:+254712456897'>Call Us Now</a>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col mt-5 md:mt-0'>
                    <h2 className='font-bold'>Get in touch</h2>

                    <p className='mt-4'>sales@onetimedelivery.com</p>

                    <ul className='flex flex-row gap-8 cursor-pointer mt-4'>
                        <li>
                            <a>
                                <IoLogoWhatsapp className='text-green-500 text-2xl'/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaInstagram className='text-red-500 text-2xl'/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaFacebook className='text-blue-500 text-2xl'/>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
  )
}

export default Footer