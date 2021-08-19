import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { getWindow } from "../helpers/helper";
import { TopNavigatorParamsList } from "../types/types";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  style: Object;
  // navigation: StackNavigationProp<TopNavigatorParamsList, "IndividualTourScreen">;
}

export const MoreInfoButton: React.FC<Props> = ({ onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
    >
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
