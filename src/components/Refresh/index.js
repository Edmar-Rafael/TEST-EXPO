import React, { useState } from "react"
import { RefreshControl, SafeAreaView, ScrollView } from "react-native"
import { refreshStyles } from "./styles"
import { Colors } from "../../utils"

function Refresh({isClicked, setIsClicked}) {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setIsClicked(!isClicked)
      setRefreshing(false)
    }, 1000)
  }

  return (
    <SafeAreaView style={refreshStyles.safa_area_view}>
      <ScrollView
        contentContainerStyle={refreshStyles.scroll_view}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[`${Colors.aqua}`]}
            progressBackgroundColor={`${Colors.black}`}
            size={'large'}
          />
        }
      />
    </SafeAreaView>
  )
}

export default Refresh