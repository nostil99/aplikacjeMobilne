import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,Button as NButton, Text, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Center, Input as TextInput, Stack } from 'native-base'
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import dateFormat, { masks } from "dateformat";
import { ngrokHost } from '../../App'
import { borderColor, borderRadius } from 'styled-system'


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
    marginTop: 10,
    textAlign: "center"
  },
  input: {
    marginTop: 12.5,
    width:"90%",
    borderRadius: 15,
    borderColor: "blue"  
  },
  button: {
    marginTop: 12.5,
    width:"90%",
    borderRadius: 25,
    borderColor: "blue"  
  },
  dateField: {
    width:200,
    marginEnd:"20%"
  }
})

const Formularz = ({ route, navigation }) => {

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || data1;
    setShow(Platform.OS === 'ios');
    setShow('date');
    setData1(currentDate);
  };
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || data2;
    setShow(Platform.OS === 'ios');
    setData2(currentDate);
  };






  const [nazwa, setNazwa]= useState("");
  const [imie, setImie]= useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [nrPolisy, setNrPolisy] = useState("");
  const [data1, setData1] = useState(new Date());
  const [data2, setData2] = useState(new Date());
  const host = Platform.OS === 'ios' ? ngrokHost : ngrokHost

  const dodajPolise = () => {
    axios.post(host, {
      nazwa: nazwa,
      imie: imie,
      nazwisko: nazwisko,
      nrpolisy: nrPolisy,
      dataRozpoczecia: data1.toString(),
      dataZakonczenia: data2.toString()
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    alert('Dodano polisę o następujących danych:\n' + "Nazwa: " + nazwa + "\nImię: " + imie + "\nNazwisko: " 
    + nazwisko + "\nNumer polisy: " + nrPolisy + "\nData rozpoczęcia: " 
    + data1.toString() + "\nData zakończenia: " + data2.toString());

    setNazwa("");
    setImie("");
    setNazwisko("");
    setNrPolisy("");
    setData1(new Date());
    setData2(new Date());
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



    <View>
    <Text style={styles.text2}>Data rozpaczecia</Text>
      {show && (
        <DateTimePicker
      style={styles.dateField}
        dateFormat="dd.mm.yyyy"
          testID="dateTimePickear"
          value={data1}
          mode='date'
          is24Hour={true}
          display="default"
          onChange={onChangeStart}
        />
      )}

      </View>
<Text>
  {/* {dateFormat(data1,"dd.mm.yyyy").toString()} */}
</Text>
<View>
<Text style={styles.text2}>Data zakonczenia</Text>
{show && (
        <DateTimePicker
      style={styles.dateField}
        dateFormat="dd.mm.yyyy"
          testID="dateTimePickear2"
          value={data2}
          mode='date'
          is24Hour={true}
          display="default"
          onChange={onChangeEnd}
        />
      )}

      </View>
<Text>
  {/* {dateFormat(data2,"dd.mm.yyyy").toString()} */}
</Text>



    <Button 
      style = {styles.button}
      size = "md"
      backgroundColor = {colors.darkPurple} 
      onPress = {() => {
        if(nazwa != "" && imie != "" && nazwisko != "" && nrPolisy != "" && data1 < data2 ) {
          dodajPolise();
        }
      }}>
    DODAJ POLISĘ</Button>

    <Button 
      style = {styles.button}
      size = "md"
      backgroundColor = {colors.darkPurple} 
      onPress = {() => {
        setNazwa("");
        setImie("");
        setNazwisko("");
        setNrPolisy("");
        setData1(new Date());
        setData2(new Date());
      }}>
    WYCZYŚĆ FORMULARZ</Button>

    <Button 
      style = {styles.button}
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
