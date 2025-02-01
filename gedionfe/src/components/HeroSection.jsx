import React from 'react'
import Button from './Button'
import { spotifybtn, youtubebtn } from '../assets'

const HeroSection = () => {

    const handleYouTube= () =>{
        console.log("handleYouTube clicked")
      }
  return (
    <div className='flex flex-col items-center text-center pt-[220px]'>
        <div className=' align-middle  pt-12 pb-12'>
        <h1 className='text-text-bluecolor text-[80px] font-extrabold leading-snug	'>Gideon Walker</h1>
        <div className='text-text-greytext text-4xl leading-8'>Music Inspires the Soul to Wake Up </div>
        </div>
        <div className='flex flex-grow gap-4'>
        <Button handleButton={handleYouTube} icon={youtubebtn}/>
        <Button handleButton={handleYouTube} icon={spotifybtn}/>
        </div>
    </div>
  )
}

export default HeroSection