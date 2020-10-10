import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Dimensions,
    Image,
    FlatList
} from 'react-native' ;
import DashboardHeader from '../../../components/dashboardHeader' ;
import colors from '../../../constants/colors';
import {
    header
} from '../../../constants/images' ;

const WIDHT = Dimensions.get('window').width ;
const HEIGHT = Dimensions.get('window').height ;
import {
    profileIcon,
    message
} from '../../../constants/images' ;


class Home extends React.Component{

    state={
        data:[
            {title:'1'},
            {title:'2'},
            {title:'3'},
            {title:'4'},
            {title:'5'},
            {title:'6'},
            {title:'7'},
        ]
    }

    _renderStoryItem=({item})=>{
        return(
            <View style={{marginHorizontal:5}}>  
                <Image style={styles.profileIcon} source={profileIcon}/>

            </View>
        )
    }

    _renderItem=({item}) => {
        return(
           <View style={styles.cardView}>  

            <View style={styles.nameView}>

                   <Image style={styles.profileIcon} source={profileIcon}/>
                    <View style={{marginHorizontal:5}}>
                        <Text>Username</Text>
                        <Text>Winning Ratio</Text>
                        <Text>Online</Text>
                    </View>

                   
            </View>
             <Image style={styles.cover}/>
             <View style={styles.bottomView}>
                      <Text>Like</Text>
                     <Text>Comment</Text>
             </View>
                    
            </View>
        )
    }
    render(){
        return(
            <View>
               <ImageBackground
               
               style={styles.background}
               source={header}>

                   <View style={styles.searchBox}>
                        <View style={styles.rowView}>
                                <Image style={styles.profileIcon} source={profileIcon}/>
                                <View style={styles.searchView}>
                                     <Text style={styles.text}>Username| Phone| Clubs</Text>

                                </View>
                                <Image style={styles.message} source={message}/>
                        </View>

                        <View style={styles.rowView}>
                                <View style={styles.searchView}>
                                     <Text style={styles.text}>Whats on your Mind</Text>

                                 </View>

                                 <View style={styles.postView}>
                                    <Text style={styles.postText}>Post</Text>
                                </View>
                        </View>
                   </View>

                  <View style={styles.line}></View>

                    <View style={{backgroundColor:'transparent',}}>
                        <FlatList
                  
                  horizontal
                  data={this.state.data}
                  renderItem={this._renderStoryItem}
                  keyExtractor={(key,index) => index.toString()}
                  />
                    </View>
                    <View style={styles.line}></View>

                    <FlatList
                  data={this.state.data}
                  renderItem={this._renderItem}
                  keyExtractor={(key,index) => index.toString()}
                  />

                  


               </ImageBackground>
            </View>
        )
    }
}


export default Home ; 

const styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%'
    },
    searchBox:{
        width:WIDHT / 1.1,
        height: HEIGHT / 4.5,
        alignSelf:'center',
        borderColor:colors.blue,
        borderWidth:2,
        borderRadius:40,
        backgroundColor:'white',
        marginTop:HEIGHT / 13,

    },
    rowView:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
        marginHorizontal:10
    },
    profileIcon:{
        width:60,
        height:60,
        resizeMode:'contain'
    },
    searchView:{
        width:WIDHT / 2,
        borderWidth:1,
        borderColor:colors.blue,
        height:HEIGHT / 18,
        marginHorizontal:10,
        borderRadius:10,
        justifyContent:'center'
    },
    postView:{
        width:WIDHT / 5,
        borderWidth:1,
        borderColor:colors.blue,
        height:HEIGHT / 18,
        marginHorizontal:10,
        borderRadius:10  ,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        marginHorizontal:10,
        color:'grey',

    },
    postText:{
        color:colors.blue,
        fontWeight:'bold'
    },
    line:{
        width:'100%',
        height:0.7,
        backgroundColor:'silver',
        marginVertical:15
    },
    message:{
        width:30,
        height:30,
        resizeMode:'contain'
    },
    cardView:{
        width:'90%',
        height:HEIGHT / 3,
        borderColor:'silver',
        borderWidth:0.5,
        alignSelf:'center',
        marginVertical:5,
    },
    nameView:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
        marginHorizontal:10
    },
    cover:{
        backgroundColor:colors.blue,
        width:'100%',
        height:HEIGHT / 6,
    },
    bottomView:{
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5

    }
})