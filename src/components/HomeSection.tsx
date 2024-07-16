import React from 'react'
import { FaPlay } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'

const HomeSection = () => {
  return (
    <section className='relative bg-backgroundBlue mx-auto'>

    <div className='container flex flex-col md:flex-row items-center p-10 mx-auto gap-2'>
        
        <div className='bg-white rounded-md flex-1 md:w-1/2 mt-10 md:mx-auto p-5'>
            <div className='mb-5'>
                <div className='mt-10'>
                    <span className='block text-4xl'>Your Gateway to</span> 
                    <span className='block text-4xl'>Convenience!</span>
                </div>
            </div>

            <div>
                <p className='block text-gray-500'>Discover the joy of hassle-free shopping and delivery with Onetime</p>
                <p className='block text-gray-500'>deliveries call us today and experice convenience like never</p>
                <p className='block text-gray-500'>before</p>
            </div>

            <div className='flex flex-row items-center'>

                <div className='mt-10 mb-10 flex flex-row gap-10'>
                    <a className='call_color w-24 rounded-sm text-center' href='tel:+254 712456797'>Call Us Now</a>
                    <button className='w-40 border border-sky-200 rounded-sm flex items-center justify-center gap-3'><FaPlay/> How we work</button>
                </div>
            </div>
        </div>
        
        {/* rider photo */}
        <div className='flex-1 mt-12 md:items-center md:w-1/2 flex justify-center relative'>
            <img className='md:max-w-xs border-2 border-green-500 rounded-full' src='https://img.freepik.com/free-vector/delivery-service-with-mask-illustrated-design_23-2148510130.jpg?t=st=1718542117~exp=1718545717~hmac=6046fef6701f698c256a0df31bc0cedd6057a67bf884e755af42bde9a997b7f9&w=826'/>
        </div>

    </div>
</section>
  )
}

export default HomeSection






