import React from 'react'
import "./button.css"

const Button = (props) => {
  return (
    <div>
        {props.children}
      <button onClick={props.demo} className='btn'>
       {props.text}
       
      </button>
    </div>
  )
}

export default Button;
