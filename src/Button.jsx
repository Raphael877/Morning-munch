import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button type={props.type} style={props.style} className={props.className} onClick={props.onClick} onChange={props.onChange}>{props.text}</button>
    </div>
  )
}

export default Button
