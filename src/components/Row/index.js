import React from "react"
import { View } from "react-native"
import { rowStyles } from "./styles"

function Row({children}) {

  return (
    <View style={rowStyles.row}>
      {children}
    </View>
  )
}

export default Row