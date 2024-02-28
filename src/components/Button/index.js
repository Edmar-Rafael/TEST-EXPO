import React from "react";
import { Text, TouchableOpacity } from 'react-native'
import { buttonStyles } from "./style";

function Button(rest) {

  return (
    <TouchableOpacity 
      style={
        rest.movies ?  buttonStyles.movies : 
        rest.navi_bar ? buttonStyles.navibar : buttonStyles.button
      } 
      {...rest}
    >
      <Text style={rest.movies ? buttonStyles.text_movies : buttonStyles.text}>
        {rest.text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button