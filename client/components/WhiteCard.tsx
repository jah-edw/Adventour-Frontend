import React from 'react';
import { SafeAreaView, Image, Dimensions, ImageSourcePropType, ImageBackground, StyleSheet, View, Text } from 'react-native';


export interface WhiteCardProps {
    source: ImageSourcePropType
}

const { height, width } = Dimensions.get('window')

export const WhiteCard = () => {
    console.log(height, width)
  return(

      <SafeAreaView>
            <View style={styles.hiddenDiv}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            </View>
            <View style={styles.whiteCard}></View>
        </SafeAreaView>
      
  )   
} 

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        position: 'relative',
    },
    whiteCard : {
        height: 1000,
        backgroundColor: '#fff',
        borderRadius: 55,
        alignItems: 'center',
        marginTop: height/89.6,

    },
    hiddenDiv : {
        flexDirection:'column',
        justifyContent: 'center',
        height:height/8.96
    }, 

    logo: {
        flex:1,
        resizeMode:'contain', 
        position: 'absolute',
        alignSelf: 'center',
        width: width/1.119,
    },

})