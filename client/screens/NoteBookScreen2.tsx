// SUSPECTS

import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
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
import { getTourInfo } from "../APISERVICE/apiservice";
import { getNextClue, setClue } from "../store/actions/actions";
import { GeneralButton } from "../components/GeneralButton";

interface NotebookScreen2Props {
  navigation: StackNavigationProp<TopNavigatorParamsList, "NotebookScreen2">;
  source: ImageSourcePropType;
}

const NotebookScreen2: React.FC<NotebookScreen2Props> = ({ navigation }) => {
  const tour: any = useSelector((state) => state.tourReducer);
  const [tourInfo, setTourInfo] = useState({});
  const clue: any = useSelector((state: any) => state.gameReducer);

  useEffect(() => {
    getTourInfo(tour.id).then((info: any) => {
      info.characters.forEach((character) => {
        character.eliminated = false;
      }),
      setTourInfo(info)
    });
  }, []);


  const handleSubmit = (title, eliminated) => {
    const answer = clue.answer;
    console.log(`nbscreen 44, :`, title, answer, eliminated)

    if (title === answer && eliminated === false) {
      let state = [...tourInfo.characters]
      tourInfo.characters.forEach((character) => {
        if (character.name === answer) {
          character.eliminated = true
        }
      })
      setTourInfo((prevState) => {
      return {...prevState,
        ...state}
      })

    }

  }

  const displayCharacters = () => {
    return tourInfo.characters ? (
      tourInfo.characters.map((character: any) => {
        return (
          <CharacterClickable
            title={character.name}
            img={character.image}
            key={Math.random() * 10}
            eliminated = {character.eliminated}
            handleSubmit = {handleSubmit}
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
        <ScrollView>
          <View style={styles.whiteCard}>
            <View style={styles.clickables}>{displayCharacters()}</View>
          </View>
        </ScrollView>
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
    height: height,
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
