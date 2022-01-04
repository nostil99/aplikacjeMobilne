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
  const getData = async () => {  
    try {    
      const value = await AsyncStorage.getItem('@storage_Key')  
    if(value !== null) { 
           return value   
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
     <Text>
      {"imie:"+JSON.stringify( value.imie)}
     </Text>
     <Text>
      {"nazwisko:"+ JSON.stringify( value.nazwisko)}
     </Text>
     <Text>
      {"nazwa:"+ JSON.stringify( value.nazwa)}
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
