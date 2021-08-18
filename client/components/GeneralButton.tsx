import React from 'react';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';
import { getWindow } from '../helpers/helper';

const {ratio, height, width } = getWindow();


export const GeneralButton = ({ onPress, title}) => {
    return(
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer} >
        <Text style={styles.buttonText}>{title}</Text>

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
