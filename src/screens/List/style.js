import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

export const listStyles = StyleSheet.create({
  list_content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '95%',
    gap: 9,
  },

  scroll: {
    display: 'flex',
    alignSelf: 'center',
    width: '95%',
    height: 130,
    padding: 6,
    borderColor: `${Colors.blue}`,
    borderWidth: 1,
  },
})