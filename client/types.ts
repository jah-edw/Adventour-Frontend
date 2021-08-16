//Replace these with own types when necessary 


import { NavigatorScreenParams } from '@react-navigation/native';

export type RootNavigationParamsList = {
    Main: NavigatorScreenParams<TopNavigatorParamsList>
    Modal: NavigatorScreenParams<ModalNavigatorParamsList>
}

export type TopNavigatorParamsList = {
    HomeScreen: undefined
    RegisterScreen: undefined
    LoginScreen: undefined
}

export type ModalNavigatorParamsList = {
    BoatInformation: BoatParams
    Definition: { word: string; definition: string }

}

export type BoatParams = {
    name: string
    text: string
    credit: string
}