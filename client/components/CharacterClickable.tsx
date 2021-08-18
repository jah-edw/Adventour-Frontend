import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window')

const ratio = width * height /1000

export const CharacterClickable = ({ onPress }) => {
    console.log(width, height, ratio)
    return(
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer} >

    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: width/1.426,
        height: height/16.836,
        borderRadius:20, 
        backgroundColor: '#1C76B8',
        marginTop: height/30,
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
