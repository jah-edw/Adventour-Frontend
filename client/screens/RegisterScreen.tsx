import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  SafeAreaView,
  Image,
  ImageSourcePropType,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { TopNavigatorParamsList } from "../types";

import { InputButton } from "../components/InputButton";
import { GeneralButton } from "../components/GeneralButton";
import { getWindow } from "../helpers/helper";

interface RegisterScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "RegisterScreen">;
  source: ImageSourcePropType;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
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
          <View style={styles.loginButtons}>
            <InputButton placeholder="Email" />
            <InputButton placeholder="Username" />
            <InputButton placeholder="Date of Birth" />
            <InputButton placeholder="Password" />
            <InputButton placeholder="Confirm Password" />
            <GeneralButton
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
              title={"Register"}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const { height, width } = getWindow();
const styles = StyleSheet.create({
  whiteCard: {
    height: height,
    backgroundColor: "#fff",
    borderRadius: 55,
    alignItems: "center",
  },
  hiddenDiv: {
    height: height / 4.873,
    flexDirection: "column",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    position: "relative",
  },
  logo: {
    resizeMode: "contain",
    position: "absolute",
    alignSelf: "center",
    width: width / 1.15,
  },
  loginButtons: {
    marginTop: height / 13.228,
  },
});

export default RegisterScreen;
