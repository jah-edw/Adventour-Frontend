import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import { SafeAreaView, Image, Dimensions,  StyleSheet, View, ImageBackground} from 'react-native';
import { TopNavigatorParamsList } from '../types';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { InputButton } from '../components/InputButton';
import { GeneralButton } from '../components/GeneralButton';



const { height, width } = Dimensions.get('window')
export interface ExploreScreenProps {
    navigation: StackNavigationProp<TopNavigatorParamsList, 'ExploreScreen'>
    
} 

const ExploreScreen: React.FC<ExploreScreenProps> = ({ navigation }) => {
    return (
      <ImageBackground style={styles.background} source={ require('../assets/wallpaper.png')}>
      <SafeAreaView>
            <View style={styles.hiddenDiv}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
            </View>
            <View style={styles.whiteCard}>
                <InputButton placeholder="Search by genre"/>
                <View style={styles.slider}>
                    <HorizontalSlider/>
                </View>
                <View style={styles.slider}>
                    <HorizontalSlider/>
                </View>
                <GeneralButton
                title="Join Tour"
                onPress={ ()=>{navigation.navigate('IndividualTourScreen')}}/>
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
        slider:{
            marginTop: 50, 
            height:200,
        },

})

export default ExploreScreen