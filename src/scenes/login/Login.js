import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input as TextInput, Stack } from 'native-base'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.lightGrayPurple,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 50,
  },
  text2: {
    fontSize: 15,
    marginTop: 50,
  },
  input: {
    marginTop: 12.5,
  }
})

const Login = ({ route, navigation }) => {
  const [login, setLogin] = useState("");
  const [haslo, setHaslo] = useState("");
  const [pokazHaslo, setPokazHaslo] = useState(false);
  const from = route?.params?.from
  return (
  <SafeAreaView style = {styles.root}>
    <Text style = {styles.text1}>SYSTEM DO PRZYPOMINANIA O UBEZPIECZENIACH</Text>
    <Text style = {styles.text2}>LOGOWANIE</Text>

    <TextInput
      style = {styles.input}
      size = "lg"
      mx = "3"
      value = {login} 
      placeholder = "LOGIN"
      w = {{
        base: "75%",
        md: "25%",
      }}
      onChangeText={(newText) => {
          setLogin(newText)
      }}
    />

    <TextInput 
      style = {styles.input}
      size = "lg"
      type = {pokazHaslo ? "text" : "password"}
      mx = "3"
      value = {haslo} 
      placeholder = "HASŁO"
      w = {{
        base: "75%",
        md: "25%",
      }}
      InputRightElement = {
        <Button 
          size = "sm"
          backgroundColor = {colors.darkPurple}
          rounded = "none"
          w = "1/4" 
          h = "full" 
          onPress = {() => {setPokazHaslo(!pokazHaslo)}}>
          {pokazHaslo ? "UKRYJ" : "POKAŻ"}
        </Button>
      }
      onChangeText={(newText) => {
          setHaslo(newText)
      }}
    />

    <Button 
      style = {styles.input}
      size = "md"
      backgroundColor = {colors.darkPurple} 
      onPress = {async () => {
        if(login != "" && haslo != "") {
          try {
            await signInWithEmailAndPassword(auth, login, haslo)
            navigation.navigate('Home', { from: 'Login' })
          } catch (error) {

          }
          // setLogin("");
          // setHaslo("");
        }
      }}>
    ZALOGUJ</Button>
    
  </SafeAreaView>
  )
}

Login.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Login.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Login
