import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { getWindow } from "../helpers/helper";

interface Props {
  // type props here if you need to pass them in line 12
  // eg:
  // onPress: (event: GestureResponderEvent) => void
  // title: string
}

export const CharacterClickable: React.FC<Props> = () => {
  return <TouchableOpacity style={styles.buttonContainer}></TouchableOpacity>;
};

const { height, width } = getWindow();
const styles = StyleSheet.create({
  buttonContainer: {
    width: width / 2.4,
    height: height / 5.836,
    borderRadius: 20,
    backgroundColor: "#1C76B8",
    marginTop: height / 40,
    alignItems: "center",
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.6,
    flexDirection: "column",
    justifyContent: "center",
  },
});
