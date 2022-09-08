import React,{useState} from 'react';
import {View, StyleSheet, TouchableOpacity,Text} from 'react-native';
import Viewer from "./components/view"
import Button from "./components/button"
import ActionsButtons from "./components/actions"

const App = () => {

const [counter, setCounter] = useState(0);

handleUPCounter =() =>{
  setCounter(counter+1)
}
handleDownCounter =() =>{
  setCounter(counter-1)
}

handleReset = () =>{
  setCounter(0)
}
handlePlus10 = () =>{
  setCounter(counter +10)
}



  return (

      <View style={styles.Container}>
        <View style={styles.subContainer}>
     
         <Button label="-" action={handleDownCounter}/>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counter}</Text>
          </View>
         <Button label="+" action={handleUPCounter}/>
        
         
        </View>
        <View style={styles.subContainerReset}>
          <ActionsButtons reset={handleReset} plus={handlePlus10} />
        </View>
      </View>

  );
};

const styles = StyleSheet.create({
  Container: {
    flex:1, 
    backgroundColor:"#2c3e50",
    justifyContent:"center"
  },
  subContainer: {
    height:50,
    with:"100%",
    paddingHorizontal: 10 ,
   flexDirection: 'row',
  },
  subContainerReset:{
    height:50,
    with:"100%",
    paddingHorizontal: 10 ,
   flexDirection: 'row',
   justifyContent:"center",
   alignContent: 'center',
   marginTop:20
  },
  btn: {
    height:50,
    width:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#ecf0f1"
  },
  btnReset:{
    height:50,
    width:"80%",
    backgroundColor:"#ecf0f1",
    justifyContent:"center",
    alignItems:"center"
  },
  btnTxt:{
    fontSize:25,
    color:"#7f8c8d",
    fontWeight:"bold"
  },
  counterContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  
  counter:{
    fontSize:40,
    color:"#FFF",
    fontWeight:"bold"
  },

});

export default App;
