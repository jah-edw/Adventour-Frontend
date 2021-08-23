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
          <ScrollView>
            <Text>{clue.direction}</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const { height } = getWindow();
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
  },
  whiteCard: {
    height: 1000,
    backgroundColor: "#fff",
    borderRadius: 55,
    alignItems: "center",
    marginTop: height / 15,
    paddingTop: 50,
  },
});

export default GameScreen;
