import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  ImageSourcePropType,
  ImageBackground,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TopNavigatorParamsList } from "../types/types";
import { GeneralButton } from "../components/GeneralButton";
import { getWindow } from "../helpers/helper";


interface FinishGameProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "FinishGame">;
  source: ImageSourcePropType;
}

const FinishGame: React.FC<FinishGameProps> = ({ navigation }) => {





  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wallpaper.png")}
    >
      <SafeAreaView>
        <View style={styles.hiddenDiv}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
        <View style={styles.whiteCard}>
          <View style={styles.titlesContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Congratulations</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Detective,</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>You solved the case!</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Guilty Suspect: Tim Tycoon</Text>
            </View>
            <View style={styles.imgContainer}>
              <Image style={styles.image} source={{uri: 'https://i.imgur.com/nHk8EMi.png'}}></Image>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Murder Weapon: The Suitcase</Text>
            </View>
            <View style={styles.imgContainer}>
              <Image  style={styles.image}source={{uri: 'https://www.pngall.com/wp-content/uploads/2016/04/Suitcase-PNG-Pic.png'}}></Image>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <GeneralButton title='Explore Tours' onPress={() => {
              navigation.navigate('ExploreScreen')}}/>
          </View>
          <View style={styles.spaceMakingDiv}>

          </View>
        </View>
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
    height: height,
    backgroundColor: "#fff",
    borderRadius: 55,
    alignItems: "center",
    marginTop: height / 89.6,
    justifyContent: "space-between",
  },
  hiddenDiv: {
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
  titlesContainer: {
    padding: ratio * 0.1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontWeight: "bold",
    fontSize: ratio * 0.09,
  },
  textContainer: {
    paddingHorizontal: 20
  },
  image: {
    width: width / 2.4,
    height: height / 5.836,
    resizeMode: 'contain',
  },
  spaceMakingDiv: {
    height: 200
  },
  name: {
    fontWeight: "bold",
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent:'center'
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }

});

export default FinishGame

