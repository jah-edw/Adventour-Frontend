import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Game } from "../navigation/TabNavigator";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ExploreScreen from "../screens/ExploreScreen";
import IndividualTourScreen from "../screens/IndividualTourScreen";
import PaymentScreen from "../screens/PaymentScreen";
import BeginTourScreen from "../screens/BeginTourScreen";
import JoinTourScreen from "../screens/JoinTourScreen";
import PayScreen from "../screens/PayScreen"

const MainStack = createStackNavigator();

interface Props {}

export const MainNavigator: React.FC<Props> = () => {
  const { Navigator, Screen, Group } = MainStack;
  return (
    <Navigator initialRouteName="HomeScreen">
      <Group
        screenOptions={{
          headerShown: false,
          gestureDirection: "vertical",
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      >
        <Screen name="HomeScreen" component={HomeScreen} />
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="RegisterScreen" component={RegisterScreen} />
        <Screen name="ExploreScreen" component={ExploreScreen} />
        <Screen name="IndividualTourScreen" component={IndividualTourScreen} />
        <Screen name="PaymentScreen" component={PaymentScreen} />
        <Screen name="BeginTourScreen" component={BeginTourScreen} />
        <Screen name="GameScreen" component={Game} />
        <Screen name="JoinTourScreen" component={JoinTourScreen} />
        <Screen name="PayScreen" component={PayScreen} />
      </Group>
    </Navigator>
  );
};
