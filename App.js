import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  StyleSheet} from 'react-native';

import { Provider } from 'react-redux';
import Store from './Store/configureStore';

const Stack = createStackNavigator();
import Tabbar from './component/Tabbar';
import ListeSalles from './component/ListeSalles';
import ListeReunions from './component/ListeReunions';
import DetailReunion from './component/DetailReunion';
import Connexion from './component/Connexion';
import Inscription from './component/Inscription';
import About from './About';
import DetailSalle from './component/DetailSalle';



export default class App extends React.Component {


  
  render() {
    return (
      <Provider store={Store}>
      <NavigationContainer  >
        <Stack.Navigator  initialRouteName="Inscription"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#00ACEE',
            },
            headerTintColor: '#ffff',
          }}>
          <Stack.Screen name="Maréu" component={Tabbar} />
          <Stack.Screen name="Liste des salles" component={ListeSalles} />
          <Stack.Screen name="La liste des reunions" component={ListeReunions} />
          <Stack.Screen name="Detail de la  Reunion" component={DetailReunion} />
          <Stack.Screen name="Connexion" component={Connexion} />
          <Stack.Screen name="Inscription" component={Inscription} />
          <Stack.Screen name="A propos" component={About} />
          <Stack.Screen name="Detail de la salle" component={DetailSalle} />
          
         

        </Stack.Navigator>
      </NavigationContainer>

      </Provider>
    );

    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
