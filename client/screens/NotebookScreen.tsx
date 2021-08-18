import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {  ImageBackground, ScrollView, ImageSourcePropType, StyleSheet, SafeAreaView, Dimensions, Text, View} from 'react-native';
import { CharacterClickable } from '../components/CharacterClickable';

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
                <ScrollView>
                <View style={styles.clickables}>
                <CharacterClickable/>
                <CharacterClickable/>
                <CharacterClickable/>
                <CharacterClickable/>
                <CharacterClickable/>
                <CharacterClickable/>
                <CharacterClickable/>
                <CharacterClickable/>
                <CharacterClickable/>
                </View>

            <Text>THIS IS NOTEBOOKSCREEN</Text>
            </ScrollView>
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
    clickables: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default NotebookScreen;