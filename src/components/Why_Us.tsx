import React from 'react'
import { MdBorderColor } from 'react-icons/md'

const Why_Us = () => {
  return (
    <section className='relative mx-auto'>

        <div className='container bg-white items-center p-10 mx-auto'>

            <div className='mt-2 text-center'>
                <h1 className='text-3xl font-thin'>Why us?</h1>
                <p className='text-gray-500 mt-2'>what makes us stand out from the rest</p>
            </div>

            <div className='mt-8'>
                <ul className='flex flex-col md:flex-row gap-5'>
                    <li className='bg-blue-100 rounded-md'>
                        <MdBorderColor className='mt-5 ml-3'/>
                        <h3 className='text-bold mt-3 ml-3'>Effortless Ordering:</h3>
                        <p className='text-gray-500 mt-3 block ml-3'>
                            Browse through a wide range of options from
                            local eateries, stores and business. With our intuitive
                            interface, placing an order is as easy as pie
                        </p>
                    </li>

                    <li className='bg-blue-100 rounded-md'>
                        <MdBorderColor className='mt-5 ml-3'/>
                        <h3 className='text-bold mt-3 ml-3'>Effortless Ordering:</h3>
                        <p className='text-gray-500 mt-3 block ml-3'>
                            Browse through a wide range of options from
                            local eateries, stores and business. With our intuitive
                            interface, placing an order is as easy as pie
                        </p>
                    </li>

                    <li className='bg-blue-100 rounded-md'>
                        <MdBorderColor className='mt-5 ml-3'/>
                        <h3 className='text-bold mt-3 ml-3'>Effortless Ordering:</h3>
                        <p className='text-gray-500 mt-3 block ml-3'>
                            Browse through a wide range of options from
                            local eateries, stores and business. With our intuitive
                            interface, placing an order is as easy as pie
                        </p>
                    </li>

                    <li className='bg-blue-100 rounded-md'>
                        <MdBorderColor className='mt-5 ml-3'/>
                        <h3 className='text-bold mt-3 ml-3'>Effortless Ordering:</h3>
                        <p className='text-gray-500 mt-3 block ml-3'>
                            Browse through a wide range of options from
                            local eateries, stores and business. With our intuitive
                            interface, placing an order is as easy as pie
                        </p>
                    </li>
                </ul>
                
            </div>

        </div>
    </section>
  )
}

export default Why_Us