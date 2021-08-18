import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, ImageBackground, Text, ImageSourcePropType, Dimensions, SafeAreaView, View } from 'react-native';
import { CurrentGame } from '../components/CurrentGame';
import { getWindow } from '../helpers/helper';

const {ratio, height, width } = getWindow();


import { TopNavigatorParamsList } from '../types'

export interface GameScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'GameScreen'>
    source: ImageSourcePropType
}

const GameScreen: React.FC<GameScreenProps> = () => {
    return (

        <ImageBackground style={styles.background} source={ require('../assets/wallpaper.png')}>
            <SafeAreaView>
            <View style={styles.whiteCard}>
                <CurrentGame/>
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
        marginTop: height/15,
        paddingTop: 50,
        
    },
})

export default GameScreen;