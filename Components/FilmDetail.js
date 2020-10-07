import React from 'react'
import { StyleSheet, TouchableOpacity, View, Button, Text, Image, ActivityIndicator, ScrollView} from 'react-native'

import {getFilmDetailFromApi} from '../API/TMDBApi'
import {getImageFromApi} from '../API/TMDBApi'
import {connect} from 'react-redux'

import moment from 'moment'
import numeral from 'numeral'

class FilmDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: undefined,
      isLoading: true
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  componentDidMount(){
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film : data,
        isLoading : false
      })
    })
  }
  componentDidUpdate(){
    //console.log(this.props.favoritesFilm)
  }
  _toggleFavorite(){
    const action = {
      type : "TOGGLE_FAVORITE",
      value: this.state.film
    }
    this.props.dispatch(action)
  }

  _displayFavoriteImage(){
    var sourceImage = require('../Images/coeur_vide.png')
    if (this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1) {
      // Film dans nos favoris
      sourceImage = require('../Images/coeur_plein.png')
    }
    return (
      <Image
        style={styles.favorite_image}
        source={sourceImage}
      />
    )
  }

  _displayFilm() {
    const {film} = this.state
    //console.log(this.props)
    if (this.state.film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
            style ={styles.image}
            source={{uri: getImageFromApi(film.backdrop_path)}}/>
          <Text style = {styles.title_text}>{film.title}</Text>
          <TouchableOpacity
            style={styles.favorite_container}
            onPress={() => this._toggleFavorite()}>
            {this._displayFavoriteImage()}
          </TouchableOpacity>
          <Text style = {styles.overview_text}>{film.overview}</Text>
          <Text style = {styles.default_text}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
          <Text style = {styles.default_text}>Note : {film.vote_average}/10</Text>
          <Text style = {styles.default_text}>Nombres de vote : {film.vote_count}</Text>
          <Text style = {styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')} $</Text>
          <Text style = {styles.default_text}>Genre(s) : {film.genres.map(function(genre){
            return genre.name
          }).join(" / ")}
          </Text>
          <Text style = {styles.default_text}>Companie(s) : {film.production_companies.map(function(company){
            return company.name
          }).join(" / ")}
          </Text>
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding : 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'white',
    opacity : 0.5
  },
  image : {
    justifyContent : 'center',
    height: 180
  },
  title_text : {
    textAlign : 'center',
    fontWeight: 'bold',
    marginTop : 10,
    marginBottom : 10,
    fontSize : 30
  },
  favorite_container : {
    alignItems : 'center'
  },
  favorite_image : {
    width: 40,
    height: 40
  }
  overview_text : {
    fontSize : 14,
    fontStyle : 'italic',
    marginBottom : 10
  },
  default_text:{
    fontSize : 14,
    fontWeight : 'bold'
    }
})
const mapStateToProps = (state) => {
  return {
    favoritesFilm : state.favoritesFilm
  }
}

export default connect(mapStateToProps)(FilmDetail)
