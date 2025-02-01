import React from 'react'
import { hit1, hit2, newreleasebtn, newsong, tophitbadge } from '../assets'

const TopHits = () => {
  return (
    <div className='text-center my-[340px] flex-col'>
        <div className='flex justify-center '><img src={tophitbadge}/></div>
        <div className='text-center  pt-12 pb-12'>
        <h1 className='text-white text-xl font-extrabold leading-snug	'>Top Hits</h1>
        <div className='text-text-greytext text-xl leading-8 w-[30%] mx-auto'>Here some of the all time top hits by Gideon Walker.</div>
        <div className='flex justify-center py-6'>
        <img src={hit1}/> 
        <img src={hit2}/>
        </div>
        </div>
    </div>
  )
}

export default TopHits   
