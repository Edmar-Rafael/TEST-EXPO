import React from "react";
import { TextInput } from "react-native";
import { InputStyles } from "./style";

function Input(rest) {

  return (
    <TextInput 
      style={InputStyles.input}
      placeholderTextColor={'#ffffff77'} 
      placeholder={rest.placeHolder || 'type here'}
      {...rest}
    />
  )
}

export default Input