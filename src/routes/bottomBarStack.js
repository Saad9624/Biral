
import * as React from 'react';
import { Button, View,Platform,StyleSheet ,Image,TouchableOpacity,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/dashboard/home' ;
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

const  drawerStack = () => {
    return (
        <Tab.Navigator
        tabBar={props => <BottomTabBar {...props} />}
        >
           <Tab.Screen
           
            name="Home"
            component={Home} options={{headerShown: false}} />



        </Tab.Navigator>
     
    );
  }

  export default drawerStack;


  
const BottomTabBar = ({state, navigation, ...props}) => {
    const {routes = [], index: activeIndex} = state;
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageIcon}
        />
        <View style={styles.tabContainer}>
          {routes.map((it, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.jumpTo(it.name);
                }}
                style={[
                  styles.tabButton,
                  {
                    borderBottomWidth: activeIndex === index ? 1 : 0,
                  },
                ]}>
                <Text>{it.name}</Text>
              </TouchableOpacity>
            );
          })}

          
        </View>
      </View>
    );
  };


  const styles = StyleSheet.create({
    tabButton: {
      flex: 1,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: colors.blue,
    },
    tabContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor:colors.blue
    },
    imageIcon: {
      width: 50,
      height: 60,
      resizeMode: 'contain',
      backgroundColor:colors.blue
    },
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      height: 64,
      backgroundColor: 'white',
      paddingBottom: Platform.OS === 'ios' ? 15 : 0,
    },
  });