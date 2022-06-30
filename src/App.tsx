/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Provider } from 'react-redux';

import { HomeScreen } from './Screens/HomeScreen/HomeScreen';
import { CountScreen } from './Screens/CountScreen/CountScreen';
import { store } from './store';

const Nav = createBottomTabNavigator();

export const App = () => {
  return (
    // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Nav.Navigator>
            <Nav.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Nav.Screen
              name="Count"
              component={CountScreen}
              options={{
                tabBarLabel: 'Count',
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="add-circle" color={color} size={26} />
                ),
              }}
            />
          </Nav.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
