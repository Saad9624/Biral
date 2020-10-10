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


const dashboardHeader =(props) =>{
    return(
        <View style={styles.tvscreen}>
        <View style={styles.tvscreenMain} />
        <View style={styles.tvscreenTop} />
        <View style={styles.tvscreenBottom} />
        <View style={styles.tvscreenLeft} />
        <View style={styles.tvscreenRight} />

      </View>  
    )
}

export default dashboardHeader ;

const styles=StyleSheet.create({
    tvscreen: {},
  tvscreenMain: {
    width: '100%',
    height: 75,
    backgroundColor: 'red',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  tvscreenTop: {
    width: 73,
    height: 70,
    backgroundColor: 'red',
    position: 'absolute',
    top: -26,
    left: 39,
    borderRadius: 35,
    transform: [
      {scaleX: 2},
      {scaleY: .5}
    ]
  },
  tvscreenBottom: {
    width: 100,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: -26,
    left: 39,
    borderRadius: 35,
    transform: [
      {scaleX: 10},
      {scaleY: .5}
    ]
  },
  tvscreenLeft: {
    width: 20,
    height: 38,
    backgroundColor: 'red',
    position: 'absolute',
    left: -7,
    top: 18,
    borderRadius: 35,
    transform: [
      {scaleX: .5},
      {scaleY: 2},
    ]
  },
})