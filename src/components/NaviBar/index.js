import React from "react"
import { View } from "react-native"
import { naviBarStyles } from "./styles"
 

function Navibar(rest) {

  return (
    <View style={naviBarStyles.navi_bar}>
      {rest.children}
    </View>
  )
}

export default Navibar