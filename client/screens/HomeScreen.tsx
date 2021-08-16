import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, Image, Text, TouchableOpacity, View, ImageSourcePropType } from 'react-native';

import { TopNavigatorParamsList } from '../types'
import { GeneralButton } from '../components/GeneralButton';

export interface HomeScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'HomeScreen'>
    source: ImageSourcePropType
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <ImageBackground style={styles.background} source={ require('../assets/wallpaper.png')}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <SafeAreaView>
            <View style={styles.generalButton}>
                <GeneralButton 
                onPress= { () => { navigation.navigate('LoginScreen')}}
                title={'Login'} />
            </View>
            <View style={styles.generalButton}>
                <GeneralButton 
                onPress= { () => { navigation.navigate('RegisterScreen')}}
                title={'Register'} />
            </View>


        </SafeAreaView>
        </ImageBackground>
        

    )
}


const styles = StyleSheet.create({
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
    generalButton: {
        top:300,
        alignItems: 'center',



    }
})

export default HomeScreen;


