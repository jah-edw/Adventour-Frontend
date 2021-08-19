import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  ImageSourcePropType,
  ImageBackground,
} from "react-native";
import { TopNavigatorParamsList } from "../types/types";
import { GeneralButton } from "../components/GeneralButton";
import { getWindow } from "../helpers/helper";

interface IndividualTourScreenProps {
  navigation: StackNavigationProp<
    TopNavigatorParamsList,
    "IndividualTourScreen"
  >;
  source: ImageSourcePropType;
}

const IndividualTourScreen: React.FC<IndividualTourScreenProps> = ({
  navigation,
}) => {
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
          <View style={styles.container}></View>
          <View style={styles.mapContainer}></View>

          <View style={styles.hiddenView}>
            <Text>
              {" "}
              Hey this is some random text, hopefully this will eventually be
              replaced by some useful, game related information, but until
              then...
            </Text>
          </View>
          <View style={styles.button}>
            <GeneralButton
              title="Book Tour"
              onPress={() => {
                navigation.navigate("BookingScreen");
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
    height: 1000,
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
  container: {
    height: 200,
    width: 300,
    backgroundColor: "green",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 35,
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.2,
    marginTop: 30,
    alignSelf: "center",
  },
  button: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  hiddenView: {
    height: 220,
    width: 290,
    paddingTop: 30,
  },
  mapContainer: {
    height: 100,
    width: 300,
    backgroundColor: "green",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 35,
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.2,
    marginTop: 30,
    alignSelf: "center",
  },
});

export default IndividualTourScreen;
