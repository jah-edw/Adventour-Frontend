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

export const MoreInfoButton: React.FC<Props> = ({ onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={styles.buttonText}>More Info...</Text>
    </TouchableOpacity>
  );
};

const { ratio } = getWindow();
const styles = StyleSheet.create({
  buttonText: {
    fontSize: ratio / 24,
    alignSelf: "center",
    color: "#fff",
  },
});
