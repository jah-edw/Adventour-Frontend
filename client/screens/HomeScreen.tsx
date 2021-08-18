import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { getWindow } from "../helpers/helper";
import { TopNavigatorParamsList } from "../types";
import { GeneralButton } from "../components/GeneralButton";

interface HomeScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "HomeScreen">;
  source: ImageSourcePropType;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wallpaper.png")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <SafeAreaView>
        <View style={styles.generalButton}>
          <GeneralButton
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
            title={"Login"}
          />
        </View>
        <View style={styles.generalButton}>
          <GeneralButton
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
            title={"Register"}
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
    position: "relative",
  },
  logo: {
    flex: 0.3,
    resizeMode: "contain",
    position: "absolute",
    alignSelf: "center",
    width: width / 1.156,
    top: height / 11.575,
  },
  generalButton: {
    top: height / 3.086,
    alignItems: "center",
  },
});

export default HomeScreen;
