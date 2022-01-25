import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,Button as NButton, Text, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input as TextInput, Stack } from 'native-base'
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';


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

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode('date');
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };



  const [nazwa, setNazwa]= useState("");
  const [imie, setImie]= useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [nrPolisy, setNrPolisy] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const host = Platform.OS === 'ios' ? "http://localhost:3001/rekordy" : "http://10.0.2.2:3001/rekordy"


  const dodajPolise = () => {
    axios.post(host, {
      nazwa: nazwa,
      imie: imie,
      nazwisko: nazwisko,
      nrpolisy: nrPolisy,
      dataRozpoczecia: data1,
      dataZakonczenia: data2
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    alert('Dodano polisę o następujących danych:\n' + "Nazwa: " + nazwa + "\nImię: " + imie + "\nNazwisko: " + nazwisko + "\nNumer polisy: " + nrPolisy + "\nData rozpoczęcia: " + data1 + "\nData zakończenia: " + data2);

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
    <View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
<Button onPress={showDatepicker}>dodaj date</Button>
      </View>

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
        if(nazwa != "" && imie != "" && nazwisko != "" && nrPolisy != "" && data1 != "" && data2 != "") {
          dodajPolise();
        }
      }}>
    DODAJ POLISĘ</Button>

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
