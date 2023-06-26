"use client"
import Image from 'next/image'
import ButtonWithBg from './ButtonWithBg'
import React, { useState } from 'react'
import {BsPlay} from "react-icons/bs"
import Video from './Video'

function ExperienceComponent() {
  const [displayVedio, setDisplayvedio] = useState(false);
  console.log(displayVedio)
  const showVideo=()=>{
    console.log("btn clicked")
    setDisplayvedio(true)
  }
  function RemoveVideo(){
    console.log("btn clicked")
    setDisplayvedio(false)
  }
  return (
  <>
  {
    displayVedio?(<Video removeFunction={RemoveVideo}/>):(
      <section className='experience' >
      <div className="experience-text">
          <h1>Our story from
        15 years of <span>experience</span> </h1>
          <p>At our accounting company, we understand that your business is unique, and that’s why we offer personalized services tailored to your specific needs. With years of experience in the industry, we have the expertise to provide you with the right solutions to meet your financial goals.</p>
          <div className="experince-button">
          < ButtonWithBg/>
          </div>
      </div>
      <div className="experience-image">
        <div className="front-color">
        </div>
      <Image src="/images/minsk-imge-2.webp" width="430" height="450" alt=""/>
      <button onClick={showVideo}>Watch Video</button>
      </div>
    </section>
      )
  }
  </>
  )
}

export default ExperienceComponent


