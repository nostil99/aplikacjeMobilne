import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, Linking
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { TouchableOpacity } from "react-native-gesture-handler"


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
    fontSize:23,
    lineHeight: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingVertical: 5,
    fontWeight: 'bold'
},
pomocb:{
  borderWidth: 4,
  borderColor: '#000000',
  backgroundColor: '#86beec',
  margin: 5,
  width: 350,
  textAlign: 'center',
},
})
const URL = (zm)=>{
  Linking.openURL(zm)
}
const Help = ({ navigation }) => (
  <View style={styles.root}>
    <Text style={styles.title}>POMOC</Text>
    <TouchableOpacity style={styles.pomocb} onPress={()=>URL("https://reactnative.dev/")}><Text style={styles.tresc}>Centrum Obsługi</Text></TouchableOpacity>
    <TouchableOpacity style={styles.pomocb} onPress={()=>URL("https://twitter.com/reactnative")}><Text style={styles.tresc}>Mam pytanie</Text></TouchableOpacity>
    <TouchableOpacity style={styles.pomocb} onPress={()=>URL("https://opensource.fb.com/legal/terms/")}><Text style={styles.tresc}>Regulamin</Text></TouchableOpacity>
    <TouchableOpacity style={styles.pomocb} onPress={()=>URL("https://opensource.fb.com/legal/privacy/")}><Text style={styles.tresc}>Polityka Prywatnosci</Text></TouchableOpacity>
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
