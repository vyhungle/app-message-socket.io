import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {navigationRef} from './rootNavigation';
import DrawerTab from './drawer';
import LoginScreen from '../screens/login/login';
import RegisterScreen from '../screens/register/register';

export default function AppNavigator() {
  const {isAuth} = useSelector(s => s.auth);
  const RootStack = createStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      {isAuth ? (
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <RootStack.Screen name="DrawerTab" component={DrawerTab} />
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <RootStack.Screen name="LoginScreen" component={LoginScreen} />
          <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
}
