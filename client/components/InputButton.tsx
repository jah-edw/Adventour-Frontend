import React from 'react';
import { TouchableOpacity, View, StyleSheet, TextInput, Text } from 'react-native';

export const InputButton = ({ placeholder }) => {
    return(
        <View style={styles.inputContainer}>
            <TextInput
            placeholderTextColor='black'
            style={styles.inputText}
            placeholder={placeholder}/>
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        width: 300,
        height: 55,
        borderRadius:20, 
        backgroundColor: '#116cae',
        opacity: 0.2,
        marginTop: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        shadowOffset: {width:5, height:7}, 
        shadowOpacity: 0.2,
        
    },
    inputText: {
        fontSize: 35, 
        alignSelf: 'center',
},

})