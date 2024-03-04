import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

export const containerStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 1,
    backgroundColor: `${Colors.back_ground}`,
    position: 'relative'
  }
})