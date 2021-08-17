import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ExploreScreen from '../screens/ExploreScreen';
import IndividualTourScreen from '../screens/IndividualTourScreen'
import BookingScreen from '../screens/BookingScreen';
import PaymentScreen from '../screens/PaymentScreen';

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

export default MainNavigator