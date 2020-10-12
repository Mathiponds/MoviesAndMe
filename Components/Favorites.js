import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

class Favorites extends React.Component {

  render() {
    return (
      <View>
        <Text>Mes Favoris</Text>
        <Button
          title= 'Go'
          onPress = {()=> {
            this.props.navigation.push("FilmDetail", {filmId : 11})}}

        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default Favorites
