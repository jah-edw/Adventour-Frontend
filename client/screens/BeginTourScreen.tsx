//Booking confirmed screen

//TODO: import onClick functionality clipboard

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
  Text,
  Clipboard,
  TouchableOpacity,
  Alert,
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

  const copyToClipboard = () => {
    Clipboard.setString(booking.password.toString());
  };

  const handleOnPress = () => {
    copyToClipboard();
    Alert.alert("Code copied!");
  };

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
          <Text style={styles.booking}>
            Your booking has been confirmed! Please copy the code below &
            enter it somewhere later
          </Text>

          <TouchableOpacity onPress={handleOnPress}>
            <Text style={styles.password}>{booking.password}</Text>
          </TouchableOpacity>

          <View style={styles.button}>
            <GeneralButton
              title="Join Tour"
              onPress={() => {
                navigation.navigate("JoinTourScreen");
              }}
            />
          </View>
          <View style={styles.hiddenView}></View>
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
  button: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  hiddenView: {
    height: height / 6,
  },
  booking: {
    marginTop: height / 16,
    fontSize: ratio / 20,
    paddingLeft: width / 15,
    paddingRight: width / 15,
  },
  password: {
    fontWeight: "bold",
    fontSize: ratio / 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
});

export default BeginTourScreen;
