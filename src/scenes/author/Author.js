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
    fontSize: 35,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  tresc:{
      fontSize:23,
      fontWeight: 'bold',
  },
})

const Author = ({ navigation }) => (
  <View style={styles.root}>
      <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Autorzy:</Text>
    <Text> </Text>
    <Text> </Text>
    <Text> </Text>
    <Text style={styles.tresc}>Jakub Stawiarz</Text>
    <Text style={styles.tresc}>Natalia Skrzyniarz</Text>
    <Text style={styles.tresc}>Karol Zięba</Text>
  </View>
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
