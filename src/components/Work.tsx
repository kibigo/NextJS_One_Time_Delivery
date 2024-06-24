import React from 'react'

const Work = () => {
  return (
    <section className='bg-white py-10'>

        <div className='text-center text-3xl mt-2 font-thin'>
            <h1>How we work</h1>
        </div>

        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto p-10'>

                <div className='text-center flex items-center gap-3'>
                    
                    <div>
                        <div>
                            <h1 className='font-bold'>01</h1>
                        </div>
                        <h2 className='font-bold'>Reach out</h2>
                        <p className='text-gray-600 block'>Talk to us on what</p>
                        <p className='text-gray-600 block'>you want delivered</p>
                    </div>

                    <div className='mt-5'>
                        <img className='h-32 w-32 md:h-28 md:w-28 rounded-full' src='https://img.freepik.com/free-photo/closeup-image-office-phone_144627-637.jpg?t=st=1718605513~exp=1718609113~hmac=a485a6c1a907700de8fec292938ab97e1947a04c9426546baa8c721f0d3f24c6&w=1380'/>
                    </div>
                </div>

                <div className='text-center flex items-center gap-3'>
                    <div>
                        <div>
                            <h1 className='font-bold'>02</h1>
                        </div>
                        <h2 className='font-bold'>Order details</h2>
                        <p className='text-gray-600 block'>Select where you want</p>
                        <p className='text-gray-600 block'>your goods delivered</p>
                    </div>

                    <div className='relative inline-block mt-5'>
                        <img className='h-32 w-32 md:h-28 md:w-28 rounded-full' src='https://img.freepik.com/free-photo/young-man-working-from-home_23-2148854233.jpg?t=st=1718616400~exp=1718620000~hmac=d54b581de56c88850c7b116ab11093da614b124ac43a7ecd77819cdefc0044bc&w=1060'/>
                    </div>
                </div>

                <div className='text-center flex items-center gap-3'>
                    <div>
                        <div>
                            <h1 className='font-bold'>03</h1>
                        </div>
                        <h2 className='font-bold'>Receive quotation</h2>
                        <p className='text-gray-600 block'>Receive quotation and</p>
                        <p className='text-gray-600 block'>estimated delivery time</p>
                    </div>

                    <div className='relative inline-block mt-5'>
                        <img className='h-32 w-32 md:h-28 md:w-28 rounded-full' src='https://img.freepik.com/premium-photo/fair-hand-holding-usa-dollar-notes-isolated-white-background_584365-76.jpg?w=1380'/>
                    </div>
                </div>

                <div className='text-center flex items-center gap-3'>
                    <div>
                        <div>
                            <h1 className='font-bold'>04</h1>
                        </div>
                        <h2 className='font-bold'>Order transit</h2>
                        <p className='text-gray-600 block'>Goods shipped within </p>
                        <p className='text-gray-600 block'>the agreed time</p>
                    </div>

                    <div className='relative inline-block mt-5'>
                        <img className='h-32 w-32 md:h-28 md:w-28 rounded-full' src='https://img.freepik.com/free-photo/delivery-man-riding-his-scooter-new-york-city_23-2150819988.jpg?t=st=1718616567~exp=1718620167~hmac=7e5989ea2f975fcf8914492a19baa23ee2adb8997e0d66a1173dc285fd6f1440&w=740'/>
                    </div>
                </div>

                <div className='text-center flex items-center gap-3'>
                    <div>
                        <div>
                            <h1 className='font-bold'>05</h1>
                        </div>
                        <h2 className='font-bold'>Receive order</h2>
                        <p className='text-gray-600 block'>Receive the order and</p>
                        <p className='text-gray-600 block'>sign the delivery</p>
                    </div>

                    <div className='relative inline-block mt-5'>
                        <img className='h-32 w-32 md:h-28 md:w-28 rounded-full' src='https://img.freepik.com/free-photo/delivery-person-getting-parcel-out-delivery_23-2149371928.jpg?t=st=1718616626~exp=1718620226~hmac=e92247cb63d1c2db96965960ba0affe945ee5d5ffe3739916125434df053dd48&w=1380'/>
                    </div>
                </div>
            </div>


    </section>
  )
}

export default Work