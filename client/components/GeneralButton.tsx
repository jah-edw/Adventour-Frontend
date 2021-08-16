import React from 'react';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';

export const GeneralButton = ({ onPress, title}) => {
    return(
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer} >
        <Text style={styles.buttonText}>{title}</Text>

    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 300,
        height: 55,
        borderRadius:20, 
        backgroundColor: '#1C76B8',
        marginTop: 30,
        alignItems:'center',
        shadowOffset: {width:5, height:7}, 
        shadowOpacity: 0.6,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 35, 
        alignSelf: 'center',
        color: '#fff',
    }

})
