import React, {useState} from 'react';
import { Text, StyleSheet, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import {MoreInfoButton} from './MoreInfoButton'

const { width, height} = Dimensions.get('window');
const ratio = width * height /1000


export const Tour = ({title, img, navigation}) => {

  const [titleHidden, setTitleHidden] = useState(true);

  const [buttonHidden, setButtonHidden] = useState(true);

  const decideButtonStyle = () => {
    if (buttonHidden === true) {
      return styles.hiddenButton;
    } else {
      return styles.shownButton;
    }
  }

  

  const decideStyle = () => {
    if (titleHidden === true) {
      return styles.titleHidden;
    } else {
      return styles.titleShown;
    }
  }
  return (
    <TouchableOpacity onPress={() => {
      setTitleHidden(!titleHidden);
      setButtonHidden(!buttonHidden);
      console.log(`pressed ${title}: titleHidden => ${titleHidden}`)
      }}>
    <ImageBackground style={styles.background} source={img}>
      <View style={styles.hiddenDiv}></View>
      <View style={styles.container}>
        <Text style={decideStyle()}>{title}</Text>
        <MoreInfoButton 
          onPress= { () => { navigation.navigate('IndividualTourScreen');console.log(`set global state to selected tour to ${title}`)}}
          style={decideButtonStyle()}/>
      </View>
    </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: height/4.63
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        height: height/4.63,
        width: width/1.426,
        marginLeft: width/28,
        marginRight: width/28
    },
    titleHidden: {
      color: 'white',
      fontSize: ratio/19.8,
      margin: ratio/39.6,
      display: 'none'
    },
    titleShown: {
      color: 'white',
      fontSize: ratio/19.8,
      marginTop: height/40,
      marginLeft: width/50
    },
    hidden: {
      display: 'none'
    },
    hiddenDiv: {
      height: height/7
    },
    shownButton: {
    width: width/4.426,
    height: height/22.836,
    borderRadius:20, 
    backgroundColor: '#1C76B8',
    alignItems:'center',
    margin: height/73,
    shadowOffset: {width:5, height:7}, 
    shadowOpacity: 0.6,
    flexDirection: 'column',
    justifyContent: 'center',
    },
    hiddenButton: {
    width: width/4.426,
    height: height/22.836,
    borderRadius:20, 
    backgroundColor: '#1C76B8',
    alignItems:'center',
    margin: height/73,
    shadowOffset: {width:5, height:7}, 
    shadowOpacity: 0.6,
    flexDirection: 'column',
    justifyContent: 'center',
    display: 'none'
    }
}) 