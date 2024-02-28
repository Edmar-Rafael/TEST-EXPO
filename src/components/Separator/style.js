import { StyleSheet } from "react-native";

export const SeparatorStyles = (rest) => StyleSheet.create({
  separator: {
    width: rest.x || '2%',
    height: rest.y || '2%'
  }
})