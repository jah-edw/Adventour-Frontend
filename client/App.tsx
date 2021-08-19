import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./navigation/Navigator";

import { Provider } from 'react-redux';
import {store} from './store/store'



interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
