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

const verticalAnimation = {
    headerShown: false,
  gestureDirection: 'vertical',
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
};

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
            options={verticalAnimation}/>
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