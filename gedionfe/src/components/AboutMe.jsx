import React from 'react'
import { badge, hit1, hit2, newreleasebtn, newsong, tophitbadge } from '../assets'

const AboutMe = () => {
  return (
    <div className='text-center my-[340px] flex-col'>
        <div className='flex justify-center '><img src={badge}/></div>
        <div className='text-center  pt-12 pb-12'>
        <h1 className='text-white text-xl font-extrabold leading-snug'>Meet Gideon Mathew</h1>
        <div className='text-text-greytext text-xl leading-8 w-[30%] mx-auto'>Gideon Mathew began his musical journey in 2019, focusing on EDM and Trance. He is also known as Gideon Walker, a name recognized by the Alan Walker team due to his involvement in the Alan Walker community called "Walkers Verse</div>
        <div className='flex justify-center py-6'>
        {/* <img src={hit1}/> 
        <img src={hit2}/> */}
        </div>
        </div>
    </div>
  )
}

export default AboutMe;   
