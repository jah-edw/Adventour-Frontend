import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  Image,
} from "react-native";
import { getWindow } from "../helpers/helper";

interface Props {
  title: string;
  img: ImageSourcePropType;
}

export const CharacterClickable: React.FC<Props> = ({ title, img }) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: img }} style={styles.buttonContainer}></Image>
    </TouchableOpacity>
  );
};

const { height, width } = getWindow();
const styles = StyleSheet.create({
  buttonContainer: {
    width: width / 2.4,
    height: height / 5.836,
  },
});
