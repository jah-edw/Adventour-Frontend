import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
  Text
} from "react-native";
import { TopNavigatorParamsList } from "../types/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { HorizontalSlider } from "../components/HorizontalSlider";
import { InputButton } from "../components/InputButton";
import { GeneralButton } from "../components/GeneralButton";
import { getWindow } from "../helpers/helper";

interface ExploreScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "IndividualTourScreen">;
  source: ImageSourcePropType;
}

const ExploreScreen: React.FC<ExploreScreenProps> = ({ navigation }) => {
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
          <InputButton placeholder="Search by genre" />
          <View style={styles.slider}>
            <HorizontalSlider navigation={navigation}/>
          </View>
          <View style={styles.slider}>
            <HorizontalSlider navigation={navigation}/>
          </View>
          <GeneralButton
            title="Join Tour"
            onPress={() => {
              navigation.navigate("JoinTourScreen"); // THIS ROUTE IS WRONG
            }}
          />
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
  slider: {
    marginTop: height / 18.52,
    height: height / 4.63,
  },
});

export default ExploreScreen;
