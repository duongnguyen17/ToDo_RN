import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import ListDetail from './screens/ListDetail';
import TaskDetail from './screens/TaskDetail';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={ListDetail} name="ListDetail" />
        <Stack.Screen component={TaskDetail} name="TaskDetail" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
