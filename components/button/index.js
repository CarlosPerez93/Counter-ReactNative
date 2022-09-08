import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropsTypes from 'prop-types'
const Button = ({label, action}) => {

    const  propTypes ={
        label:PropsTypes.string,
        action:PropsTypes.finc,
    }

  return (

             <TouchableOpacity 
                onPress={action} 
                style={styles.btn}>
                    <Text style={styles.btnTxt}>{label}</Text>
            </TouchableOpacity>
        )
  
}


const styles = StyleSheet.create({
  
    btn: {
      height:50,
      width:50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"#ecf0f1"
    },
    btnTxt:{
      fontSize:25,
      color:"#7f8c8d",
      fontWeight:"bold"
    },
 
  
  });

  export default Button;