import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView, Image, ImageSourcePropType, View, StyleSheet, ImageBackground} from 'react-native';
import { TopNavigatorParamsList } from '../types';
import { InputButton } from '../components/InputButton';
import { GeneralButton } from '../components/GeneralButton';
import { getWindow } from '../helpers/helper';

const {height, width } = getWindow();

export interface LoginScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'RegisterScreen'> 
    source: ImageSourcePropType    
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    return (
        <ImageBackground style={styles.background} source={ require('../assets/wallpaper.png')}>
        <SafeAreaView>
            <View style={styles.hiddenDiv}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
                </View>

            <View style={styles.whiteCard}>

<View style={styles.loginButtons}>

                <InputButton
                placeholder="Email / Username"/>
                <InputButton 
                placeholder="Password"/>
                <GeneralButton
                onPress={ ()=>{navigation.navigate('ExploreScreen')}}
                title={'Login'} />
</View>
                </View>



            </SafeAreaView>
            </ImageBackground>
    )
}


const styles = StyleSheet.create({
    whiteCard : {
        height: height,
        backgroundColor: '#fff',
        borderRadius: 55,
        alignItems: 'center',

    },
    hiddenDiv : {
        height:height/4.873,
        justifyContent: 'center',
        flexDirection: 'column'
    }, 
    background: {
        flex: 1,
        resizeMode: 'cover',
        position: 'relative',
    },
    logo: {
        resizeMode:'contain', 
        position: 'absolute',
        alignSelf: 'center',
        width: width/1.15,
    },
    loginButtons: {
        marginTop: height/13.228,
    }
})

export default LoginScreen