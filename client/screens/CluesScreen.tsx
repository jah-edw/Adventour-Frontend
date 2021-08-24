//CLUES

import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import {useSelector} from 'react-redux';
import {
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Button
} from "react-native";
import { getWindow } from "../helpers/helper";
import { TopNavigatorParamsList } from "../types/types";

interface CluesScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "GameScreen">;
  source: ImageSourcePropType;
}

const CluesScreen: React.FC<CluesScreenProps> = () => {
  const clue = useSelector((state: any) => state.gameReducer);
  const [hintPressed, setHintPressed] = useState(false);



  const displayHint = () => {
    if (hintPressed === true) {
      return styles.visibleHint 
    } else {
      return styles.hiddenHint;
    }
  }


  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wallpaper.png")}
    >
      <SafeAreaView>
        <View style={styles.whiteCard}>
          <Text style={styles.title}>Clue Number {clue.id}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.clueText}>{clue.clue}</Text>
          </View>
          <View style={styles.hintAndButtonContainer}>
            <View style={styles.hintContainer}>
              <Text style={displayHint()}>{clue.hint}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button title='Need a hint?' onPress={() => {
                setHintPressed(!hintPressed)
                }} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const { height, width, ratio } = getWindow();
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
  },
  whiteCard: {
    height: height,
    backgroundColor: "#fff",
    borderRadius: 55,
    alignItems: "center",
    marginTop: height / 15,
    paddingTop: 50,
  },
  clueText: {
    fontFamily: 'System',
    fontSize: ratio /22
  },
  textContainer: {
    paddingLeft: ratio/7,
    paddingRight: ratio/7,
  },
  title: {
    fontSize: ratio/8,
    marginBottom: height/30
  },
  hintAndButtonContainer: {
    justifyContent: "space-around",
    height: height * 0.6
  },
  visibleHint: {
    fontFamily: 'System',
    fontSize: ratio /22
  },
  hiddenHint: {
    display: 'none'
  },
  hintContainer: {
    flexDirection: 'row',
    justifyContent: "center"
  },
  buttonContainer: {

  }
});

export default CluesScreen;
