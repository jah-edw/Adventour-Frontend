import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Dimensions, Image, StyleSheet, View, ImageSourcePropType, ImageBackground} from 'react-native';
import { TopNavigatorParamsList } from '../types';
import { GeneralButton } from '../components/GeneralButton';
import { getWindow } from '../helpers/helper';

const {ratio, height, width } = getWindow();

export interface PaymentScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'PaymentScreen'>
    source: ImageSourcePropType
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ navigation }) => {
    return(
        <ImageBackground style={styles.background} source={ require('../assets/wallpaper.png')}>
        <SafeAreaView>
            <View style={styles.hiddenDiv}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
            </View>
            <View style={styles.whiteCard}>

            <View style={styles.button}>
                <GeneralButton
                title="Confirm Payment"
                onPress={ ()=>{navigation.navigate('GameScreen')}}/>
                </View>
            </View>

        </SafeAreaView>
        </ImageBackground>
    )    
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
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
            height:height/8.96,
        }, 
        
        logo: {
            flex:1,
            resizeMode:'contain', 
            position: 'absolute',
            alignSelf: 'center',
            width: width/1.119,
        }, 
        button: {
            flexDirection: 'column',
            justifyContent:'flex-end',
            backgroundColor:'black'
        },
        hiddenView: {
            height: 320,
            width: 290,
            paddingTop: 30,
            backgroundColor: 'black',
            
            flexDirection: 'column',
            justifyContent:'flex-end',


        }, 

})

export default PaymentScreen