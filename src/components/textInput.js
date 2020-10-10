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

const textInput =(props) =>{
    return(
        <View style={styles.text}>
                <Image 
                    style={styles.image}
                    source={props.image} />
                
                <TextInput
                placeholder={props.placeholder}
                />
        </View>
    )
}

export default textInput ;

const styles=StyleSheet.create({
    text:{
        width:'90%',
        height:HEIGHT / 14 ,
        flexDirection:'row',
        borderColor:colors.blue,
        borderWidth:2   ,
        borderRadius:10,
        alignSelf:'center',
        marginVertical:5,
        alignItems:'center'

    },
    image:{
        width:30,
        height:30,
        resizeMode:'contain',
        marginHorizontal:10
    }
})