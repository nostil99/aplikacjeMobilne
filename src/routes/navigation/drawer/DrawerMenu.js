import React from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, Text } from 'react-native'
import { DrawerActions } from '@react-navigation/native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
  },
}

const DrawerMenu = (props) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.gray}
        backgroundColor="white"
        onPress={() => {
          props.navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    
    </View>
    {/* <View style={styles.main}>
        <FontIcon.Button 
        onPress= {()=>{
          props.navigation.push('Home')

        }}
          style={styles.button} 
          backgroundColor={colors.darkPurple}
          onPress={() =>{
          }}>
        Dodaj polisę</FontIcon.Button>
        <FontIcon.Button 
          style={styles.button} 
          backgroundColor={colors.darkPurple}
          onPress={() =>{
          }}>
        Wyświetl polisy</FontIcon.Button>
        <FontIcon.Button 
          style={styles.button} 
          backgroundColor={colors.darkPurple}
          onPress={() =>{
          }}>
        Wyświetl polisy upływające</FontIcon.Button>
        <FontIcon.Button 
          style={styles.button} 
          backgroundColor={colors.darkPurple}
          onPress={() =>{
          }}>
        Wyświetl samouczek</FontIcon.Button>
        <FontIcon.Button 
          style={styles.button} 
          backgroundColor={colors.darkPurple}
          onPress={() =>{
          }}>
        Wyświetl autorów aplikacji</FontIcon.Button>
          
     
    </View> */}
  </SafeAreaView>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
