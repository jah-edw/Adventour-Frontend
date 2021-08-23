import { StackNavigationProp } from "@react-navigation/stack";
import React, {useState} from "react";
import { Formik } from 'formik';
import { StatusBar } from 'expo-status-bar';
import {getRegisterInfo} from '../APISERVICE/apiservice'
import MyTextInput from '../components/MyTextInput'
import {useDispatch, useSelector} from 'react-redux';

import {
  SafeAreaView,
  Image,
  ImageSourcePropType,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import {
  StyledContainer,
  PageTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  SubTitle,
  Colors,
} from '../helpers/styles';

//colors
const { darkLight, brand } = Colors;


// keyboard avoiding view
import KeyboardAvoidingWrapper from '../helpers/KeyboardAvoidingWrapper';

import { TopNavigatorParamsList } from "../types/types";

import { InputButton } from "../components/InputButton";
import { GeneralButton } from "../components/GeneralButton";
import { getWindow } from "../helpers/helper";
import { ScrollView } from "react-native-gesture-handler";

interface RegisterScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "RegisterScreen">;
  source: ImageSourcePropType;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {

  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));
  // Actual value to be sent
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };
  const newUser = useSelector((state) => state.userReducer);
  console.log(newUser);
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wallpaper.png")}
    >
      <SafeAreaView>
        <View style={styles.hiddenDiv}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
        {/* <ScrollView> */}
        <View style={styles.whiteCard}>
          <View style={styles.loginButtons}>
          <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style='dark' />
        <InnerContainer>
          <Formik
            initialValues={{
              username: '',
              email: '',
              dateOfBirth: '',
              password: '',
              confirmPassword: ''
            }}
            onSubmit={ async (values) => {
              values = { ...values };
              const newUser = await getRegisterInfo(values.username, values.confirmPassword, values.email, values.dateOfBirth)
              console.log(newUser);

              navigation.navigate('ExploreScreen');
            }}
            >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label='Full Name'
                  placeholder='Oliver Twist'
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  icon='person'
                  />
                <MyTextInput
                  label='Email Address'
                  placeholder='example@gmail.com'
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType='email-address'
                  icon='mail'
                  />
                <MyTextInput
                  label='Date of Birth'
                  placeholder='YYYY - MM - DD'
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('dateOfBirth')}
                  onBlur={handleBlur('dateOfBirth')}
                  value={values.dob}
                  icon='calendar'
                  editable={true}
                  />
                <MyTextInput
                  label='Password'
                  placeholder='* * * * * * * *'
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  icon='lock'
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  />
                <MyTextInput
                  label='Confirm Password'
                  placeholder='* * * * * * * *'
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  icon='lock'
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Signup</ButtonText>
                </StyledButton>
                <Line />
                <ExtraView>
                  <ExtraText>Already have an account? </ExtraText>
                  <TextLink
                    onPress={() => navigation.navigate('ExploreScreen')}
                    >
                    <TextLinkContent>Login</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
          </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
          </View>
        </View>
            {/* </ScrollView> */}
      </SafeAreaView>
    </ImageBackground>
  );
};



const { height, width } = getWindow();
const styles = StyleSheet.create({
  whiteCard: {
    height: height * 1.3,
    backgroundColor: "#fff",
    borderRadius: 55,
    alignItems: "center",
  },
  hiddenDiv: {
    height: height / 4.873,
    flexDirection: "column",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    position: "relative",
  },
  logo: {
    resizeMode: "contain",
    position: "absolute",
    alignSelf: "center",
    width: width / 1.15,
  },
  loginButtons: {
    // marginTop: height / 13.228,
  },
});

export default RegisterScreen;
