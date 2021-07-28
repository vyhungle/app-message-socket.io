import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {navigationRef} from './rootNavigation';
import DrawerTab from './drawer';
import LoginScreen from '../screens/login/login';

export default function AppNavigator() {
  const RootStack = createStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <RootStack.Screen name="DrawerTab" component={DrawerTab} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
