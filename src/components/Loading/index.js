import React from "react"
import { ActivityIndicator, View } from "react-native"
import { loadingStyles } from "./styles"

function Loading() {

  return (
    <View style={loadingStyles.loading_box}>
      <ActivityIndicator size={'large'} color={'#00ffff'}/>
    </View>
  )
}

export default Loading