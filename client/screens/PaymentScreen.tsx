//TODO: add scrollable thing for number of players

//TODO: implement logic here so that it can only navigate to the join screen page if payment successful

import { StackNavigationProp } from "@react-navigation/stack";
import React, {useState } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  ImageSourcePropType,
  ImageBackground,
} from "react-native";
import { TopNavigatorParamsList } from "../types/types";
import { GeneralButton } from "../components/GeneralButton";
import { getWindow } from "../helpers/helper";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import {setCreateBooking} from '../store/actions/actions'




interface PaymentScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "PaymentScreen">;
  source: ImageSourcePropType;
}




const PaymentScreen: React.FC<PaymentScreenProps> = ({ navigation }) => {
  const tour = useSelector((state) => state.tourReducer);
  const [partySize, setPartySize] = useState('not working')
  const dispatch = useDispatch()

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wallpaper.png")}
    >
      <SafeAreaView>
        <View style={styles.hiddenDiv}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>



        <View style={styles.whiteCard}>
          <Text style={styles.title}>{tour.title}</Text>
          <Image source={{ uri: tour.images }} style={styles.image}/>
          <View style={styles.form}>
            <Text style={styles.text}>Number of players: </Text>
            <View style={styles.inputWrapper}>


              <TextInput
              onChangeText={string=>setPartySize(string)} 
              style={styles.inputText} />
              {console.log(`partysixe: `, partySize)}



            </View>
          </View>
          <View style={styles.button}>
            <GeneralButton
              title="Confirm Payment"
              onPress={() => {
                // const partySizeNumber = Number(partySize)
                dispatch(setCreateBooking(tour.id, 1))
                navigation.navigate("BeginTourScreen");
                console.log(`paymentscreen: `)
              }}
            />
          </View>
          <View style={styles.hiddenView}></View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const { ratio, height, width } = getWindow();
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  whiteCard: {
    height: height,
    backgroundColor: "#fff",
    borderRadius: 55,
    alignItems: "center",
    marginTop: height / 89.6,
    justifyContent: "space-between",
  },
  hiddenDiv: {
    flexDirection: "column",
    justifyContent: "center",
    height: height / 8.96,
  },

  logo: {
    flex: 1,
    resizeMode: "contain",
    position: "absolute",
    alignSelf: "center",
    width: width / 1.119,
  },
  button: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  hiddenView: {
    height: height / 6,
  },

  inputWrapper: {
    backgroundColor: "#116cae",
    opacity: 0.2,
    borderRadius: 20,
    height: height / 25,
    width: width / 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    alignSelf: "center",
    color: "black",
  },
  image: {
    height: 200,
    width: 300,
  },
  title: {
    marginTop: height/ 16,
    fontSize: ratio / 12,
  },
  form: {
    flexDirection: "row",
  },
  text:{
    alignSelf:'center',
    fontSize: ratio /15
  }
});

export default PaymentScreen;
