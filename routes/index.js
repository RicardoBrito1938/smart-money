import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../src/Pages/Main';
import NewEntry from '../src/Pages/NewEntry';
import Report from '../src/Pages/Report';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator
    initialRouteName="Main"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen name="NewEntry" component={NewEntry} />
    <Stack.Screen name="Report" component={Report} />
  </Stack.Navigator>
);

export default Routes;
