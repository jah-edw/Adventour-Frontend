import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Tour } from "./Tour";

const arrayOfTours = [
  {
    id: 1,
    title: "Tour1",
    rating: 1,
    imgUrl: {
      uri: "https://media.istockphoto.com/photos/studio-portrait-of-military-general-in-formal-uniform-picture-id461247467?k=6&m=461247467&s=612x612&w=0&h=YhU9PtO0IJtxhpILLMVzwIncNrSS0ogU-PYRfA3ac1M=",
    },
  },
  {
    id: 2,
    title: "Tour2",
    rating: 2,
    imgUrl: {
      uri: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
  },
  {
    id: 3,
    title: "Tour3",
    rating: 3,
    imgUrl: {
      uri: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide-xlarge.jpg",
    },
  },
  {
    id: 4,
    title: "Tour4",
    rating: 4,
    imgUrl: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLZfW66pXBiv16RZTXBYG00ERIo0sS7_WBJQ&usqp=CAU",
    },
  },
];

export const HorizontalSlider = ({ navigation }) => {
  const displayTours = (tours) => {
    return tours.map((tour) => {
      return (
        <Tour
          title={tour.title}
          img={tour.imgUrl}
          key={tour.id}
          navigation={navigation}
        />
      );
    });
  };
  // this will eventually map over array of tours stored in our database, and return a Tour component for each different tour.
  return <ScrollView horizontal>{displayTours(arrayOfTours)}</ScrollView>;
};
