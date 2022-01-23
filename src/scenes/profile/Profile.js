import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, Image, 
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { AutoFocus } from 'expo-camera/build/Camera.types'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.lightGrayPurple,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  zdjecie:{
    width: 180,
    height: 200,
    marginTop: 30,
    borderRadius: 100,

  },
  profil:{
    marginTop: 20,
    fontSize: 30,
    marginBottom: 50,
  },
  przycisk:{
    marginBottom: 10,
    backgroundColor:'#6667ab',
    color: '#ffffff',
    width: 200,
  }
})

const Profile = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Image
    style={styles.zdjecie}
        source={require('../../../assets/images/logo-xD.png')}
      />
    <Text style={styles.profil}>Jakub Stawiarz</Text>
      
    <Text style={styles.title}>USTAWIENIA KONTA</Text>
    <Button
      title="Zmień Nazwę"
      color="white"
      style={styles.przycisk}
      backgroundColor={colors.darkPurple}
      onPress={() => {}
    }
    />
    <Button
      title="Zmień Zdjęcie "
      style={styles.przycisk}
      color="white"
      backgroundColor={colors.darkPurple}
      onPress={() => {

      }}
    />
    <Button
      title="Wyloguj"
      color="white"
      style={{backgroundColor:'#330099'}}
      backgroundColor={colors.darkPurple}
      onPress={() => {
        navigation.navigate('Login', { from: 'Profile' })
      }}
    />
  </View>
)

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
