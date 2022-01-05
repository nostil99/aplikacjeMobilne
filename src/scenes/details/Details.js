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

})




   
const Details = ({ route, navigation }) => {
  const from = route?.params?.from

  // const [ubez,setUbez] = useState("")
  // useEffect(()=>{
  //     getData()
  // },[])
  const getData = async () => {  
    try {    
      const value = await AsyncStorage.getItem('@storage_Key')  
    if(value !== null) { 
          console.log(value)
          setUbez(value)
     }  
     console.log("odbiera")
    } catch(e) {    
      // error reading value 
     }
   
    }

    const value = route?.params?.item
  return (
    


    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      {/* <Text style={styles.title}>{`Details (from ${from})`}</Text> */}
       <Text style={styles.title
      }>
      {value.nazwa}
     </Text>
     <Text>
      {"imie: "+ value.imie}
     </Text>
     <Text>
      {"nazwisko:"+  value.nazwisko}
     </Text>
   
     <Text>
      {"data startu polisy:"+  value.dataRozpoczecia}
     </Text>
     <Text>
      {"data zakonczenia polisy:"+  value.dataZakonczenia}
     </Text> 


     
   
       
      <Button
        title="Go Back"
        color="white"
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
  navigation: { goBack: () => null },
}

export default Details
