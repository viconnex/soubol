import React from 'react'
import { View, Text } from 'react-native'
import { Api } from 'renative'
import WatchFace from './Components/WatchFace/WatchFace'

let AppContainer

class App extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>{'This is blank app'}</Text>
        <Text>{`platform: ${Api.platform}`}</Text>
        <Text>{`factor: ${Api.formFactor}`}</Text>
        <WatchFace />
      </View>
    )
  }
}

export default App
