import React from "react";
import { View } from "react-native";
import { SeparatorStyles } from "./style";

function Separator(rest) {

  return (
    <View style={SeparatorStyles(rest).separator}/>
  )
}

export default Separator