// DIRECTIONS

import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  View,
  ScrollView,
  Text,
} from "react-native";
import { getWindow } from "../helpers/helper";
import { TopNavigatorParamsList } from "../types/types";
import { getNextClue } from "../store/actions/actions";

interface GameScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "GameScreen">;
  source: ImageSourcePropType;
}

const GameScreen: React.FC<GameScreenProps> = () => {
  const clue = useSelector((state: any) => state.gameReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNextClue("The Charing Cross Charmer", 1));
  }, []);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wallpaper.png")}
    >
      <SafeAreaView>
        <View style={styles.whiteCard}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Direction Number {clue.id}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.directionText}>{clue.direction}</Text>
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
  directionText: {
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
  titleContainer: {
    flexDirection: 'row',
    width: width * 0.8,
    justifyContent: 'center'
  }
});

export default GameScreen;
