import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { containerStyles } from "./styles";

function Container(rest) {

  return (
    <TouchableWithoutFeedback 
      onPress={() => Keyboard.dismiss()}
    >
      <View style={containerStyles.container} >
        {rest.children}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Container