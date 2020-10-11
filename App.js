import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Navigation/>
        </NavigationContainer>
      </Provider>
    )
  }
}
