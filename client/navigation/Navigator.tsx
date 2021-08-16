import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ExploreScreen from '../screens/ExploreScreen';

const MainStack = createStackNavigator();

const MainNavigator: React.FC = () => {
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

        </Navigator>
    )
}

export default MainNavigator