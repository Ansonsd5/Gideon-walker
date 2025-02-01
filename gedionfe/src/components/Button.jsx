import React from 'react';

function Button(props) {
const {icon, buttonText, handleButton} = props;
  return (
    <button className='flex cursor-pointer align-items-center' onClick={()=>handleButton()}>{buttonText} <img src={icon} alt={buttonText}/></button>
  )
}

export default Button