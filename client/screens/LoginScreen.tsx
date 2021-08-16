import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Image, ImageSourcePropType, Text, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
import { TopNavigatorParamsList } from '../types';

import { InputButton } from '../components/InputButton';
import { GeneralButton } from '../components/GeneralButton';

export interface LoginScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'RegisterScreen'> 
    source: ImageSourcePropType

}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

    return (
        <ImageBackground style={styles.background} source={ require('../assets/wallpaper.png')}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <SafeAreaView>
            <View style={styles.hiddenDiv}>
                </View>

            <View style={styles.whiteCard}>

<View style={styles.loginButtons}>

                <InputButton 
                placeholder="Email / Username"/>
                <InputButton 
                placeholder="Password"/>
                <GeneralButton // NEEDS ONPRESS
                title={'Login'} />
</View>
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
        alignItems: 'center',

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
    loginButtons: {
        marginTop: 70,
    }
})

export default LoginScreen