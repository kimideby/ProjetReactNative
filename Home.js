import React from 'react';
import { 
  StyleSheet,
  View, 
  Dimensions, FlatList, Image, TouchableHighlight, Text,TouchableOpacity} from 'react-native';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={{fontSize:18}}> !!Maréu, Gestionnaire de reunions de Lamzone!! </Text>
        <Image
        style={styles.image}
        source={{uri: "https://media.istockphoto.com/vectors/save-world-logo-design-vector-id953073628"}}
      />
  
      <View >
         <Text style={styles.bienvenue}> BIENVENUE!</Text>
         </View>

         <View style={styles.text}>      
         <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('A propos')}>
          <Text style={styles.text1}>A propos</Text>
        </TouchableHighlight>
        </View> 

        <View style={styles.text}>      
         <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}  onPress={()=> this.props.navigation.navigate('Liste des salles')}>
          <Text style={styles.text1} >Voir les salles disponibles</Text>
        </TouchableHighlight>
        </View> 

        <View  style={styles.text}>
        <TouchableOpacity
          style={styles.click}>
          <Text style={styles.text1}
          onPress={() =>
            this.props.navigation.navigate('La liste des reunions')}
          >Gerez vos reunions</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1:{
    textAlign :'center',
    fontSize:20,
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: 'gray'
  },
  text: {
    borderBottomColor: '#F5FCFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    fontSize:35,
    marginBottom:20,
    textAlign :'center',
    justifyContent: 'center',
    backgroundColor:'#0F52BA'
},

bienvenue: {
  
  borderRadius:30,
  borderBottomWidth: 1,
  width:250,
  height:45,
  fontSize:35,
  marginBottom:20,
  flexDirection: 'row',
  textAlign :'center'
},

});