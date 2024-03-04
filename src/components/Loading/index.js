import React from "react"
import { ActivityIndicator, View } from "react-native"
import { loadingStyles } from "./styles"
import { Colors } from "../../utils"

function Loading() {

  return (
    <View style={loadingStyles.loading_box}>
      <ActivityIndicator size={'large'} color={`${Colors.aqua}`}/>
    </View>
  )
}

export default Loading