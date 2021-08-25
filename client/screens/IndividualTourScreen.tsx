import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
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
import { getIndividualTour } from "../APISERVICE/apiservice";

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
  const tour: any = useSelector((state) => state.tourReducer);

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
          <Image source={{ uri: tour.images }} style={styles.container} />
          <View style={styles.mapContainer}>
            <Image style={styles.map} source={require("../assets/GoogleMapScreenShot.png")}/>
          </View>
          <View style={styles.hiddenView}>
            <Text>{tour.description || "no"}</Text>
          </View>
          <View style={styles.button}>
            <GeneralButton
              title="Buy Tour"
              onPress={() => {
                navigation.navigate("PaymentScreen");
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
  container: {
    marginTop: height/20,
    height: height / 4.63,
    width: width / 1.426,
  },
  button: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  hiddenView: {
    height: height / 4.63,
    width: width / 1.426,
    paddingTop: 30,
  },
  mapContainer: {
    height: height / 8.5,
    width: width / 1.426,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.2,
    marginTop: 30,
    alignSelf: "center",
  },
  map: {
    width: width / 1.426,

  }
});

export default IndividualTourScreen;
