import React, { useState, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { TopNavigatorParamsList } from "../types/types";
import { ScrollView } from "react-native-gesture-handler";
import { Tour } from "./Tour";
import {getTours} from '../APISERVICE/apiservice'

interface Props {
  navigation: StackNavigationProp<TopNavigatorParamsList, "IndividualTourScreen">;

}

export const HorizontalSlider: React.FC<Props> = ({navigation}) => {
  const [tours, setTours] = useState<Array<any>>([]);


  useEffect(() => {
    getTours()
    .then((tours:any) => setTours(tours) )
  }, []);

  const displayTours = (tours: any) => {
    return tours.map((tour: any) => {
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
