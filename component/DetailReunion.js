import React from 'react';
import { 
  StyleSheet, Text, 
  View, Image, TextInput, 
  Dimensions,ScrollView, TouchableOpacity } from 'react-native';
  

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class DetailReunion extends React.Component {

  constructor(props) {
    super(props);
    this.name = props.route.params.name;
    this.image_url = props.route.params.image_url;
  }

  render() {
    return (

      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
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
          placeholder='Phone number'
          style={styles.simpleInput}
          />

        <TextInput
          placeholder='Address'
          style={styles.simpleInput}
          />

        <TextInput
          placeholder='About me'
          multiline = {true}
          numberOfLines = {4}
          style={styles.textAreaInput}
          />
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
    borderRadius: 50
  },

  simpleInput: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
    borderColor: 'black', 
    paddingHorizontal: 10,
    borderWidth: 1
  },

  textAreaInput: {
    width: width - 40,
    marginTop: 30,
    height: 100, 
    borderColor: 'black', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  buttonSave: {
    backgroundColor: '#FF80AB',
    borderRadius: 20,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: 'white'
  }
});
