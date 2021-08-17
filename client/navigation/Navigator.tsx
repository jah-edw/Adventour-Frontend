import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Foundation } from '@expo/vector-icons';


//TODO: move screen imports to another file?

import GameScreen from '../screens/GameScreen';
import NotebookScreen from '../screens/NotebookScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ExploreScreen from '../screens/ExploreScreen';
import IndividualTourScreen from '../screens/IndividualTourScreen'
import BookingScreen from '../screens/BookingScreen';
import PaymentScreen from '../screens/PaymentScreen';


const MainStack = createStackNavigator();

export const MainNavigator: React.FC = () => {
    const { Navigator, Screen } = MainStack
    return (
        <Navigator initialRouteName="HomeScreen">
            <Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{ headerShown: false }} />
            <Screen 
            name="LoginScreen" 
            component={LoginScreen}
            options={{ headerShown: false }} />
            <Screen 
            name="RegisterScreen" 
            component={RegisterScreen} 
            options={{ headerShown: false }}/>
            <Screen 
            name="ExploreScreen" 
            component={ExploreScreen} 
            options={{ headerShown: false }}/>
            <Screen 
            name="IndividualTourScreen" 
            component={IndividualTourScreen} 
            options={{ headerShown: false }}/>
            <Screen 
            name="BookingScreen" 
            component={BookingScreen} 
            options={{ headerShown: false }}/>
            <Screen 
            name="PaymentScreen" 
            component={PaymentScreen} 
            options={{ headerShown: false }}/>
            

        </Navigator>
    )
}



const Tabs = createBottomTabNavigator();

export default () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen 
            name="Game" 
            component={GameScreen} 
            options={{ 
                headerShown: false,
            tabBarLabel: 'Game',
        tabBarIcon: () =>(
<Foundation name="magnifying-glass" size={24} color="black" />

        ) }} 
            />
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

