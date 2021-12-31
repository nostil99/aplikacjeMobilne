import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
// import Button from 'components/Button'
import { Button, Input as TextInput } from 'native-base'
import { colors } from 'theme'
// import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'


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

const Formularz = ({ route, navigation }) => {

  const [imie,setImie]= useState("");
  const [nazwisko,setNazwisko] = useState("");
  const [nrPolisy,setNrPolisy] = useState("");
  const from = route?.params?.from
  return (
  <SafeAreaView>
      <View style={styles.root}>
      
        <Text>podaj imie </Text>
        <TextInput value = {imie} placeholder="Imie" onChangeText={(newText) => {
          setImie(newText)
        }} ></TextInput>
    
        <Text>podaj nazwisko </Text>
        <TextInput value={nazwisko} placeholder="nazwisko" onChangeText={(newText) => {
          setNazwisko(newText)
        }}></TextInput>
        <Text>podaj numer polisy </Text>
        <TextInput value={nrPolisy} placeholder="nr Polisy" keyboard="numeric" onChangeText= {(newText) => {
          setNrPolisy(newText)
        }}></TextInput>

    <Text> {imie}</Text>
    <Text> {nazwisko}</Text>
    <Text> {nrPolisy}</Text>

  <Button marginBottom="2px">Dodaj</Button>
  <Button marginBottom="2px" onPress = {() => {
    setImie("");
    setNazwisko("")
    setNrPolisy("")
  }}>clear</Button>
        <Button 
          onPress={navigation.goBack}
        >
          powrót do strony startowej
        </Button>
      </View>
  </SafeAreaView>
  )
}

Formularz.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Formularz.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Formularz
