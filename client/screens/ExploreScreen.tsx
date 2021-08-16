import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import { SafeAreaView, Image, Text,  ImageSourcePropType, StyleSheet, View} from 'react-native';
import { TopNavigatorParamsList } from '../types';
import { WhiteCard } from '../components/WhiteCard'; 

export interface ExploreScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'ExploreScreen'>
    
} 

const ExploreScreen: React.FC<ExploreScreenProps> = ({ navigation }) => {
    return (
        <View>
            <WhiteCard />

            <Text>explore screen</Text>
        </View>
    )
}

export default ExploreScreen