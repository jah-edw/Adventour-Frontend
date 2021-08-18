//TODO: add scrollable thing for number of players 

import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, View, ImageSourcePropType, ImageBackground} from 'react-native';
import { TopNavigatorParamsList } from '../types';
import { GeneralButton } from '../components/GeneralButton';
import { getWindow } from '../helpers/helper';


const {height, width } = getWindow();


export interface BookingScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'BookingScreen'>
    source: ImageSourcePropType
}

const BookingScreen: React.FC<BookingScreenProps> = ({ navigation }) => {
    return(
        <ImageBackground style={styles.background} source={ require('../assets/wallpaper.png')}>
        <SafeAreaView>
            <View style={styles.hiddenDiv}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
            </View>
            <View style={styles.whiteCard}>
            <View style={styles.mapContainer}></View>
            <View style={styles.datePicker}></View>

            <View style={styles.hiddenView}>
                <Text>Number of players: </Text>
            </View>
            <View style={styles.button}>
                <GeneralButton
                title="Confirm Booking"
                onPress={ ()=>{navigation.navigate('PaymentScreen')}}/>
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
            height:height/8.96
        }, 
        
        logo: {
            flex:1,
            resizeMode:'contain', 
            position: 'absolute',
            alignSelf: 'center',
            width: width/1.119,
        },
        datePicker: {
            height: 300,
            width:300,
            backgroundColor:'green',
            borderColor: 'black',
            borderWidth:2,
            borderRadius:35,
            shadowOffset: {width:5, height:7}, 
            shadowOpacity: 0.2,
            marginTop: 30,
            alignSelf:'center',
        }, 
        button: {
            flexDirection: 'column',
            justifyContent:'flex-end',
        },
        hiddenView: {
            height: 120,
            width: 290,
            paddingTop: 30,

        }, 
        mapContainer: {
            height: 100,
            width:300,
            backgroundColor:'green',
            borderColor: 'black',
            borderWidth:2,
            borderRadius:35,
            shadowOffset: {width:5, height:7}, 
            shadowOpacity: 0.2,
            marginTop: 30,
            alignSelf:'center',
        }
})

export default BookingScreen