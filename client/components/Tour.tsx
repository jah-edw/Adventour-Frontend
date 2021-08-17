import React, {useState} from 'react';
import { Text, StyleSheet, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import {MoreInfoButton} from './MoreInfoButton'

const { width, height} = Dimensions.get('window');
const ratio = width * height /1000


const url = 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'

const image = { uri: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" };

export const Tour = ({title, img, navigation}) => {

  const [titleHidden, setTitleHidden] = useState(true);

  

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
      console.log(`pressed ${title}: titleHidden => ${titleHidden}`)
      }}>
    <ImageBackground style={styles.background} source={img}>
      <View style={styles.hiddenDiv}></View>
      <View style={styles.container}>
        <Text style={decideStyle()}>{title}</Text>
        <MoreInfoButton onPress= { () => { navigation.navigate('IndividualTourScreen')}}/>
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
        marginLeft: width/14.266
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
    }
}) 