import React from "react";
import { TextInput } from "react-native";
import { InputStyles } from "./style";
import { Colors } from "../../utils";

function Input(rest) {

  return (
    <TextInput 
      style={InputStyles.input}
      placeholderTextColor={`${Colors.placeholder}`} 
      placeholder={rest.placeHolder || 'type here'}
      {...rest}
    />
  )
}

export default Input