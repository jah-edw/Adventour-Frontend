import React, {useState} from 'react';
import { Text, StyleSheet, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

const { width, height} = Dimensions.get('window');
const ratio = width * height /1000


const url = 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'

const image = { uri: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" };

export const Tour = ({title, img}) => {

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
      <View style={styles.container}>
        <Text style={decideStyle()}>{title}</Text>
      </View>
    </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
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
      margin: ratio/39.6,
    }
}) 