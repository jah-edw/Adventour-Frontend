import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {  ImageBackground, ImageSourcePropType, StyleSheet, SafeAreaView, Text} from 'react-native';

// const { width, height } = Dimensions.get('window');


import { TopNavigatorParamsList } from '../types'

export interface NotebookScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'NotebookScreen'>
    source: ImageSourcePropType
}

const NotebookScreen: React.FC<NotebookScreenProps> = () => {
    return (
        <ImageBackground style={styles.background} source={require('../assets/notebook.png')}>
            <SafeAreaView>
                <Text>THIS IS NOTEBOOKSCREEN</Text>
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

export default NotebookScreen;