"use client"

import React from 'react'
import { useState } from 'react';
import { IoAddCircle } from 'react-icons/io5';
import { FiMinusCircle } from 'react-icons/fi';

interface Faq {
    question: string;
    answer: string;
}

const FaqSection = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }


    const faqs = [
        { question: 'What is One Time Deliveries?', answer: 'One Time Deliveries is a service that provides hassle-free shopping and delivery experiences.' },
        { question: 'How does it work?', answer: 'Simply sign up, place your order, and our team will deliver your items to your doorstep.' },
        { question: 'What areas do you cover?', answer: 'We cover most urban areas. Please check our service map for detailed coverage.' },
        { question: 'How can I contact support?', answer: 'You can contact support via our website contact form or email us at support@onetimedelivery.com.' },
    ];


  return (
    <section className='relative bg-blue-200 mx-auto'>

        <div className='container flex flex-col md:flex-row md:items-center p-10 mx-auto'>

            <div className='md:w-1/2'>
                <h1 className='text-3xl'>FAQS</h1>

                <span className='block text-gray-500'>some of these answers</span>
                <span className='block text-gray-500'>Some of the enquiries people ask, lets try to answer</span>
            </div>

            <div className='md:w-1/2 flex flex-col'>
                {faqs.map((faq, index) => (
                    <div key={index} className='relative'>
                        <div>
                            <button className='bg-white mt-5 py-2 w-full rounded-md'>
                                {faq.question}
                                
                                {openIndex === index && <p className='font-thin text-start bg-white'>{faq.answer}</p>}
                            </button>
                            {openIndex === index ? (<FiMinusCircle onClick={()=>toggleAnswer(index)} className='text-3xl absolute right-0 md:right-0 top-6 cursor-pointer'/>) : (<IoAddCircle onClick={() => toggleAnswer(index)} className='text-3xl absolute right-0 md:right-0 top-6 cursor-pointer'/>)}
                            
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    </section>
  )
}

export default FaqSection