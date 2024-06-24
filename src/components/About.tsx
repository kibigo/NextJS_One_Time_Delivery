import React from 'react'

const About = () => {
  return (
    <section className='relative bg-blue-100 mx-auto'>

        <div className='container flex flex-col md:flex-row md:justify-between items-center p-10 mx-auto'>

            <div className='md:w-1/2'>
                <h1 className='font-bold text-3xl'>About us</h1>
                <p className='mt-4'>
                    At onetime delivery, we're not just a delivery service; we're your reliable partner in convenience 
                    and efficiency. With a passion for seamless logistics and customer satisfaction, we've built a reputation 
                    as the go-to solution for all your delivery needs. We are commited to Excellence offering Fast and Reliable 
                    Service that is Flexible and Adaptability. We do this using Cutting-Edge Technology a Dedicated Team Whether 
                    you're a business looking for reliable logistics solutions or an individual in need of convenient delivery 
                    services, you can trust [Delivery Company Name] to deliver, quite literally.
                </p>
            </div>


            <div className='h-80 w-80 relative mr-10 mt-10'>
                <img className='absolute inset-0 w-full h-full object-cover clip-path-irregular border-r-4' src='https://img.freepik.com/free-photo/full-shot-man-riding-bike-outdoors_23-2150880380.jpg?t=st=1718545333~exp=1718548933~hmac=14db247973fc8047f1c1faf5cd98ae0faed9012a20d43366b3c34d3294fadc38&w=740'/>
            </div>
        </div>
        
    </section>
  )
}

export default About