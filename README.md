# Adventour-Frontend

Frontend for Adventour

Troubleshooting

cd client/adventour before doing npm start, otherwise 'no gulpfile found'

Error:
Cannot find module '@react-navigation/native' or its corresponding type declarations.
Fix:
From inside adventour, yarn add @react-navigation/native (same thing with npm did't work )

Error:
"Unterminated regular expression literal"
Fix:
Make sure file is in .tsx

Nice article on app structure:
https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/

// import React from 'react';
// import { SafeAreaView, Image, Dimensions, ImageSourcePropType, StyleSheet, View } from 'react-native';
// import { HorizontalSlider } from './HorizontalSlider';

// import { InputButton } from './InputButton';
// import { GeneralButton } from './GeneralButton';

// export interface WhiteCardProps {
// source: ImageSourcePropType
// }

// const { height, width } = Dimensions.get('window')

// export const WhiteCard = () => {
// return(

// <SafeAreaView>
// <View style={styles.hiddenDiv}>
// <Image style={styles.logo} source={require('../assets/logo.png')}/>
// </View>
// <View style={styles.whiteCard}>
// <InputButton placeholder="Search by genre"/>
// <View style={styles.slider}>
// <HorizontalSlider/>
// </View>
// <View style={styles.slider}>
// <HorizontalSlider/>
// </View>
// <GeneralButton
// title="Join Tour"
// onPress={()=>{}}/>
// </View>
// </SafeAreaView>

// )  
// }

// const styles = StyleSheet.create({
// background: {
// flex: 1,
// resizeMode: 'cover',
// },
// whiteCard : {
// height: 1000,
// backgroundColor: '#fff',
// borderRadius: 55,
// alignItems: 'center',
// marginTop: height/89.6,

// },
// hiddenDiv : {
// flexDirection:'column',
// justifyContent: 'center',
// height:height/8.96
// },

// logo: {
// flex:1,
// resizeMode:'contain',
// position: 'absolute',
// alignSelf: 'center',
// width: width/1.119,
// },
// slider:{
// marginTop: 50,
// height:200,
// },

// })
