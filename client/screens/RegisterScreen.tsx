import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Image, Text, TouchableOpacity, View } from 'react-native';
import { TopNavigatorParamsList } from '../types';


export interface RegisterScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'RegisterScreen'> 
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {

    return (
        <SafeAreaView>
            <View>
                <Text>This is the Register Screen</Text>
            </View>

            </SafeAreaView>
    )
}

export default RegisterScreen