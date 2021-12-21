import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './drawer'
import { NativeBaseProvider } from 'native-base';

export default () => (
  <NavigationContainer>
    <NativeBaseProvider>
    <DrawerNavigator />
    </NativeBaseProvider>
  </NavigationContainer>
)
