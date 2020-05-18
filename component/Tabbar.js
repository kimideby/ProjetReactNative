import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../Home';
import About from '../About';

const Tab = createMaterialTopTabNavigator();

export default class Tabbar extends React.Component {
  render() {
    return (
      <Tab.Navigator  >
        <Tab.Screen name="Accueil" component={Home} initialParams={{type: 'Accueil'}}  />
       
      </Tab.Navigator>

      
    )
  }
}


