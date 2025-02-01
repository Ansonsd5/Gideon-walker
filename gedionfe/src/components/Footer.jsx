import React from 'react'
import Button from './Button';
import { FooterList } from '../utils/Textconstants';


const Footer = () => {
  return (
    <div className='bg-black flex justify-center align-middle gap-5 '>
        {
            FooterList.map(item =>{
                return <Button icon ={item.icon}/>
            })
        }
    </div>
  )
}

export default Footer