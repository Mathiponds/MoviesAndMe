import React from 'react'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

const MoviesTabNavigator = createBottomTabNavigator()

function MyMoviesTabNavigator(){
  return (
    <MoviesTabNavigator.Navigator>
      <MoviesTabNavigator.Screen name = "SearchStackNavigator" component={SearchStackNavigator}/>
      <MoviesTabNavigator.Screen name = "Favorites" component={Favorites}/>
    </MoviesTabNavigator.Navigator>
  )
}

export default MyMoviesTabNavigator
