import React from 'react';
import { 
  StyleSheet,
  View, 
  Dimensions, FlatList, Text} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import SalleRow from './SalleRow';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default class ListSalles extends React.Component {

  constructor(props){
    super(props);
    this.navigation = props.navigation;
    this.state = {
      salles: []
    }
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch("https://demo5797478.mockable.io/listeDesSalles")
    .then(response => response.json())
    .then((responseJson)=> {
      console.log('We are here');
      this.setState({
        salles: responseJson
      })
    })
    .catch(error => console.log(error)) //to catch the errors if any
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.salles}
          keyExtractor={(item)=>item.id}
          renderItem={
            ({item}) => <SalleRow
            name={item.name}
            image_url={item.image_url}
            description={item.description}
            navigation={this.navigation}
          />
          }
          >
        </FlatList>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row'
  },

});