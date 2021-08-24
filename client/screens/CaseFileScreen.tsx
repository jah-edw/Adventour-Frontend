import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";

import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  ImageSourcePropType,
  ImageBackground,
  ScrollView,
  Text,

} from "react-native";
import { TopNavigatorParamsList } from "../types/types";
import { getWindow } from "../helpers/helper";
import {GeneralButton} from '../components/GeneralButton';

interface CaseFileProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "CaseFileScreen">;
  source: ImageSourcePropType;
}

const CaseFileScreen: React.FC<CaseFileProps> = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wallpaper.png")}
    >
      <SafeAreaView>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
        <ScrollView>
          <View style={styles.whiteCard}>
            <Text style={styles.header}>CASE FILES</Text>

            <Text style={styles.title}>MIND THE TRAP... </Text>

            <Text style={styles.text}>
              Over the past three weeks, a series of tragic murders have been
              reported in London, all of which share some very distinct
              similarities. At each crime scene, a mysterious and taunting
              calling card was deliberately left by the unknown serial killer:
            </Text>
            <Image style={styles.card} source={require('../assets/callingcard.png')}></Image>

            <Text style={styles.text}>
              It also appears that the sequence of harrowing cases are being
              executed in alphabetical order:
            </Text>
            <Image style={styles.table} source={require('../assets/victimtable.png')}></Image>
            <Text style={styles.text}>

              The police force is anticipating another attack, but the cunning
              culprit always seems one step ahead. Does your name begin with a
              ‘D’? Are you near the Dorchester, Dominion Theatre or Downing
              Street... then watch your back! All of the suspects knew at least
              one of the victims.
            </Text>
            <Text style={styles.text}>
              You have been hired as a Private Detective to help the
              overstretched police force deduce the real identity of the
              Charmer, and send them directly to jail before they strike again.
              The game is afoot! Are you up for the challenge?
            </Text>
            <Text style={styles.title}>HOW TO SOLVE THE MURDER</Text>
            <Text style={styles.text}>
              Answer the clues as you follow the route to discover pieces of
              evidence, eliminate suspected characters and weapons, and
              ultimately deduce whodunit. If all clues are answered correctly,
              it will conclusively reveal who the murderer is and which weapon
              was used!
            </Text>
            <View style={styles.button}>
              <GeneralButton
                title="The First Location"
                onPress={() => navigation.navigate("GameScreen")}
              />
            </View>
            <View style={styles.hiddenView}></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const { ratio, height, width } = getWindow();
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  whiteCard: {
    height: height * 2,
    backgroundColor: "#fff",
    borderRadius: 55,
    alignItems: "center",
    marginTop: height / 89.6,
    justifyContent: "space-evenly",
  },
  logoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    height: height / 8.96,
  },

  logo: {
    flex: 1,
    resizeMode: "contain",
    position: "absolute",
    alignSelf: "center",
    width: width / 1.119,
  },
  button: {
    position: "relative",
    top: height / 50,
  },
  hiddenView: {
    height: height / 6,
  },
  inputButton: {
    width: width / 1.426,
    height: height / 16.836,
    borderRadius: 20,
    backgroundColor: "#B0C4DE",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.4,
  },
  inputText: {
    fontSize: ratio / 18,
    alignSelf: "center",
    color: "black",
  },
  text: {
    fontSize: ratio / 22,
    paddingLeft: width / 17.5,
    paddingRight: width / 17.5,
  },
  title: {
    fontSize: ratio / 16,
    fontWeight: "bold",
  },
  header: {
    fontSize: ratio / 8,
    fontWeight: "bold",
    color: "red",
    fontFamily: "Times New Roman",
    marginTop: height / 40,
    textDecorationLine: "underline",
  },
  table:{
    width: width / 1.1,
    height: height / 8,
  },
  card: {
      width: width / 1.1,
      height: height / 4,
  }
});

export default CaseFileScreen;
