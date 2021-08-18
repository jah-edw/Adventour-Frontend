import React, { ReactNode} from 'react';
import { NavigationContainer } from '@react-navigation/native'

import {MainNavigator} from './navigation/Navigator'

const App: () => ReactNode = () => {
  return (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>

  );
}

export default App
