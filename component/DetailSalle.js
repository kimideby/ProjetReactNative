import React from 'react';
import { 
  StyleSheet, Text, 
  View, Image, TextInput, ScrollView,
  Dimensions, TouchableOpacity, Button } from 'react-native';
  import { connect } from 'react-redux';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

 class DetailSalle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Reunion: []
    }
    this.name = props.route.params.name;
    this.image_url = props.route.params.image_url;
    this.description= props.route.params.description;
  }


  _monReducer() {
    // Définition de notre action ici

    const action = { type: "MON_REDUCER", value: this.state.Reunion}
    this.props.dispatch(action)
  
}



  render() {
    
    console.log(this.props)
    return (

      <View style={styles.container}>
        <ScrollView>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: this.image_url,
          }}
          />

        <TextInput
          placeholder='Name'
          value={this.name}
          style={styles.simpleInput}
          />
       <TextInput
          placeholder='description'
          value={this.description}
          style={styles.simpleInput}
          />
        

        
       

        <TouchableOpacity
          style={styles.buttonSave}>
          <Text style={styles.buttonText}
          onPress={() => this.props.navigation.navigate('Maréu')}>Retour</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  simpleInput: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
     
    paddingHorizontal: 10,
    borderWidth: 1
  },

  textAreaInput: {
    width: width - 40,
    marginTop: 30,
    height: 100, 
    borderColor: '#FF80AB', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  buttonSave: {
    backgroundColor: 'blue',
    borderRadius: 20,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  buttonText: {
    color: 'white'
  }
});

const mapStateToProps = (state) => {
  return {
    LesReunions: state.LesReunions
  }
}

export default connect(mapStateToProps)(DetailSalle);