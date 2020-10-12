import React from 'react'
import {View, Image,StyleSheet} from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator()

function MySearchStackNavigator(){
  return(
    <SearchStackNavigator.Navigator>
      <SearchStackNavigator.Screen name = "Search" component={Search}/>
      <SearchStackNavigator.Screen name = "FilmDetail" component={FilmDetail}/>
    </SearchStackNavigator.Navigator>
  )
}

const MoviesTabNavigator = createBottomTabNavigator()

function MyMoviesTabNavigator(){
  return (
    <MoviesTabNavigator.Navigator tabBarOptions={{
        showLabel : false,
        activeTintColor: '#e91e63',
      }}>
      <MoviesTabNavigator.Screen name = "Search" component={MySearchStackNavigator}
       options= {{
        tabBarIcon : () => (
          <View>
            <Image
              resizeMode = 'contain'
              style={styles.favorite_image}
              source={require('../Images/search.png')}/>
          </View>
          )
        }}
      />
      <MoviesTabNavigator.Screen name = "Favorites" component={Favorites}
      options= {{
       tabBarIcon : () => (
         <View>
           <Image
              resizeMode = 'contain'
             style={styles.favorite_image}
             source={require('../Images/coeur_plein.png')}/>
         </View>
         )
       }}
      />
    </MoviesTabNavigator.Navigator>
  )
}

const styles = StyleSheet.create({
  favorite_image : {
    margin : 10,
    height : 40
  }
})
export default MyMoviesTabNavigator
