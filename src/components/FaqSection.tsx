"use client"

import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';
import { useState } from 'react';
import { IoAddCircle } from 'react-icons/io5';
import { FiMinusCircle } from 'react-icons/fi';

interface Faq {
    question: string;
    answer: string;
}

const FaqSection = () => {


  return (
    <section className='relative bg-blue-200 mx-auto'>

        <div className='container flex flex-col gap-5 md:flex-row md:items-center p-10 mx-auto'>

            <div className='md:w-1/2'>
                <h1 className='text-3xl'>FAQS</h1>

                <div className='mt-3'>
                    <span className='block text-gray-500'>Some of the enquiries people ask, lets try to answer</span>
                </div>
            </div>
            
            <div className="w-full max-w-lg divide-y divide-gray-200 rounded-xl bg-white/5">

                <Disclosure as="div" className="p-4 bg-white" defaultOpen={false}>
                    <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-sm/6 font-medium group-data-[hover]:text-gray-600">
                        What is One Time Deliveries?
                        </span>
                        <BiChevronDown className="size-5 group-data-[hover]:fill-gray-600 group-data-[open]:rotate-180" />
                    </DisclosureButton>

                    <DisclosurePanel className="mt-2 text-sm/5">
                        One Time Deliveries is a service that provides hassle-free shopping and delivery experiences.
                    </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="p-4 bg-white" defaultOpen={false}>
                    <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-sm/6 font-medium group-data-[hover]:text-gray-600">
                        How does it work?
                        </span>
                        <BiChevronDown className="size-5 group-data-[hover]:fill-gray-600 group-data-[open]:rotate-180" />
                    </DisclosureButton>

                    <DisclosurePanel className="mt-2 text-sm/5">
                        Simply sign up, place your order, and our team will deliver your items to your doorstep.
                    </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="p-4 bg-white" defaultOpen={false}>
                    <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-sm/6 font-medium group-data-[hover]:text-gray-600">
                        What areas do you cover?
                        </span>
                        <BiChevronDown className="size-5 group-data-[hover]:fill-gray-600 group-data-[open]:rotate-180" />
                    </DisclosureButton>

                    <DisclosurePanel className="mt-2 text-sm/5">
                        We cover most urban areas. Please check our service map for detailed coverage.
                    </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="p-4 bg-white" defaultOpen={false}>
                    <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-sm/6 font-medium group-data-[hover]:text-gray-600">
                        How can I contact support?
                        </span>
                        <BiChevronDown className="size-5 group-data-[hover]:fill-gray-600 group-data-[open]:rotate-180" />
                    </DisclosureButton>

                    <DisclosurePanel className="mt-2 text-sm/5">
                        You can contact support via our website contact form or email us at support@onetimedelivery.com.
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </div>
    </section>
  )
}

export default FaqSection