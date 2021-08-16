import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export const HorizontalSlider = () => {
    return(
        <View>

        <ScrollView horizontal>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>
            <View style={styles.container}></View>


        </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width:300,
        backgroundColor:'green',
        borderColor: 'black',
        borderWidth:2,
        marginLeft:30,
        borderRadius:35,
        shadowOffset: {width:5, height:7}, 
        shadowOpacity: 0.2,
    }
}) 