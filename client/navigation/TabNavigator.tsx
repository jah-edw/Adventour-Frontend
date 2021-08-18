import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Foundation } from '@expo/vector-icons';

import GameScreen from '../screens/GameScreen';
import NotebookScreen from '../screens/NotebookScreen';

const Tabs = createBottomTabNavigator();

export const Game: React.FC = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen 
            name="Game" 
            component={GameScreen} 
            options={{ 
                headerShown: false,
                tabBarLabel: 'Game',
                tabBarIcon: () => (
                <Foundation name="magnifying-glass" size={24} color="black" />
                ) 
            }} />
            <Tabs.Screen 
            name="Notebook" 
            component={NotebookScreen} 
            options={{ 
                headerShown: false,
            tabBarLabel: 'Notebook',
            tabBarIcon: () => (
            <SimpleLineIcons name="notebook" size={24} color="black" />

        ) }} 
            />
        </Tabs.Navigator>
    )
}
