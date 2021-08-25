import React, {useState} from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  SafeAreaView,
  Image,
  ImageSourcePropType,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../store/actions/actions'
import { StatusBar } from 'expo-status-bar';
import MyTextInput from '../components/MyTextInput'
import { Formik } from 'formik';

import {
  StyledContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  Colors
} from '../helpers/styles';
//colors
const { darkLight, brand, primary } = Colors;
// icon
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import { TopNavigatorParamsList } from "../types/types";
import { InputButton } from "../components/InputButton";
import { GeneralButton } from "../components/GeneralButton";
import { getWindow } from "../helpers/helper";



interface LoginScreenProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "RegisterScreen">;
  source: ImageSourcePropType;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const loggedInUser = useSelector((state) => state.userReducer);
  console.log(loggedInUser);
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
          <View style={styles.loginButtons}>
          <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        {/* <PageLogo resizeMode='cover' source={require('../assets/logo.png')} /> */}
        <PageTitle style={styles.blueText}>Adventour</PageTitle>
        <SubTitle style={styles.blueText}>Account Login</SubTitle>

        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={ async (values) => {
            values = { ...values };
            dispatch(loginUser(values.username, values.password))
           
                navigation.navigate('ExploreScreen');
            
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label='username'
                placeholder='username'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                icon='mail'
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
              <MsgBox>...</MsgBox>
              <StyledButton style={styles.loginButton} onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <Line />
              <StyledButton style={styles.googleButton} google={true}>
                <Fontisto name='google' size={25} color={primary} />
                <ButtonText google={true}>Sign in with Google</ButtonText>
              </StyledButton>
              <ExtraView>
                <ExtraText>Don't have an account? Sign up! </ExtraText>
                <TextLink onPress={() => navigation.navigate('RegisterScreen')}>
                  <TextLinkContent>Signup</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const { height, width } = getWindow();
const styles = StyleSheet.create({
  whiteCard: {
    height: height,
    backgroundColor: "#fff",
    borderRadius: 55,
    alignItems: "center",
  },
  hiddenDiv: {
    height: height / 4.873,
    justifyContent: "center",
    flexDirection: "column",
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
    paddingTop: height * 0.01
  },
  loginButton: {
      backgroundColor:'blue'
  },
  googleButton: {
      backgroundColor:'lightblue',
      justifyContent: "center"
  },
  blueText: {
      color: 'lightblue'
  }
});

export default LoginScreen;
