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
    fontSize: 24,
    marginBottom: 20,
  },
})

const Author = ({ navigation }) => (
  <View style={styles.root}>
    <Text>Autor</Text>
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
