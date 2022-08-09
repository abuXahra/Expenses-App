import React from 'react'
import { InputDateContainer } from '../../../style/InputDate.style'

function InputDate(props) {

  const inputProperty = {
    title: props.title,
    type: props.type,
    min: props.min,
    step: props.step,
    inputHandler: props.inputHandler,
    value: props.enteredValue,
    placeHolder: props.placeHolder
  }




  return (
    <InputDateContainer>
      <label>{inputProperty.title}</label>
      <input type={inputProperty.type}
        min={inputProperty.min}
        step={inputProperty.step}
        onChange={inputProperty.inputHandler}
        required
        value={inputProperty.value}
        placeholder={inputProperty.placeHolder}
      />
    </InputDateContainer>
  )
}

export default InputDate
