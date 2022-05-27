import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { RootTagContext } from 'react-native/Libraries/ReactNative/RootTag';
import {useState} from 'react';
export default function App() {
  const [enteredTask, setEnteredList]=useState(''); 
  const [listTask,setListTask]=useState([]);
  function listhandler(tasks){
   setEnteredList(tasks); 
  };
  function buttonhandler(){
    setListTask((currentListTask)=>
    [...listTask,{text:enteredTask ,key: Math.random().toString()},
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.Inputcontainer}>
      <TextInput style={styles.textInput} placeholder='Enter Your Task' onChangeText={listhandler}/>
      <Button title='Add Task ' onPress={buttonhandler}/>
      </View>
     <View style={styles.listContainer}>
      <FlatList data={listTask} renderItem={(itemData)=> {
       return(

        <View style={styles.tasksListContainer}>
        <Text style={styles.listtext}>{itemData.item.text}</Text>
       </View>
       );
      }}/>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'grey',
   
  },
  Inputcontainer:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor:'black'
  },
  textInput:{
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginRight: 8,
    backgroundColor: 'white',
    padding: 3
},
listContainer:{
 flex: 5
},
tasksListContainer:{
margin: 8,
padding :8,
borderRadius:6,
backgroundColor:'white',
color:'white',
},
listtext: {
  color:'black',
}

});
