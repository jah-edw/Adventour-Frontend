import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window')

const ratio = width * height /1000;

export const MoreInfoButton = ({onPress}) => {
  return(

    <TouchableOpacity onPress={onPress} style={styles.buttonContainer} >
      <Text style={styles.buttonText}>More Info...</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: width/4.426,
        height: height/22.836,
        borderRadius:20, 
        backgroundColor: '#1C76B8',
        alignItems:'center',
        margin: height/73,
        shadowOffset: {width:5, height:7}, 
        shadowOpacity: 0.6,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: ratio / 24, 
        alignSelf: 'center',
        color: '#fff',
    }
})