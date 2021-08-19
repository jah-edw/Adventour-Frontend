import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
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
import { TopNavigatorParamsList } from "../types/types";

interface NotebookScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "NotebookScreen">;
  source: ImageSourcePropType;
}

//TODO: instead of repeated CharacterClickables, use a mapping function to
//TODO: render them based on weapons/ character arrays

const NotebookScreen: React.FC<NotebookScreenProps> = () => {
  const id: any = useSelector((state) => state.tourReducer.id);
  const [tourInfo, setTourInfo] = useState({});

  const getTourInfo = (): any => {
    fetch("http://10.10.22.219:3001/addInfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tourId: id }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setTourInfo(data));
  };

  useEffect(() => {
    getTourInfo();
  }, []);

  const displayWeapons = () => {
    return tourInfo.weapons? tourInfo.weapons.map((weapon: any) => {
      return (
        <CharacterClickable
          title={weapon.weapon}
          img={weapon.image}
          key={weapon.weapon}
        />
      );
    }) :  <Text>'ehhhhhh'</Text>
  };

  const displayCharacters = () => {
    return tourInfo.characters? tourInfo.characters.map((character: any) => {
      return (
        <CharacterClickable
          title={character.name}
          img={character.image}
          key={character.name}
        />
      );
    }) :  <Text>'ehhhhhh'</Text>
  };

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
              {displayWeapons()}
              </View>
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
