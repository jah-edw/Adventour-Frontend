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

interface FinishGameProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "FinishGame">;
  source: ImageSourcePropType;
}

const FinishGame: React.FC<FinishGameProps> = ({ navigation }) => {
  return (
    <Text>Finish Game</Text>
  )
}

export default FinishGame

