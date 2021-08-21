// SUSPECTS

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
  Button,
} from "react-native";
import { CharacterClickable } from "../components/CharacterClickable";
import { getWindow } from "../helpers/helper";
import { TopNavigatorParamsList } from "../types/types";
import { getTourInfo } from "../APISERVICE/apiservice";

interface NotebookScreen2Props {
  navigation: StackNavigationProp<TopNavigatorParamsList, "NotebookScreen2">;
  source: ImageSourcePropType;
}

const NotebookScreen2: React.FC<NotebookScreen2Props> = ({ navigation }) => {
  const tour: any = useSelector((state) => state.tourReducer);
  const [tourInfo, setTourInfo] = useState({});

  useEffect(() => {
    getTourInfo(tour.id).then((info: any) => setTourInfo(info));
  }, []);

  const displayCharacters = () => {
    return tourInfo.characters ? (
      tourInfo.characters.map((character: any) => {
        return (
          <CharacterClickable
            title={character.name}
            img={character.image}
            key={Math.random()*10}
          />
        );
      })
    ) : (
      <Text>'ehhhhhh'</Text>
    );
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wallpaper.png")}
    >
      <SafeAreaView>
        <View>
          <ScrollView>
            <View style={styles.whiteCard}>
              <View style={styles.clickables}>{displayCharacters()}</View>
            </View>
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
  clickables: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default NotebookScreen2;
