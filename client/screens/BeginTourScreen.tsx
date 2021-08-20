//Booking confirmed screen

import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { useSelector } from "react-redux";

import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  ImageSourcePropType,
  ImageBackground,
  Text
} from "react-native";
import { TopNavigatorParamsList } from "../types/types";
import { GeneralButton } from "../components/GeneralButton";
import { getWindow } from "../helpers/helper";



interface BeginTourProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "BeginTourScreen">;
  source: ImageSourcePropType;
}

// TODO: input field for password => when password has been entered & validated, "Start tour" appears

const BeginTourScreen: React.FC<BeginTourProps> = ({ navigation }) => {

  const booking: any = useSelector((state) => state.bookingReducer);
  console.log(`booking: `, booking)


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
          <Text>booking confirmed SCREEN</Text>
          <View style={styles.button}>
            <GeneralButton
              title="Join Tour"
              onPress={() => {
                navigation.navigate("JoinTourScreen");
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const { height, width } = getWindow();
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
    backgroundColor: "black",

    flexDirection: "column",
    justifyContent: "flex-end",
  },
});

export default BeginTourScreen;
