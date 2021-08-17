import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, ImageBackground, Text, ImageSourcePropType, Dimensions, SafeAreaView } from 'react-native';



const { width, height } = Dimensions.get('window');


import { TopNavigatorParamsList } from '../types'

export interface GameScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'GameScreen'>
    source: ImageSourcePropType
}

// TODO: add better background, resize notebook, 


const GameScreen: React.FC<GameScreenProps> = () => {
    return (
        <ImageBackground style={styles.background} source={require('../assets/notebook.png')}>
            <SafeAreaView>
            <Text>THIS IS GAMESCREEN</Text>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex:1, 
        resizeMode: 'contain',
    }
})

export default GameScreen;