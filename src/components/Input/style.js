import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

export const InputStyles = StyleSheet.create({
  input: {
    width: '50%',
    height: 25,
    borderColor: `${Colors.black}`,
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: `${Colors.aqua}`,
    elevation: 5,
    backgroundColor: `${Colors.back_ground}`,
    color: `${Colors.white}`
  }
})