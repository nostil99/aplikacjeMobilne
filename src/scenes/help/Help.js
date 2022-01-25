import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, Linking,ImageBackground
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { TouchableOpacity } from "react-native-gesture-handler"
import { AutoFocus } from 'expo-camera/build/Camera.types'


const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 35,
    marginBottom: 5,
    marginTop: 170,
    fontWeight: 'bold',
    lineHeight: 100,
    textAlign: 'center',
  },
  tresc:{
    fontSize:23,
    lineHeight: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingVertical: 5,

    color:'white',
},
pomocb:{
  backgroundColor: 'rgb(35,29,84)',
  marginLeft: 55,
  marginBottom: 20,
  width: 300,
  height: 60,
  textAlign: 'center',
  paddingTop: 5,

},
})
const URL = (zm)=>{
  Linking.openURL(zm)
}
const Help = ({ navigation }) => (
  
     <View style={styles.root}>
       <ImageBackground source={require('./help.png')} style={{height:'100%'}}>
    <Text style={styles.title}>POMOC</Text>
    <TouchableOpacity style={styles.pomocb} onPress={()=>URL("https://reactnative.dev/")}><Text style={styles.tresc}>Centrum Obsługi</Text></TouchableOpacity>
    <TouchableOpacity style={styles.pomocb} onPress={()=>URL("https://twitter.com/reactnative")}><Text style={styles.tresc}>Mam pytanie</Text></TouchableOpacity>
    <TouchableOpacity style={styles.pomocb} onPress={()=>URL("https://opensource.fb.com/legal/terms/")}><Text style={styles.tresc}>Regulamin</Text></TouchableOpacity>
    <TouchableOpacity style={styles.pomocb} onPress={()=>URL("https://opensource.fb.com/legal/privacy/")}><Text style={styles.tresc}>Polityka Prywatnosci</Text></TouchableOpacity>
    </ImageBackground></View>
  
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
