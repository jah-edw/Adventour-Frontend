import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions, SafeAreaView} from 'react-native';

const { width, height } = Dimensions.get('window')

const ratio = width * height /1000

export const CharacterClickable = () => {
    console.log(width, height, ratio)
    return(
        <SafeAreaView>

    <TouchableOpacity style={styles.buttonContainer} >

    </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: width/3.1,
        height: height/5.836,
        borderRadius:20, 
        backgroundColor: '#1C76B8',
        marginTop: height/120,
        alignItems:'center',
        shadowOffset: {width:5, height:7}, 
        shadowOpacity: 0.6,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: ratio / 12, 
        alignSelf: 'center',
        color: '#fff',
    }

})
