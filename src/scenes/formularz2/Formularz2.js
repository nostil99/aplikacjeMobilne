import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input as TextInput, Stack } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
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
    width:"80%",
    borderRadius: 20,
    borderColor:"blue"
  },
  dateField: {
    width:200,
    marginEnd:"20%"
  }
})

const Formularz2 = ({ route, navigation }) => {
  const [nazwa, setNazwa]= useState("");
  const [imie, setImie]= useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [nrPolisy, setNrPolisy] = useState("");
  const [data1, setData1] = useState(new Date());
  const [data2, setData2] = useState(new Date());
  const [ubez, setUbez] = useState([]);
  const host = Platform.OS === 'ios' ? ngrokHost : ngrokHost
  const [open, setOpen] = useState(false)


  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || data1;
    setShow(true);

    setData1(currentDate);
  };
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || data2;
    setShow(true);
    setData2(currentDate);
  };


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
 
    if(nazwa != "" && nrPolisy != "" && data1 < data2 ) {
      axios.put(host + "/" + ubez.id, {
      
      nazwa: nazwa,
      imie: imie,
      nazwisko: nazwisko,
      nrpolisy: nrPolisy,
      dataRozpoczecia: data1.toString(),
      dataZakonczenia: data2.toString()
      
      })
      .then(function (response) {
        console.log(response);
        console.log("formularz2")
        navigation.navigate('Insurance')

    alert("Zmodyfikowano polisę.");
      })
      .catch(function (error) {
        console.log(error);
      });
    }


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
    {Platform.OS ==="ios"?
    <Text style={styles.text2}>Data rozpaczecia</Text>:
    <Button  onPress={() => setOpen(true)}>Data rozpoczecia</Button>
}
      {show && (
        <DateTimePicker
      style={styles.dateField}

      
        dateFormat="dd.mm.yyyy"
        open={open}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
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
{Platform.OS ==="ios"?
    <Text style={styles.text2}>Data zakonczenia</Text>:
    <Button  onPress={() => setOpen(true)}>Data zakonczenia</Button>
}
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
      style = {styles.input}
      size = "md"
      backgroundColor = {colors.darkPurple} 
      onPress = {() => {
        zmodyfikujPolise();
        
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
