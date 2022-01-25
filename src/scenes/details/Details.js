import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import AsyncStorage from '@react-native-async-storage/async-storage';

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

})


const Details = ({ route, navigation }) => {
  const from = route?.params?.from

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

    //const value = route?.params?.item
  return (
    
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      {/* <Text style={styles.title}>{`Details (from ${from})`}</Text> */}
       <Text style={styles.title
      }>
        
      {ubez.nazwa}
     </Text>
     <Text>
      {"id: "+ ubez.id}
     </Text>
     <Text>
      {"Imię: "+ ubez.imie}
     </Text>
     <Text>
      {"Nazwisko: "+  ubez.nazwisko}
     </Text>
     <Text>
      {"Numer polisy: "+  ubez.nrpolisy}
     </Text>
     <Text>
      {"Data startu polisy: "+  ubez.dataRozpoczecia}
     </Text>
     <Text>
      {"Data zakonczenia polisy: "+  ubez.dataZakonczenia}
     </Text> 

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
