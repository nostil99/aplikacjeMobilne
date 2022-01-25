import React from 'react'
import {useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, Image, TextInput, Button , ImageBackground
} from 'react-native'
import { colors } from 'theme'
import { AutoFocus } from 'expo-camera/build/Camera.types'


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.lightGrayPurple,
marginTop: -75,
  },
  title: {
    fontSize: 20,
    marginTop: 25,
    marginBottom: 5,
    lineHeight: 40,
    fontWeight: 'bold',
    marginLeft: 110,
  },
  zdjecie:{
    width: 200,
    height: 220,
    marginTop: 100,
    borderRadius: 100,
    marginLeft: 100,
  },
  profil:{
    marginTop: 20,
    fontSize: 40,
    marginBottom: 30,
    marginLeft: 70,
  },
  przycisk:{
    marginBottom: 10,
    backgroundColor:'#6667ab',
    color: '#ffffff',
    width: 20,
    height:50,
  },
  input:{
  fontSize:20,
  padding:10,

  }
})
const Profile = ({ navigation }) => {
  const[flaga, setflaga]= useState(false);
  const[nazwa, setnazwa]= useState("Jakub Stawiarz");
  if (flaga===false){
  return(
  <View style={styles.root}>
    <ImageBackground source={require('./tlo2.png')} style={{height:'120%'}}>
    <StatusBar barStyle="light-content" />
    <Image
    style={styles.zdjecie}
        source={require('../../../assets/images/logo-xD.png')}
      />
    <Text style={styles.profil}>{nazwa}</Text>
    
    <Text style={styles.title}>USTAWIENIA KONTA</Text>
    <Button
      title="Zmień Nazwę"
      color='rgb(35,29,84)'
      backgroundColor={colors.darkPurple}
      onPress={()=> {setflaga(true)}}

    />
    <View style={{marginTop: 5}}/>
    <Button
      title="Wyloguj"
      color='rgb(35,29,84)'
      style={{marginTop:30}}
      backgroundColor={colors.darkPurple}
      onPress={() => {
        navigation.navigate('Login', { from: 'Profile' })
      }}
    />
    </ImageBackground>
  </View>
);}
else {
  return(
    
    <View> 
      <TextInput style={styles.input} placeholder="Wpisz nową nazwe" onChangeText={(nazwa)=>setnazwa(nazwa)}/>
      <Button title="ZMIEŃ NAZWĘ" onPress={()=>setflaga(false)}
      color='rgb(35,29,84)'   
      />
    </View>
  );
} }

export default Profile
