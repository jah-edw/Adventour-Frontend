import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import { SafeAreaView, Image, Text,  ImageSourcePropType, StyleSheet, View, ImageBackground} from 'react-native';
import { TopNavigatorParamsList } from '../types';
import { WhiteCard } from '../components/WhiteCard'; 
import { HorizontalSlider } from '../components/HorizontalSlider';

export interface ExploreScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'ExploreScreen'>
    
} 

const ExploreScreen: React.FC<ExploreScreenProps> = ({ navigation }) => {
    return (
      <ImageBackground style={styles.background} source={ require('../assets/wallpaper.png')}>
        <SafeAreaView>
            <WhiteCard /> 
        <View>
        </View>
        </SafeAreaView>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        position: 'relative',
    },

})

export default ExploreScreen