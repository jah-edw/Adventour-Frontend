import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Tour} from './Tour'

const arrayOfTours = [{title: 'Tour1', rating: 1, imgUrl: {uri:'https://media.istockphoto.com/photos/studio-portrait-of-military-general-in-formal-uniform-picture-id461247467?k=6&m=461247467&s=612x612&w=0&h=YhU9PtO0IJtxhpILLMVzwIncNrSS0ogU-PYRfA3ac1M='}}, {title: 'Tour2', rating: 2, imgUrl: {uri: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'}}, {title: 'Tour3', rating: 3, imgUrl: {uri: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide-xlarge.jpg'}}, {title: 'Tour4', rating: 4, imgUrl: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLZfW66pXBiv16RZTXBYG00ERIo0sS7_WBJQ&usqp=CAU'}}]



export const HorizontalSlider = () => {

    const displayTours = (tours) => {
        return tours.map((tour) => {
            return <Tour title={tour.title} img={tour.imgUrl}/>
        })
    }
    // this will eventually map over array of tours stored in our database, and return a Tour component for each different tour.
    return(
        <ScrollView horizontal>
            {displayTours(arrayOfTours)}
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width:300,
        backgroundColor:'green',
        borderColor: 'black',
        borderWidth:2,
        marginLeft:30,
        borderRadius:35,
        shadowOffset: {width:5, height:7}, 
        shadowOpacity: 0.2,
    }, 
}) 