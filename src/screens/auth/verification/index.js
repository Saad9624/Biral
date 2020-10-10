import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    TextInput
} from 'react-native' ;
import Header from '../../../components/authHeader' ;
import TextInput1 from '../../../components/textInput' ;
import Button from '../../../components/button' ;

import {
    phone
} from '../../../constants/images';
import colors from '../../../constants/colors';

const WIDTH = Dimensions.get('window').width ; 
const HEIGHT = Dimensions.get('window').height ; 


class Verification extends React.Component{


    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView>
                <Header title="Verification"/>

                <View style={{marginVertical:20}}></View>

                
                <TextInput1
                image={phone}
                placeholder="Phone Number" />

                    <Text style={[styles.text,{marginVertical:20}]}>Enter Verification Code</Text>


               
                    <View style={styles.inputBoxes}>
                            <TextInput style={styles.input}/>
                            <TextInput style={styles.input}/>
                            <TextInput style={styles.input}/>
                            <TextInput style={styles.input}/>

                    </View>

                <Button title="Verify" />
                <Button trans title="Resend Code" />
                

              
                </ScrollView>
            </View>
        )
    }
}
export default Verification ;


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
    },
    input:{
        borderColor:colors.blue,
        borderRadius:8,
        borderWidth:3,
        width:WIDTH / 6,
        height:HEIGHT / 11,
        marginHorizontal:5
    },
    inputBoxes:{
        flexDirection:'row',
        marginVertical:35,
        marginHorizontal:10,
        alignSelf:'center'

    }
})