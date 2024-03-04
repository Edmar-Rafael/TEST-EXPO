import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

export const naviBarStyles = StyleSheet.create({
  navi_bar: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 2,
    backgroundColor: `${Colors.black}`
  }
})