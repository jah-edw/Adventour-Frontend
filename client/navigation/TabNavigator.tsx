import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GameScreen from '../screens/GameScreen';
import NotebookScreen from '../screens/NotebookScreen';


export const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return(
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Game" component={GameScreen}  />
                <Tab.Screen name="Notebook" component={NotebookScreen} /> 
            </Tab.Navigator>
    )
}

