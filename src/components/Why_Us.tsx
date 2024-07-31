import React from 'react'
import { MdBorderColor } from 'react-icons/md'

const Why_Us = () => {
  return (
    <section className='relative mx-auto'>

        <div className='container bg-white items-center p-10 mx-auto'>

            <div className='mt-2 text-center'>
                <h1 className='text-3xl font-thin'>Our Services</h1>
                <p className='text-gray-500 mt-2'>What we offer</p>
            </div>

            <div className='mt-8'>
                <ul className='flex flex-col md:flex-row gap-5'>
                    <li className='bg-blue-100 rounded-md lg:w-1/4 md:w-auto md:h-auto'>
                        <MdBorderColor className='mt-5 ml-2'/>
                        <h3 className='mt-3 ml-2 text-headingColor font-semibold' style={{fontSize:'16px'}}>Same-Day Deliveries:</h3>
                        <p className='text-paragraph mt-3 block ml-3' style={{fontSize:'14px', lineHeight:'25px'}}>
                            We ensure that your packages are delivered within the same day they are 
                            picked up. It's ideal for urgent deliveries where speed is crucial. 
                            Whether it's a business document, a gift, or any essential item. Same-day 
                            delivery guarantees that your package reaches its destination within hours, 
                            providing quick and efficient service.
                        </p>
                    </li>

                    <li className='bg-blue-100 rounded-md lg:w-1/4 md:w-auto md:h-auto'>
                        <MdBorderColor className='mt-5 ml-3'/>
                        <h3 className='mt-3 ml-3 text-headingColor font-semibold' style={{fontSize:'16px'}}>Inter-Estate Deliveries:</h3>
                        <p className='text-paragraph mt-3 block ml-3' style={{fontSize:'14px', lineHeight:'25px'}}>
                            Inter-Estate Deliveries cater to the transportation of packages between different 
                            residential estates in and around Nairobi. This service is perfect for residents 
                            who need to send or receive items from neighboring estates. It provides reliable 
                            and efficient delivery solutions, making it easy to connect with friends, family, 
                            or business contacts across various estates.
                        </p>
                    </li>

                    <li className='bg-blue-100 rounded-md lg:w-1/4 md:w-auto md:h-auto'>
                        <MdBorderColor className='mt-5 ml-3'/>
                        <h3 className='mt-3 ml-3 text-headingColor font-semibold' style={{fontSize:'16px'}}>Corporate Deliveries:</h3>
                        <p className='text-paragraph mt-3 block ml-3' style={{fontSize:'14px', lineHeight:'25px'}}>
                            Tailored for businesses, Corporate Deliveries offer specialized solutions to 
                            ensure that corporate packages are delivered on time and in perfect condition. 
                            It includes transportation of documents, office supplies, 
                            or any business-related items. It's designed to meet the unique needs of businesses, 
                            providing professional and reliable delivery services.
                        </p>
                    </li>

                    <li className='bg-blue-100 rounded-md lg:w-1/4 md:w-auto md:h-auto'>
                        <MdBorderColor className='mt-5 ml-3'/>
                        <h3 className='mt-3 ml-3 text-headingColor font-semibold' style={{fontSize:'16px'}}>Personal Deliveries:</h3>
                        <p className='text-paragraph mt-3 lg:mt-3 md:mt-8 block ml-3' style={{fontSize:'14px', lineHeight:'25px'}}>
                            Personal Deliveries are designed to handle the transport of individual items with 
                            care and attention. Whether it's sending gifts to loved ones, delivering important 
                            documents, or transporting any personal belongings. It provides peace of mind, knowing that your 
                            personal deliveries will be treated with respect and arrive safely at their destination.
                        </p>
                    </li>
                </ul>
                
            </div>

        </div>
        
    </section>
  )
}

export default Why_Us