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
    justifyContent: 'center',
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
    marginTop:80,
    margin:10,
  }
})

const Home = ({ navigation }) => (
  <ImageBackground source={require('./tlo.jpg')} style={{height:'110%'}}>
   <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <View style={{width:"75%", height: 130, backgroundColor:'rgb(147,136,219)'}}><Text style={styles.title}>WITAJ W NASZEJ APLIKACJI</Text></View>
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
