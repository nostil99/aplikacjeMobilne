import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 34,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  przycisk:{
    margin:10
  }
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>WITAJ!</Text>
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
