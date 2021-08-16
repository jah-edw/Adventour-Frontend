import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Image, Text, TouchableOpacity, View } from 'react-native';
import { TopNavigatorParamsList } from '../types';


export interface LoginScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'RegisterScreen'> 
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

    return (
        <SafeAreaView>
            <View>
                <Text>This is the Login Screen</Text>
            </View>

            </SafeAreaView>
    )
}

export default LoginScreen