import React from 'react'
import { newreleasebtn, newsong } from '../assets'

const ReleaseSection = () => {
  return (
    <div className='text-center my-[340px] flex-col'>
        <div className='flex justify-center '><img src={newreleasebtn}/></div>
        <div className='text-center  pt-12 pb-12'>
        <h1 className='text-white text-xl font-extrabold leading-snug	'>Ashes</h1>
        <div className='text-text-greytext text-xl leading-8 w-[30%] mx-auto'>Gideon Walker's upcoming album, The Ashes, promises to be a captivating journey through the depths of emotion and sound. </div>
        <div className='flex justify-center py-6'>
            <img src={newsong}/>
        </div>
        </div>
    </div>
  )
}

export default ReleaseSection