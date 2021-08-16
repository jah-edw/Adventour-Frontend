import React from 'react';
import { Text, StyleSheet, View, Dimensions, ImageBackground } from 'react-native';

const url = 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'

const image = { uri: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" };

export const Tour = ({title, img}) => {
  return (
    <ImageBackground style={styles.background} source={img}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    // container: {
    //     height: 200,
    //     width:300,
    //     borderColor: 'black',
    //     borderWidth:2,
    //     marginLeft:30,
    //     borderRadius:35,
    //     shadowOffset: {width:5, height:7}, 
    //     shadowOpacity: 0.2,
    // }, 

    container: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: 200
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        height: 200,
        width: 300,
        marginLeft: 30
    },
    title: {
      color: 'white',
      fontSize: 20,
      margin: 10
    }
}) 