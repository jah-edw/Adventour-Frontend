import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window')

const ratio = width * height /1000;

export const MoreInfoButton = ({onPress, style}) => {
  return(

    <TouchableOpacity onPress={onPress} style={style} >
      <Text style={styles.buttonText}>More Info...</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: ratio / 24, 
        alignSelf: 'center',
        color: '#fff',
    }
})