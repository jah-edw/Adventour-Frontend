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
  Alert
} from "react-native";
import { CharacterClickable } from "../components/CharacterClickable";
import { getWindow } from "../helpers/helper";
import { TopNavigatorParamsList } from "../types/types";
import { getTourInfo } from "../APISERVICE/apiservice";
import { getNextClue, setClue, setHint } from "../store/actions/actions";
import { GeneralButton } from "../components/GeneralButton";
import { createIconSetFromFontello } from "@expo/vector-icons";

interface NotebookScreen2Props {
  navigation: StackNavigationProp<TopNavigatorParamsList, "NotebookScreen2">;
  source: ImageSourcePropType;
}

const NotebookScreen2: React.FC<NotebookScreen2Props> = ({ navigation }) => {
  const tour: any = useSelector((state) => state.tourReducer);
  const [tourInfo, setTourInfo] = useState({});
  const clue: any = useSelector((state: any) => state.gameReducer);
  const clueNumber: any = useSelector((state: any) => state.clueReducer);
console.log(height, width, ratio)

  const dispatch = useDispatch();

  useEffect(() => {
    getTourInfo(tour.id).then((info: any) => {
      info.characters.forEach((character) => {
        character.eliminated = false;
      }),
      setTourInfo(info)
    });
  }, []);


  const handleSubmit = (answer, eliminated) => {
    const clueAnswer = clue.answer;
    if (answer === clueAnswer && eliminated === false) {
      let state = [...tourInfo.characters]
      tourInfo.characters.forEach((character) => {
        if (character.name === answer) {
          character.eliminated = true
        }
      })
      setTourInfo((prevState) => {
      return {
        ...prevState,
        ...state}
      })
      dispatch(setClue());
      if (clueNumber > tour.clues) {
        //navigate.navigate to gameOverScreen
        Alert.alert('Well done detective, you solved the case!')
        navigation.navigate('FinishGame')
      } else {
        dispatch(getNextClue('TheCharingCrossCharmer', clueNumber))
        dispatch(setHint(false))
      }
    } else {
      Alert.alert('Wrong answer detective, try again.')
    }
  }

  const displayCharacters = () => {
    return tourInfo.characters ? (
      tourInfo.characters.map((character: any) => {
        console.log(character.image)
        return (
          <CharacterClickable
            title={character.name}
            img={character.image}
            key={Math.random() * 10}
            eliminated = {character.eliminated}
            answer={character.name}
            handleSubmit = {handleSubmit}
          />
        );
      })
    ) : (
      <Text></Text>
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

const { height, width, ratio } = getWindow();
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
  },
  whiteCard: {
    height: height * 1.55,
    backgroundColor: "#fff",
    borderRadius: 55,
    alignItems: "center",
    marginTop: height / 15,
    paddingTop: height/18.52,
  },
  clickables: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default NotebookScreen2;
