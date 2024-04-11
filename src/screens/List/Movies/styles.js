import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";

export const moviesStyles = StyleSheet.create({
  box: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 110,
    padding: 2,
    borderWidth: 1,
    borderColor: `${Colors.blue}`,
    borderRadius: 2,
    gap: 2
  },

  text: {
    width: '50%',
    paddingLeft: 2,
    color: `${Colors.white}`
  }
})