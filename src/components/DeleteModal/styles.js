import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

export const deleteModalStyles = StyleSheet.create({
  delete_text: {
    color: `${Colors.red.light}`,
    borderWidth: 1,
    borderColor: `${Colors.red.medium}`,
    borderRadius: 3,
    padding: 5
  },

  delete_card: {
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