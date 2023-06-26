import React from 'react'
import Image from 'next/image'
import ButtonWithBg from './ButtonWithBg'
import {AiOutlineCheckCircle} from "react-icons/ai"


function Services() {
  return (
    <section className='services' >
        <div className="service-image">
            <Image src="/images/minsk-image-1.webp" width="500" height="450" alt=""/>
        </div>
        <div className="service-text">
            <h1>Professional Accounting Services for Your Business experience</h1>
            <p>Are you looking for a reliable and trustworthy accounting company to handle your financial needs? Look no further! Our team of experts provides top-quality accounting services to help you achieve your business goals. Whether you need help with bookkeeping, tax preparation, payroll, or financial planning, we’ve got you covered.</p>
            
        <div className="service-icons">
            <p> <AiOutlineCheckCircle/> Lorem ipsum dolor sit amet consectetur .</p>
           
            <p><AiOutlineCheckCircle/> Lorem ipsum, dolor sit amet consectetur .</p>
            <p><AiOutlineCheckCircle/> Lorem, ipsum dolor sit amet consectetur  .</p>
        </div>
        </div>
    </section>
  )
}

export default Services