import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Teste from '../src/Pages/Teste';
import Main from '../src/Pages/Main';

const Stack = createStackNavigator();

const Routes = () => (
    <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
            headerShown: false,
            // cardStyle: {
            //     backgroundColor: '#312e38',
            // },
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Teste" component={Teste} />
    </Stack.Navigator>
);

export default Routes;
