import React, { Component } from 'react'
import './Radio.css'

function RadioButton({label, name}) {
  return (
    <div className="RadioContainer">
      <input type="radio" name={name} className="Radio"></input>
      <label className="RadioLabel">{label}</label>
    </div>
  )
}

export default RadioButton
