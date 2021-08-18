import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainNavigator } from "./navigation/Navigator";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
