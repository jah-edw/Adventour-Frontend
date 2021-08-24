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
  answer
}) => {
  const [opacity, setOpacity] = useState(true);
  const [clicked, setClicked] = useState(false);
  const decideButtonStyle = () =>
    clicked === true && eliminated === false ? styles.shownButton : styles.hiddenButton;
  const decideOpacity = () =>
    eliminated === false ? styles.moreOpacity : styles.lessOpacity;
  
  const decideX = () => {
    if (eliminated === true) {
      return styles.eliminated
    } else {
      return styles.notEliminated
    }
  }
  
  // const clueNumber: any = useSelector((state: any) => state.clueReducer);
  // const clue: any = useSelector((state: any) => state.gameReducer);
  // const dispatch = useDispatch();

  return (
    <TouchableOpacity
    style={styles.clickable}
      onPress={() => {
        if (clicked === false) {
          setClicked(true);
          setOpacity(!opacity);
        } else {
          setClicked(false);
        }
      }}
    >

      <Text>{title}</Text>
      <Image source={{ uri: img }} style={decideOpacity()}></Image>
      <SubmitButton
        style={decideButtonStyle()}
        onPress={() => {
          setClicked(false);
          handleSubmit(answer, eliminated);
        }}
      ></SubmitButton>
      <Text style={decideX()}>X</Text>
    </TouchableOpacity>
  );
};

const { height, width, ratio } = getWindow();
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
    top: height * 0.13,
    left: width * 0.03,

  },
  lessOpacity: {
    width: width / 2.4,
    height: height / 5.836,
    opacity: 0.2,
  },
  clickable: {
    marginBottom: height * 0.05,
    justifyContent: 'center'
  },
  eliminated: {
    position: 'absolute',
    fontSize: ratio / 1.76,
    paddingTop: height * 0.017,
    paddingLeft: width * 0.04,
    color: 'gray'

  },
  notEliminated: {
    display: "none",
  }
});
