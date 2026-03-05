import React from 'react'

const Button = ({className, text}) => {
  return (
    <div>
        <button className={`${className}`}>{text}</button>
    </div>
  )
}

export default Button