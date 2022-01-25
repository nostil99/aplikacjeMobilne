import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input as TextInput, Stack } from 'native-base'
import axios from 'axios';

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

const Formularz2 = ({ route, navigation }) => {
  const [nazwa, setNazwa]= useState("");
  const [imie, setImie]= useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [nrPolisy, setNrPolisy] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [ubez, setUbez] = useState([]);
  const host = Platform.OS === 'ios' ? "http://localhost:3001/rekordy" : "http://10.0.2.2:3001/rekordy"

  const getData = async () => {  
    try {    
      const value = await AsyncStorage.getItem('storage_Key')  

      if(value !== null) { 
        console.log(value)    
        setUbez(JSON.parse(value))
      }  

      console.log("odbiera")
    } 
    catch(e) {    
    }
  }

  useEffect(()=>{
    getData()
  },[])

  const zmodyfikujPolise = () => {
    if(nazwa != "") {
      axios.put(host + "/" + ubez.id, {
        nazwa: nazwa
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    if(imie != "") {
      axios.put(host + "/" + ubez.id, {
        imie: imie
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    if(nazwisko != "") {
      axios.put(host + "/" + ubez.id, {
        nazwisko: nazwisko
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    if(nrPolisy != "") {
      axios.put(host + "/" + ubez.id, {
        nrpolisy: nrPolisy
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
    if(data1 != "") {
      axios.put(host + "/" + ubez.id, {
        data1: data1
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    if(data2 != "") {
      axios.put(host + "/" + ubez.id, {
        data2: data2
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    alert("Zmodyfikowano polisę.");

    setNazwa("");
    setImie("");
    setNazwisko("");
    setNrPolisy("");
    setData1("");
    setData2("");
  };

  const from = route?.params?.from
  return (
  <SafeAreaView style = {styles.root}>
    <TextInput
      style = {styles.input}
      size = "lg"
      mx = "3"
      value = {nazwa} 
      placeholder = "Nazwa"
      w = {{
        base: "75%",
        md: "25%",
      }}
      onChangeText={(newText) => {
          setNazwa(newText)
      }}
    />

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

    <TextInput
      style = {styles.input}
      size = "lg"
      mx = "3"
      value = {data1} 
      placeholder = "Data rozpoczęcia"
      w = {{
        base: "75%",
        md: "25%",
      }}
      onChangeText={(newText) => {
          setData1(newText)
      }}
    />

    <TextInput
      style = {styles.input}
      size = "lg"
      mx = "3"
      value = {data2} 
      placeholder = "Data zakończenia"
      w = {{
        base: "75%",
        md: "25%",
      }}
      onChangeText={(newText) => {
          setData2(newText)
      }}
    />

    <Button 
      style = {styles.input}
      size = "md"
      backgroundColor = {colors.darkPurple} 
      onPress = {() => {
        navigation.navigate('Camera')
      }}>
    ZRÓB ZDJĘCIE</Button>

    <Button 
      style = {styles.input}
      size = "md"
      backgroundColor = {colors.darkPurple} 
      onPress = {() => {
        zmodyfikujPolise();
        navigation.navigate('Home')
      }}>
    ZMODYFIKUJ POLISĘ</Button>

    <Button 
      style = {styles.input}
      size = "md"
      backgroundColor = {colors.darkPurple} 
      onPress = {() => {
        setNazwa("");
        setImie("");
        setNazwisko("");
        setNrPolisy("");
        setData1("");
        setData2("");
      }}>
    WYCZYŚĆ FORMULARZ</Button>

    <Button 
      style = {styles.input}
      size = "md"
      backgroundColor = {colors.darkPurple} 
      onPress = {navigation.goBack}>
    POWRÓT DO POPRZEDNIEJ STRONY</Button>
    
  </SafeAreaView>
  )
}

Formularz2.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Formularz2.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Formularz2
