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
import { setClue, getNextClue } from "../store/actions/actions";

interface Props {
  title: string;
  img: ImageSourcePropType;
}

export const CharacterClickable: React.FC<Props> = ({ title, img, navigation }) => {
  const [buttonHidden, setButtonHidden] = useState(true);
  const [opacity, setOpacity] = useState(true);
  const [clicked, setClicked] = useState(false);
  const decideButtonStyle = () =>
    buttonHidden === true ? styles.hiddenButton : styles.shownButton;
  const decideOpacity = () =>
    opacity === true ? styles.moreOpacity : styles.lessOpacity;
  const clueNumber: any = useSelector((state: any) => state.clueReducer);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (clicked === false) {
      dispatch(setClue());
      dispatch(getNextClue("The Charing Cross Charmer", clueNumber));
      setClicked(true);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        if (clicked === false) {
          setButtonHidden(!buttonHidden);
          setOpacity(!opacity);
        }
      }}
    >
      <Text>{title}</Text>
      <Image source={{ uri: img }} style={decideOpacity()}></Image>
      <SubmitButton
        style={decideButtonStyle()}
        onPress={handleSubmit}
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
