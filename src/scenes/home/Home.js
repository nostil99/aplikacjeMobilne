import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, ImageBackground
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin:20,
    marginTop:'20%',
  },
  title: {
    fontSize: 34,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
    color: "white"
  },
  przycisk:{
    marginTop:10,
    margin:10,
    height:40,
    width:'100%',
    alignItems:'center'
  }
})

const Home = ({ navigation }) => (
  <ImageBackground source={require('./tlo.png')} style={{height:'100%'}}>
   <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Button
      style={styles.przycisk}
      title="Dodaj polisę OC/ACC do systemu"
      color="white"
      backgroundColor={colors.darkPurple}
      onPress={() => {
        navigation.navigate('Formularz', { from: 'Home' })
      }}
    />
      <Button
      style={styles.przycisk}
      title="Wyswietl polisy"
      color="white"
      backgroundColor={colors.darkPurple}
      onPress={() => {
        navigation.navigate('Insurance', { from: 'Home' })
      }}
    />
  </View>
  </ImageBackground>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
