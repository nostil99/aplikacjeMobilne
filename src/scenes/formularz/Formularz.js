import React, { useState } from 'react'
import * as FileSystem from 'expo-file-system';
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input as TextInput, Stack } from 'native-base'

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

const Formularz = ({ route, navigation }) => {
  const [imie, setImie]= useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [nrPolisy, setNrPolisy] = useState("");
  const [dataDodania, setDataDodania] = useState("");

  const from = route?.params?.from
  return (
  <SafeAreaView style = {styles.root}>
    <TextInput
      style = {styles.input}
      size = "lg"
      mx = "3"
      value = {imie} 
      placeholder = "Imię"
      w = {{
        base: "75%",
        md: "25%",
      }}
      onChangeText={(newText) => {
          setImie(newText)
      }}
    />

    <TextInput
      style = {styles.input}
      size = "lg"
      mx = "3"
      value = {nazwisko} 
      placeholder = "Nazwisko"
      w = {{
        base: "75%",
        md: "25%",
      }}
      onChangeText={(newText) => {
          setNazwisko(newText)
      }}
    />

    <TextInput
      style = {styles.input}
      size = "lg"
      mx = "3"
      value = {nrPolisy} 
      placeholder = "Numer polisy"
      w = {{
        base: "75%",
        md: "25%",
      }}
      onChangeText={(newText) => {
          setNrPolisy(newText)
      }}
    />

    <Button 
      style = {styles.input}
      size = "md"
      backgroundColor = {colors.darkPurple} 
      onPress = {() => {

      }}>
    ZRÓB ZDJĘCIE</Button>

    <Button 
      style = {styles.input}
      size = "md"
      backgroundColor = {colors.darkPurple} 
      onPress = {() => {
        if(imie != "" && nazwisko != "" && nrPolisy != "") {
          setDataDodania(new Date(Date.now()));
          var sciezka = FileSystem.documentDirectory + (imie + "_" + nazwisko + "_" + nrPolisy + "_" + dataDodania + ".json");

          FileSystem.writeAsStringAsync(sciezka, "{\"imie\": \"" + imie + "\",\n\"nazwisko\": \"" + nazwisko + "\",\n\"nrPolisy\": \"" + nrPolisy + "\",\n\"dataDodania\": \"" + dataDodania + "\"}");

          var dodanaPolisa = FileSystem.readAsStringAsync(sciezka);
          dodanaPolisa.then((zawartosc) => {
            var dane = JSON.parse(zawartosc);
            alert('Dodano polisę o następujących danych:\n' + "Imię: " + dane.imie + "\nNazwisko: " + dane.nazwisko + "\nNumer polisy: " + dane.nrPolisy + "\nData dodania: " + dane.dataDodania);
          });

          setImie("");
          setNazwisko("");
          setNrPolisy("");
        }
      }}>
    DODAJ POLISĘ</Button>

    <Button 
      style = {styles.input}
      size = "md"
      backgroundColor = {colors.darkPurple} 
      onPress = {() => {
        setImie("");
        setNazwisko("");
        setNrPolisy("");
      }}>
    WYCZYŚĆ FORMULARZ</Button>

    <Button 
      style = {styles.input}
      size = "md"
      backgroundColor = {colors.darkPurple} 
      onPress = {navigation.goBack}>
    POWRÓT DO STRONY GŁÓWNEJ</Button>
    
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
