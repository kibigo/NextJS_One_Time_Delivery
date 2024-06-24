import React from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io5'

const Footer = () => {
  return (
    <section className='relative bg-blue-100 mx-auto py-10'>

            <div className='container grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 mx-auto p-10 gap-5 md:gap-0'>

                <div>
                    <span className='block font-bold text-2xl'>One time</span>
                    <span className='block font-bold text-2xl'>deliveries</span>

                </div>

                <div className='flex flex-col'>
                    <h2 className='font-bold'>About</h2>

                    <ul className='flex flex-col gap-2 cursor-pointer mt-2'>
                        <li>
                            <a>Home</a>
                        </li>

                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>How we work</a>
                        </li>

                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col'>
                    <h2 className='font-bold'>Company</h2>

                    <ul className='flex flex-col gap-2 cursor-pointer mt-2'>
                        <li>
                            <a>The Team</a>
                        </li>
                        <li>
                            <a>Partner with us</a>
                        </li>
                        <li>
                            <a>FAQ</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col mt-5 md:mt-0'>
                    <h2 className='font-bold'>Support</h2>

                    <ul className='flex flex-col gap-2 cursor-pointer mt-2'>
                        <li>
                            <a>Feedback</a>
                        </li>
                        <li>
                            <a>Account</a>
                        </li>
                        <li>
                            <a>Support Center</a>
                        </li>
                        <li>
                            <a>Contact us</a>
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