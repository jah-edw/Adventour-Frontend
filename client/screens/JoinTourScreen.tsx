import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { joinGame } from "../APISERVICE/apiservice";

import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { TopNavigatorParamsList } from "../types/types";
import { GeneralButton } from "../components/GeneralButton";
import { getWindow } from "../helpers/helper";

interface JoinTourProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "JoinTourScreen">;
  source: ImageSourcePropType;
}

// TODO: input field for password => when password has been entered & validated, "Start tour" appears

const JoinTourScreen: React.FC<JoinTourProps> = ({ navigation }) => {
  const booking: any = useSelector((state) => state.bookingReducer);

  const [passwordInput, setPasswordInput] = useState();

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wallpaper.png")}
    >
      <SafeAreaView>
      <KeyboardAvoidingView behavior='position' style={{height: height * 0.8}}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>

        <View style={styles.whiteCard}>
                    <Text style={styles.text}>
            Please enter the Tour code in the box below
          </Text>
          <View style={styles.inputButton}>
            <TextInput
              placeholderTextColor="#DEDEDE"
              onChangeText={(password) => setPasswordInput(password)}
              style={styles.inputText}
              placeholder="Paste your code here"
              keyboardType="numeric"
              />
          </View>
          <View style={styles.button}>
            <GeneralButton
              title="Start Tour"
              onPress={async () => {
                let passwordChecker = await joinGame(passwordInput, 1);
                passwordChecker.joined
                ? navigation.navigate("CaseFileScreen")
                : Alert.alert('Login credentials cannot be verified, please try again.');
                }}
                />
          </View>
          <View style={styles.hiddenView}></View>
        </View>
        </KeyboardAvoidingView>
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
    justifyContent: "space-between"
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
    top: height/30
  },
  hiddenView: {
    height: height/6
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
    marginTop: height / 16,
    fontSize: ratio / 20,
    paddingLeft: width / 17.5,
    paddingRight: width / 17.5,
  },
});

export default JoinTourScreen;
