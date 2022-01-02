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
    marginBottom: 5,
    marginTop: 5,
    fontWeight: 'bold',
    lineHeight: 100,
  },
  tresc:{
    marginTop: 5,
    fontSize:23,
    lineHeight: 40,
},
})

const Help = ({ navigation }) => (
  <View style={styles.root}>
    <Text style={styles.title}>POMOC</Text>
    <Text style={styles.tresc}>Centrum Obsługi</Text>
    <Text style={styles.tresc}>Mam pytanie</Text>
    <Text style={styles.tresc}>Centrum Obsługi</Text>
    <Text style={styles.tresc}>Regulamin</Text>
    <Text style={styles.tresc}>Polityka Prywatnosci</Text>
    <Text style={styles.tresc}>Naruszenie Bezpieczeństwa</Text>
  </View>
)

Help.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Help.defaultProps = {
  navigation: { navigate: () => null },
}

export default Help
