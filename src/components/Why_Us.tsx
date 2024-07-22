import React from 'react'
import { MdBorderColor } from 'react-icons/md'

const Why_Us = () => {
  return (
    <section className='relative mx-auto'>

        <div className='container bg-white items-center p-10 mx-auto'>

            <div className='mt-2 text-center'>
                <h1 className='text-3xl font-thin'>Why us?</h1>
                <p className='text-gray-500 mt-2'>What makes us stand out from the rest</p>
            </div>

            <div className='mt-8'>
                <ul className='flex flex-col md:flex-row gap-5'>
                    <li className='bg-blue-100 rounded-md lg:w-1/4 md:w-1/4'>
                        <MdBorderColor className='mt-5 ml-3'/>
                        <h3 className='mt-3 ml-3 text-headingColor font-semibold' style={{fontSize:'16px'}}>Speedy Deliveries:</h3>
                        <p className='text-paragraph mt-3 block ml-3' style={{fontSize:'14px'}}>
                            Our advanced logistics network and real-time tracking 
                            systems allow us to deliver your packages swiftly and 
                            reliably. We optimize routes and schedules to minimize 
                            delivery times, ensuring your items reach their destination 
                            as quickly as possible.
                        </p>
                    </li>

                    <li className='bg-blue-100 rounded-md lg:w-1/4 md:w-1/4'>
                        <MdBorderColor className='mt-5 ml-3'/>
                        <h3 className='mt-3 ml-3 text-headingColor font-semibold' style={{fontSize:'16px'}}>Accurate Tracking:</h3>
                        <p className='text-paragraph mt-3 block ml-3' style={{fontSize:'14px'}}>
                            With our state-of-the-art tracking technology, you 
                            can monitor your package every step of the way. 
                            From dispatch to delivery, you’ll receive real-time updates, 
                            so you always know where your shipment is.
                        </p>
                    </li>

                    <li className='bg-blue-100 rounded-md lg:w-1/4 md:w-1/4'>
                        <MdBorderColor className='mt-5 ml-3'/>
                        <h3 className='mt-3 ml-3 text-headingColor font-semibold' style={{fontSize:'16px'}}>Reliability:</h3>
                        <p className='text-paragraph mt-3 block ml-3' style={{fontSize:'14px'}}>
                            We understand the importance of dependable delivery services. 
                            Our dedicated team works tirelessly to ensure that every 
                            package arrives safely and on time. We handle each delivery 
                            with care, providing consistent and reliable service you can trust.
                        </p>
                    </li>

                    <li className='bg-blue-100 rounded-md lg:w-1/4 md:w-1/4'>
                        <MdBorderColor className='mt-5 ml-3'/>
                        <h3 className='mt-3 ml-3 text-headingColor font-semibold' style={{fontSize:'16px'}}>Flexible Solutions:</h3>
                        <p className='text-paragraph mt-3 block ml-3' style={{fontSize:'14px'}}>
                            We offer a variety of delivery options to meet your specific needs. 
                            Whether it’s same-day delivery, next-day service, or scheduled deliveries, 
                            we have the flexibility to accommodate your requirements and exceed your expectations.
                        </p>
                    </li>
                </ul>
                
            </div>

        </div>
    </section>
  )
}

export default Why_Us