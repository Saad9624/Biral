import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import colors from '../constants/colors' ;

const HEIGHT = Dimensions.get('window').height ;


const Button =(props) =>{
    return(
        <TouchableOpacity
            onPress={props.onPress}
            style={props.trans ? styles.transparent : styles.text}>

            <Text style={props.trans ? styles.trans_title : styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button ;

const styles=StyleSheet.create({
    text:{
        width:'90%',
        height:HEIGHT / 14 ,
        borderColor:colors.blue,
        borderWidth:2   ,
        borderRadius:10,
        alignSelf:'center',
        marginVertical:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.blue

    },
    transparent:{
            width:'90%',
            height:HEIGHT / 14 ,
            borderColor:colors.blue,
            borderWidth:2   ,
            borderRadius:10,
            alignSelf:'center',
            marginVertical:5,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:colors.white
    },
    title:{
        fontSize:20,
        color:colors.white
    },
    trans_title:{
        fontSize:20,
        color:colors.blue
    },
   
})