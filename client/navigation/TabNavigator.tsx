import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons, Foundation, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import GameScreen from "../screens/GameScreen";
import NotebookScreen from "../screens/NotebookScreen";
import NotebookScreen2 from "../screens/NoteBookScreen2";
import CluesScreen from '../screens/CluesScreen';

const Tabs = createBottomTabNavigator();

interface Props {}

export const Game: React.FC<Props> = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Directions"
        component={GameScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Directions",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="directions-fork" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Clues"
        component={CluesScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Clues",
          tabBarIcon: () => (
            <Foundation name="magnifying-glass" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Weapons"
        component={NotebookScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Weapons",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="knife" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Suspects"
        component={NotebookScreen2}
        options={{
          headerShown: false,
          tabBarLabel: "Suspects",
          tabBarIcon: () => (
            <Ionicons name="person-sharp" size={24} color="black" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
