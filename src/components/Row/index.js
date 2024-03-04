import React from "react"
import { View } from "react-native"
import { rowStyles } from "./styles"

function Row({children, ...rest}) {
  const styles = rowStyles(rest)

  return (
    <View style={styles.row}>
      {children}
    </View>
  )
}

export default Row