import React from 'react';
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent} from 'react-native';
import { getWindow } from '../helpers/helper';

interface Props {
    onPress: (event: GestureResponderEvent) => void
    title: string  
}

export const GeneralButton: React.FC<Props> = ({ onPress, title}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer} >
            <Text style={styles.buttonText}>{title}</Text>

    </TouchableOpacity>
    )
}

const {ratio, height, width } = getWindow();
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
