import { StackNavigationProp } from "@react-navigation/stack";
import { TopNavigatorParamsList } from "../types/types";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { MoreInfoButton } from "./MoreInfoButton";
import { getWindow } from "../helpers/helper";
import { useDispatch } from "react-redux";
import { setIndividualTour } from "../store/actions/actions";

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
    titleHidden === true ? styles.titleHidden : styles.titleShown;
  const decideOpacity = () =>
    opacity === true ? styles.moreOpacity : styles.lessOpacity;

  return (
    <TouchableOpacity
      onPress={() => {
        setTitleHidden(!titleHidden);
        setButtonHidden(!buttonHidden);
        setOpacity(!opacity);
      }}
    >
      <View style={styles.blackBack}>
        <ImageBackground style={decideOpacity()} source={img}>
          <View style={styles.hiddenDiv}>
            <MoreInfoButton
              onPress={() => {
                dispatch(setIndividualTour(title));
                navigation.navigate("IndividualTourScreen");
              }}
              style={decideButtonStyle()}
            />
          </View>
          <View style={styles.container}>
            <Text style={decideStyle()}>{title}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const { ratio, width, height } = getWindow();
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: height / 4.63,
    borderRadius: 35,
    maxWidth: width / 1.426,
    flexWrap: "wrap",
  },
  moreOpacity: {
    flex: 1,
    resizeMode: "cover",
    height: height / 4.63,
    width: width / 1.426,
  },
  titleHidden: {
    display: "none",
  },
  titleShown: {
    color: "white",
    fontSize: ratio / 19.8,
    marginTop: height / 40,
    marginLeft: width / 50,
    fontWeight: "bold",
    textShadowOffset: { width: -10, height: 1 },
    textShadowColor: "black",
    textShadowRadius: 10,
  },
  hidden: {
    display: "none",
  },
  hiddenDiv: {
    height: height / 7,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  shownButton: {
    height: ratio / 6,
    paddingRight: 10,
    alignItems: "center",
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.6,
    flexDirection: "column",
    justifyContent: "center",
  },
  hiddenButton: {
    display: "none",
  },
  lessOpacity: {
    flex: 1,
    resizeMode: "cover",
    height: height / 4.63,
    width: width / 1.426,
    // marginLeft: width / 28,
    // marginRight: width / 28,
    opacity: 0.7,
  },
  blackBack: {
    flex: 1,
    resizeMode: "cover",
    height: height / 4.63,
    width: width / 1.426,
    marginLeft: width / 28,
    marginRight: width / 28,
    backgroundColor: "black",
  },
});
