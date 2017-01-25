import React, {Component} from 'react'
import './Input.css'

class InputField extends Component {
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
    const {label, type, hintText} = this.props
    const { error } = this.state

    return (
      <div className="InputContainer">
        <label className="InputLabel">{label}</label>
        <input
          onBlur={() => this.onBlur()}
          ref={(elem) => this.input = elem}
          className="Input"
          type={type}
          placeholder={hintText}
        />
          {error ? (
            <label className="InputError" >{error}</label>
          ) : (
            <label className="InputError" >{error}</label>
          )}
      </div>
    )
  }
}

export default InputField
