import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, ImageBackground, Text, ImageSourcePropType, Dimensions, SafeAreaView, View } from 'react-native';

const { width, height } = Dimensions.get('window');


import { TopNavigatorParamsList } from '../types'

export interface GameScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'GameScreen'>
    source: ImageSourcePropType
}

// TODO: add better background, resize notebook, 


const GameScreen: React.FC<GameScreenProps> = ({navigation}) => {
    return (

        <ImageBackground style={styles.background} source={ require('../assets/wallpaper.png')}>
            <SafeAreaView>
            <View style={styles.whiteCard}>
            <Text>THIS IS GAMESCREEN</Text>
            </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex:1, 
        resizeMode: 'contain',
    },
    whiteCard : {
        height: 1000,
        backgroundColor: '#fff',
        borderRadius: 55,
        alignItems: 'center',
        marginTop: height/89.6,
        
    },
})

export default GameScreen;