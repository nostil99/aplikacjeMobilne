import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    lineHeight: 40,
    fontWeight: 'bold',
  },
})

const Profile = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>USTAWIENIA KONTA</Text>
    <Button
      title="Opcja 1"
      color="white" 
      backgroundColor={colors.darkPurple}
      onPress={() => {}

    
    }
    />
    <Button
      title="Opcja 2"
      color="white"
      backgroundColor={colors.darkPurple}
      onPress={() => {

      }}
    />
    <Button
      title="Wyloguj"
      color="white"
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
