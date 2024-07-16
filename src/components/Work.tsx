import React from 'react'

const Work = () => {
  return (
    <section className='bg-white py-10 p-28'>

        <div className='text-center text-3xl mt-2 font-thin'>
            <h1>How we work</h1>
        </div>

        <div className='container grid grid-cols-1 lg:grid-cols-3 lg:gap-40'>

            <div className='text-center flex flex-col items-center gap-3 justify-center'>

                <div className='mt-5'>
                    <img className='h-32 w-32 md:h-28 lg:w-28 md:w-28 rounded-full' src='/telephone_.jpg'/>
                </div>

                <div>
                    <div>
                        <h1 className='font-bold'>01</h1>
                    </div>
                    <h2 className='font-bold'>Reach out</h2>
                    <p className='text-gray-600 block'>Talk to us on what</p>
                    <p className='text-gray-600 block'>you want delivered</p>
                </div>

            </div>

            <div className='text-center flex flex-col items-center gap-3 justify-center'>

                <div className='relative inline-block mt-5'>
                    <img className='h-32 w-32 md:h-28 lg:w-28 md:w-28 rounded-full' src='/mobilePhone_.jpg'/>
                </div>

                <div>
                    <div>
                        <h1 className='font-bold'>02</h1>
                    </div>
                    <h2 className='font-bold'>Order details</h2>
                    <p className='text-gray-600 block'>Select where you want</p>
                    <p className='text-gray-600 block'>your goods delivered</p>
                </div>

            </div>

            <div className='text-center flex flex-col items-center gap-3 justify-center'>

                <div className='relative inline-block mt-5'>
                    <img className='h-32 w-32 md:h-28 lg:w-28 md:w-28 rounded-full' src='/money_.jpg'/>
                </div>
                <div>
                    <div>
                        <h1 className='font-bold'>03</h1>
                    </div>
                    <h2 className='font-bold'>Receive quotation</h2>
                    <p className='text-gray-600 block'>Receive quotation and</p>
                    <p className='text-gray-600 block'>estimated delivery time</p>
                </div>

            </div>


        </div>

        <div className='container grid grid-cols-1 lg:grid-cols-2'>

            <div className='text-center flex flex-col items-center justify-center lg:ml-48'>

                <div className='relative inline-block mt-5'>
                    <img className='h-32 w-32 md:h-28 lg:w-28 md:w-28 rounded-full' src='/motorbike_.jpg'/>
                </div>
                <div>
                    <div>
                        <h1 className='font-bold'>04</h1>
                    </div>
                    <h2 className='font-bold'>Order transit</h2>
                    <p className='text-gray-600 block'>Goods shipped within </p>
                    <p className='text-gray-600 block'>the agreed time</p>
                </div>

            </div>

            <div className='text-center flex flex-col items-center justify-center lg:mr-48'>

                <div className='relative inline-block mt-5'>
                    <img className='h-32 w-32 md:h-28 lg:w-28 md:w-28 rounded-full' src='/order_.jpg'/>
                </div>

                <div>
                    <div>
                        <h1 className='font-bold'>05</h1>
                    </div>
                    <h2 className='font-bold'>Receive order</h2>
                    <p className='text-gray-600 block'>Receive the order and</p>
                    <p className='text-gray-600 block'>sign the delivery</p>
                </div>

            </div>
        </div>


    </section>
  )
}

export default Work