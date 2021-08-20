/// file note in use


import { StackNavigationProp } from "@react-navigation/stack";
import { TopNavigatorParamsList } from "../types/types";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  ImageBackground,
} from "react-native";
import { MoreInfoButton } from "./MoreInfoButton";
import { getWindow } from "../helpers/helper";
import { getTour } from "../store/actions/actions";
import { useDispatch } from "react-redux";

interface Props {
  title: string;
  img: ImageSourcePropType;
  navigation: StackNavigationProp<
    TopNavigatorParamsList,
    "IndividualTourScreen"
  >;

  id: number;
}

export const Tour: React.FC<Props> = ({ title, img, id, navigation }) => {
  const [titleHidden, setTitleHidden] = useState(true);
  const [buttonHidden, setButtonHidden] = useState(true);
  const [opacity, setOpacity] = useState(true);
  const dispatch = useDispatch();

  const decideButtonStyle = () =>
    buttonHidden === true ? styles.hiddenButton : styles.shownButton;
  const decideStyle = () =>
    titleHidden === true ? styles.hiddenTitle : styles.title;
  const decideOpacity = () =>
    opacity === true ? styles.image : styles.lessOpacity;

  return (
    <TouchableOpacity
    onPress={() => {
      setTitleHidden(!titleHidden);
      setButtonHidden(!buttonHidden);
      setOpacity(!opacity);

    }}>
      <View style={styles.backingContainer}>
        <ImageBackground source={img} style={decideOpacity()}>
        <View style={styles.buttonContainer}>
          <MoreInfoButton
            onPress={() => {
              dispatch(getTour(id, title));
              navigation.navigate("IndividualTourScreen");
            }}
            style={decideButtonStyle()}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={decideStyle()}>{title}</Text>
        </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const { ratio, width, height } = getWindow();
const styles = StyleSheet.create({
  backingContainer: {
    flex: 1,
    height: height / 4.63,
    width: width / 1.426,
    marginLeft: width / 28,
    marginRight: width / 28,

  },
  image: {
    flex: 1,
    height: height / 4.63,
    width: width / 1.426,
  },
  titleContainer: {
    position: "absolute",
    height: height / 4.63,
    width: width / 1.426,
    justifyContent: "flex-end",
  },
  title: {
    paddingBottom: 5,
    color: "white",
    fontSize: ratio / 19.8,
    fontWeight: "bold",
    textShadowOffset: { width: -10, height: 1 },
    textShadowColor: "black",
    textShadowRadius: 10,
  },
  shownButton: {},
  hiddenButton: {
    display: "none",
  },
  buttonContainer: {
    width: width / 1.426,
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
  },
  hiddenTitle:{
    display: 'none'
  },
  lessOpacity: {
    flex: 1,
    height: height / 4.63,
    width: width / 1.426,
    opacity:0.7
  },


  // },
  // moreOpacity: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   height: height / 4.63,
  //   width: width / 1.426,
  //   // marginLeft: width / 28,
  //   // marginRight: width / 28,
  // },
  // titleHidden: {
  //   display: "none",
  // },
  // titleShown: {
  //   color: "white",
  //   fontSize: ratio / 19.8,
  //   fontWeight: 'bold',
  //   textShadowOffset: { width: -10, height: 1 },
  //   textShadowColor: 'black',
  //   textShadowRadius: 10,

  // },

  // shownButton: {
  //   height: ratio /6,
  //   paddingRight: 10,
  //   alignItems: "center",
  //   shadowOffset: { width: 5, height: 7 },
  //   shadowOpacity: 0.6,
  //   flexDirection: "column",
  //   justifyContent: "center",
  // },
  // hiddenButton: {
  //   display: "none",
  // },
  // lessOpacity:{
  //   flex: 1,
  //   resizeMode: "cover",
  //   height: height / 4.63,
  //   width: width / 1.426,
  //   // marginLeft: width / 28,
  //   // marginRight: width / 28,
  //   opacity: 0.7
  // },
  // blackBack:{
  //   flex: 1,
  //   resizeMode: "cover",
  //   height: height / 4.63,
  //   width: width / 1.426,
  //   marginLeft: width / 28,
  //   marginRight: width / 28,
  //   backgroundColor: 'black',

  // }
});
