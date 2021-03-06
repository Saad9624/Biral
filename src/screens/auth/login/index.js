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


class Login extends React.Component{


    render(){
        const { navigation} = this.props ;

        return(
            <View style={{flex:1}}>
                <ScrollView>
                <Header title="Login"/>

                <View style={{marginVertical:20}}></View>
                <TextInput
                image={user}
                placeholder="Username / Phone"/>

                <TextInput
                image={password}
                placeholder="Enter Password"/>

                <Button
                onPress={()=> navigation.navigate('Bottom Stack')}
                 title="Login" />

                <TouchableOpacity
                               onPress={() => navigation.navigate('Verification')}

                >
                    <Text style={styles.text}>Forget Password?</Text>
                </TouchableOpacity>


                <View style={styles.bottomView}>
                
                     <View style={styles.socialView}>
                          <Text style={styles.text}>Login with</Text>
                        
                        <View style={{flexDirection:'row',marginVertical:10}}>
                              <Image style={styles.image} source={google}/>
                              <Image style={styles.image} source={facebook}/>
                        </View>
                        

                    </View>
               
               <TouchableOpacity 
               onPress={() => navigation.navigate('Signup')}
               >
                      <Text style={styles.text}>Don't have an account? Register</Text>

               </TouchableOpacity>

               
                </View>

                </ScrollView>
            </View>
        )
    }
}
export default Login ;


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