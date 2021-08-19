import React, { useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TopNavigatorParamsList } from '../types/types';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Tour } from './Tour';
import { getTours, getToursThen } from '../APISERVICE/apiservice';

interface Props {
  navigation: StackNavigationProp<TopNavigatorParamsList, 'ExploreScreen'>;
}

export const HorizontalSlider: React.FC<Props> = ({ navigation }) => {
  const [tours, setTours] = useState([{ title: 'not working' }]);

  useEffect(() => {
    fetch('http://10.10.22.64:3001/getTours').then((response) => {
      return response.json().then((data) => {
        setTours(data);
      });
    });
  }, []);

  const displayTours = (tours) => {
    return tours.map((tour) => {
      return (
        <Tour
          title={tour.title}
          img={{ uri: tour.images }}
          key={tour.id}
          id={tour.id}
          navigation={navigation}
        />
      );
    });
  };

  return <ScrollView horizontal>{displayTours(tours)}</ScrollView>;
};
