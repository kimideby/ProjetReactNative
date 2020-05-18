import React from 'react';
import { 
  StyleSheet,
  View, Image,
  Dimensions, FlatList, Text} from 'react-native';
import { color } from 'react-native-reanimated';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default class About extends React.Component {

  render() {
    return (

      <View style={styles.main_container}>
      <Image
        style={styles.image}
        source={{uri: "https://media.istockphoto.com/vectors/save-world-logo-design-vector-id953073628"}}
      />
      <View   style={styles.description}>
          <Text style={styles.title_text}>Lamzone</Text>
        </View>
        <View style={styles.description_container}>
          <Text style={styles.description_text} >{'\n'} Fondé en 2000, Lamzone est un site de commerce en ligne présent dans plus de 40 pays.{'\n'}
            L’entreprise compte plus de 350 collaborateurs.{'\n'}
            Le chiffre d’affaires annuel de l’entreprise est de 12 millions d’euros.{'\n'}
            L’activité principale de l’entreprise est la vente de produits en ligne.</Text>     
        </View>
      </View>
   

      
    )
  }
}

const styles = StyleSheet.create({
  

  main_container: {
    height: 190,
   flex : 1
  
  },
  image: {
    flex:1,
    width: width ,
    height: 100,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  
  title_text: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingRight: 5,
    textAlign:'center'
  },
  description_container: {
    flex:1,
    
   
  },
  description_text: {
  
    fontStyle: 'italic',
    color: '#666666',
    fontWeight: "bold",
    color:'black',
    textAlign:'center',
    fontSize: 15,
  },

});