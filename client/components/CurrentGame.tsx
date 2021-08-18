import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window')

const ratio = width * height /1000

export const CurrentGame = () => {
return(
    <TouchableOpacity style={styles.buttonContainer} >

    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: width/1.1,
        height: height/1.35,
        borderRadius:20, 
        backgroundColor: '#1C76B8',
        alignItems:'center',
        shadowOffset: {width:5, height:7}, 
        shadowOpacity: 0.6,
        flexDirection: 'column',
        justifyContent: 'center',
    },


})
