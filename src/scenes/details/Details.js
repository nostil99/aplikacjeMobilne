import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import dateFormat, { masks } from "dateformat";
import { ngrokHost } from '../../App'

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
  input: {
    marginTop: 20,
  },
    text: {
    fontSize: 15,
    marginTop: 10,
    textAlign: 'left',
    position: 'relative'
  },

})


const Details = ({ route, navigation }) => {
  const from = route?.params?.from
  const host = Platform.OS === 'ios' ? ngrokHost: ngrokHost
  const [ubez,setUbez] = useState([])
  useEffect(()=>{
      getData()
  },[])

  const getData = async () => {  
    try {    
      const value = await AsyncStorage.getItem('storage_Key')  
    if(value !== null) { 
          console.log(value)
          
          setUbez(JSON.parse(value))
     }  
     console.log("odbiera")
    } catch(e) {    
      // error reading value 
     }
   
    }

    const deleteInsure = () =>{
        axios.delete(host+'/'+ubez.id).then(resp =>{
            console.log(resp.data);
            navigation.goBack()
            navigation.goBack()
        }).catch(
          error =>{
            console.log(error)
          }
        )

        
    }
  return (
    
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      {/* <Text style={styles.title}>{`Details (from ${from})`}</Text> */}

      <View styles={{
        
      }}>
       <Text style={styles.title
      }>
      {"Tytuł "+ubez.nazwa}
     </Text>
     <Text style={styles.text}>
      {"Imię: "+ ubez.imie}
     </Text>
     <Text style={styles.text}>
      {"Nazwisko: "+  ubez.nazwisko}
     </Text>
     <Text style={styles.text}>
      {"Numer polisy: "+  ubez.nrpolisy}
     </Text>
     <Text style={styles.text}>
      {"Data startu polisy: "+  dateFormat(Date.parse(ubez.dataRozpoczecia),"dd.mm.yyyy")}
     </Text>
     <Text style={styles.text}>
      {"Data zakonczenia polisy: "+  dateFormat(Date.parse(ubez.dataZakonczenia),"dd.mm.yyyy")}
     </Text> 
     </View>
     <Button
        title="Zmodyfikuj"
        color="white"
        style={styles.input}
        backgroundColor={colors.pink}
        onPress = {() => {
          navigation.navigate('Formularz2')
        }}
      />
      <Button
        title="Powrót"
        color="white"
        style={styles.input}
        backgroundColor={colors.pink}
        onPress={navigation.goBack}
      />
      <Button
        title="usun"
        color="white"
        style={styles.input}
        backgroundColor={colors.pink}
        onPress={deleteInsure}
      />
    
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
  navigation: { goBack: () => null},
}

export default Details
