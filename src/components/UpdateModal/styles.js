import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

export const modalStyles = StyleSheet.create({
  centered_view: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: `${Colors.overlay_background}`
  },

  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 200,
    padding: 9,
    backgroundColor: `${Colors.modal_card_background}`,
    borderColor: `${Colors.black}`,
    borderWidth: 1,
    borderRadius: 19,
    gap: 15
  }
})