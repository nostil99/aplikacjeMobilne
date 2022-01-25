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
    marginTop: -100,
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    lineHeight: 100,
    marginTop: 250,
    textAlign: 'center'
  },
  tresc:{
      fontSize:35,
      fontWeight: 'normal',
      lineHeight: 50,
      textAlign: 'center',
      
  },
})

const Author = ({ navigation }) => (
  <View style={styles.root}>
    <ImageBackground source={require('./tlo2.png')} style={{height:'120%'}}>
      <StatusBar barStyle="light-content" />
    <Text style={styles.title}>AUTORZY</Text>
    <Text style={styles.tresc}>Jakub Stawiarz</Text>
    <Text style={styles.tresc}>Natalia Skrzyniarz</Text>
    <Text style={styles.tresc}>Karol Zięba</Text>
    </ImageBackground></View>
)

Author.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Author.defaultProps = {
  navigation: { navigate: () => null },
}

export default Author
