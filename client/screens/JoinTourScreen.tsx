import { StackNavigationProp } from "@react-navigation/stack";
import React, {useState} from "react";
import { useSelector } from "react-redux";

import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
  ImageBackground,
  TextInput,
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

  const [passwordInput, setPasswordInput] = useState()
  console.log(`booking in JoinTourScreen: `, booking);

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
        <View style={styles.inputButton}>
          <TextInput placeholderTextColor='#DEDEDE' 
          onChangeText={(password)=>setPasswordInput(password)}
          style={styles.inputText} placeholder="Paste your code here" keyboardType='numeric'/>
        </View>
          <View style={styles.button}>
            <GeneralButton
              title="Start Tour"
              onPress={() => {
                passwordInput && passwordInput === booking.password.toString() ? navigation.navigate("GameScreen") : 
                console.log(`booking password & password Input: `, booking.password.toString(), passwordInput)
              }}
            />
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
  button: {
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "black",
  },
  hiddenView: {
    height: 320,
    width: 290,
    paddingTop: 30,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  inputButton: {
    width: width / 1.426,
    height: height / 16.836,
    borderRadius: 20,
    backgroundColor: "#B0C4DE",
    marginTop: height / 30.866,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.4,
  },
  inputText: {
    fontSize: ratio / 18,
    alignSelf: "center",
    color: 'black'
  },
});

export default JoinTourScreen;
