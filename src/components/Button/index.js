import React from "react";
import { Text, TouchableOpacity, View } from 'react-native'
import { buttonStyles } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


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
      {rest.faIcon ? (
        <FontAwesomeIcon icon={rest.faIcon} />
      ) : (
        <View />
      )}
      
    </TouchableOpacity>
  )
}

export default Button