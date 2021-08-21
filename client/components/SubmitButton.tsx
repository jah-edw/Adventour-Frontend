import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { getWindow } from "../helpers/helper";

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  style: Object;
}

export const SubmitButton: React.FC<Props> = ({ onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
    >
      <Text style={styles.buttonText}>X</Text>
    </TouchableOpacity>
  );
};

const { ratio } = getWindow();
const styles = StyleSheet.create({
  buttonText: {
    fontSize: ratio / 2,
    alignSelf: "center",
    color: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowColor: "black",
    textShadowRadius: 10,
    paddingRight:5,
  },
});
