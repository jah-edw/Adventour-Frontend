import React, { ReactNode} from 'react';
import { NavigationContainer } from '@react-navigation/native'

import {MainNavigator} from './navigation/Navigator'

export interface Props {
  // not sure what's meant to go in here?
} 


const App: React.FC<Props> = () => {
  return (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>

  );
}

export default App
