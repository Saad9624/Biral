import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native' ;
import Header from '../../../components/authHeader' ;
import TextInput from '../../../components/textInput' ;
import Button from '../../../components/button' ;

import {
    user,
    password,
    google,
    facebook
} from '../../../constants/images';
import colors from '../../../constants/colors';


class Signup extends React.Component{


    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView>
                <Header title="Sign Up"/>

                <View style={{marginVertical:20}}></View>
                <TextInput
                image={user}
                placeholder="Username / Phone"/>

                <TextInput
                image={user}
                placeholder="Enter Email"/>

                <TextInput
                image={password}
                placeholder="Enter Password"/>

                <TextInput
                image={password}
                placeholder="Enter Confirm Password"/>

                <Button title="Signup" />

                <TouchableOpacity>
                    <Text style={styles.text}>Forget Password?</Text>
                </TouchableOpacity>


                <Text style={[styles.text,{marginTop:40}]}>Already have an account? Sign In</Text>


                </ScrollView>
            </View>
        )
    }
}
export default Signup ;


const styles = StyleSheet.create({

    text:{
        color:colors.blue,
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:20
    },
    bottomView:{
        justifyContent:'center',
        alignItems:'center' ,
        alignContent:'center',
        width:'100%',



    },
    socialView:{
        marginVertical:30,
        justifyContent:'center',

    },
    image:{
        width:50,
        height:50,
        resizeMode:'contain',
        marginHorizontal:5
    }
})