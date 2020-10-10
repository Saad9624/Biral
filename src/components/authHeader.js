import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native';
import colors from '../constants/colors' ;

const HEIGHT = Dimensions.get('window').height ;


const authHeader =(props) =>{
    return(
        <View style={styles.text}>

            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default authHeader ;

const styles=StyleSheet.create({
    text:{
        width:'100%',
        height:HEIGHT / 3.5 ,
        backgroundColor:colors.blue,

    },
    title:{
        bottom:0,
        position:'absolute',
        marginVertical:30,
        marginHorizontal:30,
        fontSize:30,
        color:colors.white
    }
})