//Replace these with own types when necessary 


import { NavigatorScreenParams } from '@react-navigation/native';

export type RootNavigationParamsList = {
    Main: NavigatorScreenParams<TopNavigatorParamsList>
    // Modal: NavigatorScreenParams<ModalNavigatorParamsList>
}

export type TopNavigatorParamsList = {
    HomeScreen: undefined
    RegisterScreen: undefined
    LoginScreen: undefined
    ExploreScreen: undefined
    IndividualTourScreen: undefined
    BeginTourScreen: undefined
    PaymentScreen: undefined
    GameScreen: undefined
    NotebookScreen: undefined
    JoinTourScreen: undefined
}

// export type ModalNavigatorParamsList = {
//     BoatInformation: BoatParams
//     Definition: { word: string; definition: string }

// }

// export type BoatParams = {
//     name: string
//     text: string
//     credit: string
// }