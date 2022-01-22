import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  
})

const Camera = ({ route, navigation }) => {
    return (
    <SafeAreaView style = {styles.root}>
      
    </SafeAreaView>
    )
  }

Camera.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Camera.defaultProps = {
  navigation: { navigate: () => null },
}

export default Camera
