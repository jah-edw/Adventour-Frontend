import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  ImageSourcePropType,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { CharacterClickable } from "../components/CharacterClickable";
import { getWindow } from "../helpers/helper";
import { TopNavigatorParamsList } from "../types";

interface NotebookScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "NotebookScreen">;
  source: ImageSourcePropType;
}

//TODO: instead of repeated CharacterClickables, use a mapping function to
//TODO: render them based on weapons/ character arrays

const NotebookScreen: React.FC<NotebookScreenProps> = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wallpaper.png")}
    >
      <SafeAreaView>
        <View>
          <View style={styles.whiteCard}>
            <ScrollView>
              <View style={styles.clickables}>
                <CharacterClickable />
                <CharacterClickable />
                <CharacterClickable />
                <CharacterClickable />
                <CharacterClickable />
                <CharacterClickable />
                <CharacterClickable />
                <CharacterClickable />
                <CharacterClickable />
                <CharacterClickable />
              </View>

              <Text>THIS IS NOTEBOOKSCREEN</Text>
            </ScrollView>
          </View>
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
  clickables: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default NotebookScreen;
