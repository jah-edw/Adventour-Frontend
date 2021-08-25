// WEAPONS

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
  Button,
  Alert,
} from "react-native";
import { CharacterClickable } from "../components/CharacterClickable";
import { getWindow } from "../helpers/helper";
import { TopNavigatorParamsList } from "../types/types";
import { getTourInfo } from "../APISERVICE/apiservice";
import {getNextClue, setClue, setHint} from '../store/actions/actions'
import { forModalPresentationIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";

interface NotebookScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "NotebookScreen">;
  source: ImageSourcePropType;
}


const NotebookScreen: React.FC<NotebookScreenProps> = ({ navigation }) => {
  const tour: any = useSelector((state) => state.tourReducer);
  const [tourInfo, setTourInfo] = useState({});
  const clue: any = useSelector((state: any) => state.gameReducer);
  const clueNumber: any = useSelector((state: any) => state.clueReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    getTourInfo(tour.id).then((info: any) => {
      info.weapons.forEach((weapon) => {
        weapon.eliminated = false;
      }),
      setTourInfo(info)
    });
  }, []);

  const handleSubmit = (answer, eliminated) => {
    const clueAnswer = clue.answer;
    if (answer == clueAnswer && eliminated === false) {
      let state = [...tourInfo.weapons]
      tourInfo.weapons.forEach((weapon) => {
        if (weapon.name === answer) {
          weapon.eliminated = true
        }
      })
      setTourInfo((prevState) => {
      return {
        ...prevState,
        ...state
      }
      })
      dispatch(setClue());
      if (clueNumber > tour.clues) {
        //navigate.navigate to gameOverScreen
      } else {
        dispatch(getNextClue('The Charing Cross Charmer', clueNumber))
        dispatch(setHint(false))
      }
    } else {
      Alert.alert('Wrong answer detective, try again.')
    }
  }

  const displayWeapons = () => {
    return tourInfo.weapons ? (
      tourInfo.weapons.map((weapon: any) => {
        return (
          <CharacterClickable
            title={weapon.number}
            img={weapon.image}
            key={Math.random()*10}
            eliminated = {weapon.eliminated}
            answer={weapon.name}
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
        <View>
          <ScrollView>
            <View style={styles.whiteCard}>
              <View style={styles.clickables}>{displayWeapons()}</View>
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
    height: height * 0.85,
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

export default NotebookScreen;
