import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getWindow } from "../helpers/helper";
import { SubmitButton } from "./SubmitButton";

interface Props {
  title: string;
  img: ImageSourcePropType;

}

export const CharacterClickable: React.FC<Props> = ({
  title,
  img,
  eliminated,
  handleSubmit,
}) => {
  const [opacity, setOpacity] = useState(true);
  const [clicked, setClicked] = useState(false);
  const decideButtonStyle = () =>
  eliminated === true  || clicked === true ? styles.shownButton : styles.hiddenButton 
  const decideOpacity = () =>
    eliminated === false ? styles.moreOpacity : styles.lessOpacity;
  // const clueNumber: any = useSelector((state: any) => state.clueReducer);
  // const clue: any = useSelector((state: any) => state.gameReducer);
  // const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        if (clicked === false) {
          setClicked(true);
          setOpacity(!opacity);
        }
      }}
    >
      <Text>{title}</Text>
      <Image source={{ uri: img }} style={decideOpacity()}></Image>
      <SubmitButton
        style={decideButtonStyle()}
        onPress={() => {
          handleSubmit(title, eliminated);
        }}
      ></SubmitButton>
    </TouchableOpacity>
  );
};

const { height, width } = getWindow();
const styles = StyleSheet.create({
  moreOpacity: {
    width: width / 2.4,
    height: height / 5.836,
  },
  hiddenButton: {
    display: "none",
  },
  shownButton: {
    position: "absolute",
  },
  lessOpacity: {
    width: width / 2.4,
    height: height / 5.836,
    opacity: 0.2,
  },
});
