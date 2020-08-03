import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import About from '../pages/About';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    headerMode="screen"
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#fff',
      },
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="About" component={About} />
  </App.Navigator>
);

export default AppRoutes;
