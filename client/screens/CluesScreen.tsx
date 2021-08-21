//CLUES

import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  View,
  ScrollView,
} from "react-native";
import { CurrentGame } from "../components/CurrentGame";
import { getWindow } from "../helpers/helper";
import { TopNavigatorParamsList } from "../types/types";

interface CluesScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "GameScreen">;
  source: ImageSourcePropType;
}

const CluesScreen: React.FC<CluesScreenProps> = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wallpaper.png")}
    >
      <SafeAreaView>
        <View style={styles.whiteCard}>
          <ScrollView>
            <CurrentGame />
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

export default CluesScreen;
