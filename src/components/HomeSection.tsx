import React from 'react'
import { FaPlay } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { url } from 'inspector'

const HomeSection = () => {
  return (
    <section className='relative bg-backgroundBlue mx-auto'>

    <div className='container flex flex-col md:flex-row items-center p-10 mx-auto gap-2'>
        
        <div className='rounded-md flex-1 md:w-1/2 mt-10 md:mx-auto p-5'>
            <div className='mb-5'>
                <div className='mt-10'>
                    <span className='block text-4xl' style={{fontSize:48, lineHeight:'45px'}}>Swift, Reliable Deliveries Across Nairobi CBD and Beyond</span> 
                </div>
            </div>

            <div>
                <p className='block text-paragraph' style={{fontSize:20}}>
                    Discover the joy of hassle-free delivery with OneTime Delivery. Call us today and experience convenience like never before.
                </p>
            </div>

            <div className='mt-10 mb-10 flex flex-row gap-8'>
                <a href='tel:+254 712456797'>
                    <button className='call_color w-32 h-12 md:w-32 lg:w-48 rounded-md text-center justify-center' >Call Us Now</button>
                </a>
                <button className='w-32 h-12 md:w-36 lg:w-48 border border-outline rounded-sm flex items-center justify-center md:gap-3'><FaPlay/> How we work</button>
            </div>

        </div>
        
        {/* rider photo */}
        <div className='flex-1 mt-12 md:items-center md:w-1/2 flex justify-center relative'>
            <img className='md:max-w-x' src='/bike-remove.png'/>
        </div>

    </div>
</section>
  )
}

export default HomeSection




{/* <img className='md:max-w-xs border-2 border-green-500 rounded-full' src='https://img.freepik.com/free-vector/delivery-service-with-mask-illustrated-design_23-2148510130.jpg?t=st=1718542117~exp=1718545717~hmac=6046fef6701f698c256a0df31bc0cedd6057a67bf884e755af42bde9a997b7f9&w=826'/> */}

