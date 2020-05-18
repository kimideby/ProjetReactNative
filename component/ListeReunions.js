import React from 'react';
import { 
  StyleSheet,
  View, TouchableWithoutFeedback,TouchableOpacity,
  Dimensions, FlatList, Text, Button} from 'react-native';
import { FloatingAction } from "react-native-floating-action";

import { TextInput, ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import TimePicker from "react-native-24h-timepicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import { SearchBar } from 'react-native-elements';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const actions = [
  {
    text: "Add",
    icon: require("./../assets/add_white.png"),
    name: "bt_add",
    position: 1
  }
];

export default class ListeReunions extends React.Component {

  constructor(props){
    super(props);
    this.navigation = props.navigation;
    this.state = {
      Reunions: [{
        id: 1,
        sujet: "sujet A",
        participants: "Babacar@gmail.com, Alassane@gmail.com",
        salle: "Salle n°1",
        lieu: "ESMT MALI",
        date: "2020-05-15",
        time: "15:12"

      },

      {
        id: 2,
        sujet: "sujet B",
        participants: "daro@gmail.com, Alain@gmail.com, vero@gmail.com",
        salle: "Salle n°2",
        lieu: "ESMT Dakar",
        date: "2020-05-12",
        time: "13:12"

      },
      {
        id: 3,
        sujet: "sujet C",
        participants: ", Alassane@gmail.com,  Alain@gmail.com",
        salle: "Salle n°6",
        lieu: "Congo",
        date: "2020-05-15",
        time: "15:12"

      },

      {
        id: 4,
        sujet: "sujet D",
        participants: "daro@gmail.com, Babacar@gmail.com, vero@gmail.com",
        salle: "Salle n°10",
        lieu: "Capt vert",
        date: "2020-05-12",
        time: "13:12"

      },

    ],
      printing : true,
      id: 1,
    }
  }

showAdding(){
  this.setState({printing :  false});
}
addMeeting(reunion){

  this.state.Reunions.push(reunion);
  this.setState({printing :  true, id: this.state.id + 1});
  
}

removeMeeting(id){
  console.log(id);
this.setState({Reunions: this.state.Reunions.filter((reunion)=> reunion.id != id)});

}


  render() {


    let tmp = (
      
      <View style={styles.container}>
      
      
       { this.state.Reunions.map((reunion)=>{

         return ( <Text style={styles.container1}>
        <Text>
         <Text style={styles.text}>{reunion.sujet}       </Text> 
         <Text style={styles.text}>{reunion.salle}      </Text> 
         <Text style={styles.text}>{reunion.lieu}      </Text>
         <Text style={styles.text}>{reunion.date}       </Text> 
         <Text style={styles.text}>{reunion.time}      </Text>
         <Text style={styles.text} >    {reunion.participants}  {'\n'} </Text>  
         </Text>
          <Text style={styles.textSup} title="sup" onPress={()=>{ this.removeMeeting(reunion.id); }}>   supprimer   </Text> 
          <Text style={styles.text}>  {'\n'}   </Text>
          </Text>) ;
        })} 
      
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            if(name === 'bt_add') {
             // this.props.navigation.navigate('Selectionnez une salle');
             this.showAdding();
            }
          }}
        />
      </View>
    );
    if(!this.state.printing){
      tmp =  (
        <ScrollView>
        <View style={styles.container} >
      <Text> {'\n'}Veuillez remplir ce formulaire</Text>

          <TextInput placeholder="sujet"
           style={styles.textForm}
          onChangeText={ TextInputValue =>
            this.setState({sujet: TextInputValue }) }
          ></TextInput>

          <TextInput placeholder="lieu"
           style={styles.textForm}
          onChangeText={ TextInputValue =>
            this.setState({lieu: TextInputValue }) }></TextInput>
      <View style={styles.form}>
          <DatePicker 
          style={styles.textPicker}
           mode="date"
        placeholder="selectionnez la date"
        format="YYYY-MM-DD"
        date={this.state.date}

        onDateChange={(date) => {this.setState({date: date})}}

        ></DatePicker>

      <DatePicker  mode="time"
      style={styles.textPicker}
        placeholder="selectionnez l'heure"
        timeFormat="HH:mm"
        time={this.state.time}
        is24Hour = { true }
        onChange={(time) => {this.setState({ time: `${hour}:${minute}` })}}

        ></DatePicker>
      </View>
          <TextInput placeholder="participant"
           style={styles.textForm}
           multiline = {true}
           numberOfLines = {4}
          onChangeText={ TextInputValue =>
            this.setState({participants: TextInputValue }) }></TextInput>

          <TextInput placeholder="salle"
           style={styles.textForm}
          onChangeText={ TextInputValue =>
            this.setState({salle: TextInputValue }) }></TextInput>

          <Button title="Envoyez" onPress={ ()=>{
            this.addMeeting({
            id: this.state.id+1,
            sujet: this.state.sujet,
            lieu: this.state.lieu,
            participants: this.state.participants,
            salle: this.state.salle,
            date: this.state.date
          })
          } }></Button>

        </View>
        </ScrollView>
      );
    }
    return tmp;
  }
}




const styles = StyleSheet.create({
  container: {
    borderColor: 'black', 
    flex: 1,
    backgroundColor: '#fff',
    textAlign:'center',
    justifyContent: 'center',
    color:'black',
  },
  formcontainer:{
    borderWidth: 1,
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textForm: {
   
    width: '80%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 2,
    flex:1,
    fontSize:15, 
    marginTop: 30,
    height: 40, 
    paddingHorizontal: 10,
    borderWidth: 1
    
},
textPicker:{
  flexDirection: 'column',
  marginTop: 30,
},
form:{
  justifyContent: 'space-around',
  alignSelf: "center",
  width: '80%',
  
},

text: {
  flex:1,
  alignSelf: "center",
    fontSize:15, 
    marginRight:10,
    paddingBottom:10,
    backgroundColor: 'white',
},

textSup:{
  flex:1,
    fontSize:20,
    backgroundColor: 'red',
},

});

