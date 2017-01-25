import React, { Component } from 'react'
import './Radio.css'

class RadioButtonGroup extends Component {
  constructor() {
    super()
    this.state = {
      error: ""
    }
  }

  onBlur() {
    const { checkFunc, values, compare } = this.props

    if (checkFunc) {
      this.setState({
        error: checkFunc(this.input.value, compare ? values[compare].input.value : undefined)
      })
    }
  }

  render() {
    const {label, children} = this.props
    const { error } = this.state

    return (
      <div className="RadioGroup" >
        {children}
        {error ? (
          <label className="InputError" >{error}</label>
        ) : (
          <label className="InputError" >{error}</label>
        )}
      </div>
    )
  }
}

export default RadioButtonGroup
