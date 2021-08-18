import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { getWindow } from "../helpers/helper";

interface Props {
  placeholder: string;
}

export const InputButton: React.FC<Props> = ({ placeholder }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholderTextColor="black"
        style={styles.inputText}
        placeholder={placeholder}
      />
    </View>
  );
};

const { ratio, height, width } = getWindow();
const styles = StyleSheet.create({
  inputContainer: {
    width: width / 1.426,
    height: height / 16.836,
    borderRadius: 20,
    backgroundColor: "#116cae",
    opacity: 0.2,
    marginTop: height / 30.866,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.4,
  },
  inputText: {
    fontSize: ratio / 12,
    alignSelf: "center",
  },
});
