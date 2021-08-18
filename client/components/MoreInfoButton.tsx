import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { getWindow } from '../helpers/helper';

const {ratio, height, width } = getWindow();

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