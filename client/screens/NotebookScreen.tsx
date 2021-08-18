import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {  ImageBackground, ImageSourcePropType, StyleSheet, SafeAreaView, Dimensions, Text, View} from 'react-native';

const { width, height } = Dimensions.get('window');

import { TopNavigatorParamsList } from '../types'

export interface NotebookScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'NotebookScreen'>
    source: ImageSourcePropType
}

const NotebookScreen: React.FC<NotebookScreenProps> = () => {
    return (
        <ImageBackground style={styles.background} source={ require('../assets/wallpaper.png')}>
            <SafeAreaView>
            <View style={styles.whiteCard}>
            <Text>THIS IS NOTEBOOKSCREEN</Text>
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

export default NotebookScreen;