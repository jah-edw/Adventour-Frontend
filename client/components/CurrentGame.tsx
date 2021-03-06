import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { getWindow } from "../helpers/helper";

interface Props {
  // add prop type definitions if props need to be passed in line 9
}

export const CurrentGame: React.FC<Props> = () => {
  return <TouchableOpacity style={styles.buttonContainer}></TouchableOpacity>;
};

const { height, width } = getWindow();
const styles = StyleSheet.create({
  buttonContainer: {
    width: width / 1.1,
    height: height / 1.3,
    borderRadius: 20,
    backgroundColor: "#1C76B8",
    alignItems: "center",
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.6,
    flexDirection: "column",
    justifyContent: "center",
  },
});
