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
import {getTourInfo} from '../APISERVICE/apiservice';

interface NotebookScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "NotebookScreen">;
  source: ImageSourcePropType;
}


const NotebookScreen: React.FC<NotebookScreenProps> = () => {
  const tour: any = useSelector((state) => state.tourReducer);
  const [tourInfo, setTourInfo] = useState({});

 

  useEffect(() => {
    getTourInfo(tour.id)
    .then((info:any) => setTourInfo(info))
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
    }) :  <Text></Text>
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
