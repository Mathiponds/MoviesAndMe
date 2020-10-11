import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator()

function MySearchStackNavigator(){
  return(
    <SearchStackNavigator.Navigator>
      <SearchStackNavigator.Screen name = "Favorites" component={Favorites}/>
      <SearchStackNavigator.Screen name = "FilmDetail" component={FilmDetail}/>
    </SearchStackNavigator.Navigator>
  )
}

const MoviesTabNavigator = createBottomTabNavigator()

function MyMoviesTabNavigator(){
  return (
    <MoviesTabNavigator.Navigator initialRouteName='Search'>
      <MoviesTabNavigator.Screen name = "Search" component={MySearchStackNavigator}/>
      <MoviesTabNavigator.Screen name = "Favorites" component={Favorites}/>
    </MoviesTabNavigator.Navigator>
  )
}

export default MySearchStackNavigator
