import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Image, ImageSourcePropType, Text, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
import { TopNavigatorParamsList } from '../types';


export interface LoginScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'RegisterScreen'> 
    source: ImageSourcePropType

}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

    return (
        <ImageBackground style={styles.background} source={ require('../assets/wallpaper.png')}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <SafeAreaView>
            <View>
                <Text>This is the Login Screen</Text>
            </View>
            <View style={styles.hiddenDiv}>
                </View>

            <View style={styles.whiteCard}>
                </View>


            </SafeAreaView>
            </ImageBackground>
    )
}


const styles = StyleSheet.create({
    whiteCard : {
        height: 1000,
        backgroundColor: '#fff',
        borderRadius: 55,

    },
    hiddenDiv : {
        height:190
    }, 
    background: {
        flex: 1,
        resizeMode: 'cover',
        position: 'relative',
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

export default LoginScreen