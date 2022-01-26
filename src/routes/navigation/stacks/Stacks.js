import React, {useState,useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Login from 'scenes/login'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Formularz from 'scenes/formularz'
import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import Help from '../../../scenes/help'
import Author from '../../../scenes/author'
import Insurance from '../../../scenes/insurance'
import Camera from '../../../scenes/camera'
import ZmianaNazwy from '../../../scenes/zmianaNazwy'
import Formularz2 from '../../../scenes/formularz2'


// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()


const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },}
  
// ------------------------------------
// Navigators
// ------------------------------------



export const HomeNavigator = () => (

  
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
    isLogin={false}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    
    <Stack.Screen
      name="Login"
      component={Login}
      
      options={({ navigation }) => ({
        title: 'Login',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    
    
    <Stack.Screen
      name="Formularz"
      component={Formularz}
      disabled={true}
      options={({ navigation }) => ({
        title: 'Formularz',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Insurance"
      component={Insurance}
      disabled={true}
      options={({ navigation }) => ({
        title: 'Insurance',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />

    <Stack.Screen
      name="Details"
      component={Details}
      disabled={true}
      options={({ navigation }) => ({
        title: 'Details',
        //sheaderLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />

    <Stack.Screen
      name="Camera"
      component={Camera}
      disabled={true}
      // options={({ navigation }) => ({
      //   title: 'Details',
      //   headerLeft: () => <HeaderLeft navigation={navigation} />,
      //   headerTitle: () => <HeaderTitle />,
      // })}
    />

    <Stack.Screen
      name="Formularz2"
      component={Formularz2}
      disabled={true}
      options={({ navigation }) => ({
        title: 'Details',
        //headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)


export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      // options={({ navigation }) => ({
      //   title: 'Profile',
      //   // headerLeft: () => <HeaderLeft navigation={navigation} />,
      //   // headerTitle: () => <HeaderTitle />,
      // })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
        <Stack.Screen
      name="ZmianaNazwy"
      component={ZmianaNazwy}
      options={{
        title: 'ZmianaNazwy',
      }}
    />
  </Stack.Navigator>
)

export const HelpNavigator = () => (
  <Stack.Navigator
  initialRouteName="Help"
  headerMode="screen"
  screenOptions={navigationProps}>
    
    <Stack.Screen
      name="Help"
      component={Help}
      />

  </Stack.Navigator>
)

export const AuthorNavigator = () => (
  <Stack.Navigator
  initialRouteName="Author"
  headerMode="screen"
  screenOptions={navigationProps}>
    
    <Stack.Screen
      name="Author"
      component={Author}
      />
  </Stack.Navigator>
)
