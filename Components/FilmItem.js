// Components/FilmItem.js

import React from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component {
  render() {
    //console.log(this.props)
    const { film, displayDetailForFilm } = this.props
    return (
      <TouchableOpacity
       style={styles.main_container}
       onPress={() => displayDetailForFilm(film.id)}>
        <View style = {styles.image_container}>
          <Image
            style ={styles.image}
            source={{uri: getImageFromApi(film.poster_path)}}/>
        </View>
        <View style= {styles.content_part}>
          <View style = {styles.header_container}>
            <Text style = {styles.title_text}> {film.title}</Text>
            <Text style = {styles.vote_text}> {film.vote_average}</Text>
          </View>
          <Text style = {styles.description_text} numberOfLines={6}> {film.overview}</Text>
          <Text style = {styles.footer_part}>Sorti le {film.release_date}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container : {
    borderWidth : 1,
    borderColor : 'black',
    flexDirection : 'row',
    margin : 5,
    height : 170
  },
  image_container : {
    flex : 1,
    padding: 5
  },
  image : {
    flex :1,
  },
  content_part :{
    flex:2,
    padding : 5,
    flexDirection : 'column'
  },
  header_container :{
    flex : 2.5,
    flexDirection : 'row'
  },
  title_text: {
    flex :1,
    fontSize : 16,
    flexWrap: 'wrap',
    fontWeight : 'bold'
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_text :{
    flex: 6,
    fontSize : 12,
    fontStyle : 'italic'
  },
  footer_part :{
    flex: 1,
    fontSize : 14,
    textAlign : 'right'
  }
})
export default FilmItem
