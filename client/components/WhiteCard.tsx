import React from 'react';
import { SafeAreaView, Image, ImageSourcePropType, ImageBackground, StyleSheet, View } from 'react-native';


export interface WhiteCardProps {
    source: ImageSourcePropType
}

export const WhiteCard = () => {
  return(
      <View>
        <ImageBackground style={styles.background} source={ require('../assets/wallpaper.png')}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <SafeAreaView>
            <View style={styles.hiddenDiv}>
            <View style={styles.whiteCard}></View>
            </View>
        </SafeAreaView>
        </ImageBackground>
      </View>
  )   
} 

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        position: 'relative',
    },
    whiteCard : {
        height: 600,
        backgroundColor: '#fff',
        borderRadius: 55,
        alignItems: 'center',

    },
    hiddenDiv : {
        height:200
    }, 

    logo: {
        flex:0.3,
        resizeMode:'contain', 
        position: 'absolute',
        alignSelf: 'center',
        width: 370,
        top:80,
    },

})