import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window')


export const CharacterClickable = () => {
return(
    <TouchableOpacity style={styles.buttonContainer} >

    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: width/2.4,
        height: height/5.836,
        borderRadius:20, 
        backgroundColor: '#1C76B8',
        marginTop: height/40,
        alignItems:'center',
        shadowOffset: {width:5, height:7}, 
        shadowOpacity: 0.6,
        flexDirection: 'column',
        justifyContent: 'center',
    },

})
