import React, {useState} from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Text
} from "react-native";
import { getWindow } from "../helpers/helper";
import { SubmitButton } from "./SubmitButton";

interface Props {
  title: string;
  img: ImageSourcePropType;
}

export const CharacterClickable: React.FC<Props> = ({ title, img, clicked }) => {
  const [buttonHidden, setButtonHidden]  = useState(true);
  const [opacity, setOpacity] = useState(true);
  //const [clicked, setClicked] = useState(false)
  const decideButtonStyle = () => 
  buttonHidden === true? styles.hiddenButton : styles.shownButton;
  const decideOpacity = () => 
  opacity === true? styles.moreOpacity : styles.lessOpacity; 
  const decideClicked = () => {
    clicked === true? styles.shownButton : styles.hiddenButton;
  }
  const handleSubmit = (title: string) => {
    return 'submit handled'
  }

  return (
    <TouchableOpacity
    onPress={()=> {
    setButtonHidden(!buttonHidden);
    setOpacity(!opacity);
    }}
    
    >

      <Text>{title}</Text>
      <Image source={{ uri: img }} style={decideOpacity()}
      ></Image>
      <SubmitButton style={decideClicked()} 
      onPress={handleSubmit(title)}
      > </SubmitButton>
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
    display: 'none',

  },
  shownButton: {
    position: 'absolute'
  },
  lessOpacity: {
    width: width / 2.4,
    height: height / 5.836,
    opacity: 0.2
  }
});
