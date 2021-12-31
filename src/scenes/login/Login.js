import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input as TextInput } from 'native-base'

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

const Details = ({ route, navigation }) => {
  const [login, setLogin] = useState("");
  const [haslo, setHaslo] = useState("");

  const from = route?.params?.from
  return (
  <View style = {styles.root}>
    <Text>SYSTEM DO PRZYPOMINANIA O UBEZPIECZENIACH</Text>
    <Text>LOGOWANIE</Text>

    <TextInput
      mx = "3"
      value = {login} 
      placeholder = "Login"
      w = {{
        base: "75%",
        md: "25%",
      }}
      onChangeText={(newText) => {
          setLogin(newText)
      }}
    />

    <TextInput 
      mx = "3"
      value = {haslo} 
      placeholder = "Hasło"
      w = {{
        base: "75%",
        md: "25%",
      }}
      onChangeText={(newText) => {
          setHaslo(newText)
      }}
    />

    <Button marginBottom = "2px" onPress = {() => {
      if(login != "" && haslo != "") {
        navigation.navigate('Home', { from: 'Login' })
        setLogin("");
        setHaslo("");
      }
    }}>ZALOGUJ</Button>
    
  </View>
  )
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Details.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Details
