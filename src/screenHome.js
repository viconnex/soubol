import React from 'react'
import { Text, Image, View, TouchableOpacity, StyleSheet, ScrollView, PixelRatio } from 'react-native'
import { Icon, Button, Api, getScaledValue, isWatch } from 'renative'
import config from '../platformAssets/renative.runtime.json'
import packageJson from '../package.json'
import Theme from './theme'
import { WatchFace } from './Components/WatchFace/index.js'

const styles = StyleSheet.create({
  appContainerScroll: {
    flex: 1,
    paddingTop: getScaledValue(50),
  },
  appContainerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: getScaledValue(30),
  },
  textH2: {
    fontFamily: Theme.primaryFontFamily,
    fontSize: getScaledValue(20),
    marginHorizontal: getScaledValue(20),
    color: Theme.color4,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  textH3: {
    fontFamily: Theme.primaryFontFamily,
    fontSize: getScaledValue(15),
    marginHorizontal: getScaledValue(20),
    marginTop: getScaledValue(5),
    color: Theme.color2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    marginBottom: getScaledValue(30),
    width: getScaledValue(83),
    height: getScaledValue(97),
  },
  buttonWear: {
    minWidth: getScaledValue(130),
  },
  button: {
    minWidth: getScaledValue(150),
  },
})

const stylesObbj = {
  icon: {
    width: getScaledValue(40),
    height: getScaledValue(40),
    margin: getScaledValue(10),
  },
}

class ScreenHome extends React.Component {
  constructor() {
    super()
    this.state = { bgColor: Theme.color1, time: new Date() }
  }

  render() {
    const isWear = isWatch()
    const selectedStyle = isWear ? styles.appContainerView : styles.appContainerScroll
    const styleButton = isWear ? styles.buttonWear : styles.button
    const SelectedView = isWear ? View : ScrollView
    return (
      <SelectedView
        style={[selectedStyle, { backgroundColor: this.state.bgColor }]}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <WatchFace />
      </SelectedView>
    )
  }
}

export default ScreenHome
