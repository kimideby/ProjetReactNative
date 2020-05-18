
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-elements';

export default class SalleRow extends React.Component {

  constructor(props){
    super(props);
    this.navigation = props.navigation;
  }

  onItemClick = () => {
    console.log('onItemClick');
    this.navigation.navigate('Detail de la salle', {
      image_url: this.props.image_url,
      name: this.props.name,
      description: this.props.description,
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onItemClick}>
        <View style={styles.row}>
          <Image style={styles.picture} source={{ uri: this.props.image_url }} />
          <View style={{width: 90}} >
            <Text style={styles.primaryText}>
              {this.props.name}
            </Text>
          </View>
          <View style={{width: 200}} >
            <Text style={styles.primaryText}>
              {this.props.description}
            </Text>
          </View>

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 12 ,
    borderBottomWidth:1,
    borderBottomColor:'grey'  
  },
  picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },

  icon: {
    borderBottomWidth:1,
    borderBottomColor:'grey'  ,
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
});