import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator, ProfileNavigator } from '../stacks'
import { HelpNavigator,AuthorNavigator } from '../stacks/Stacks'

const Tab = createBottomTabNavigator()

export const HelpTabNavigator = () => (
  <Tab.Navigator
  screenOptions={({ route }) => ({
    // nawigacja dolna help
    tabBarIcon: ({ focused }) => {
      switch (route.name) {
        case 'Help':
          return (
            <FontIcon
              name="question"
              color={focused ? colors.lightPurple : colors.gray}
              size={20}
              solid
            />
          )
        case 'Profile':
          return (
            <FontIcon
              name="user"
              color={focused ? colors.lightPurple : colors.gray}
              size={20}
              solid
            />
          )
        case 'Author':
           return(
             <FontIcon
              name="book-reader"
              color={focused ? colors.lightPurple : colors.gray}
              size={20}
              solid
            />
        )
        default:
          return <View />
      }
    },
  })}
  tabBarOptions={{
    activeTintColor: colors.lightPurple,
    inactiveTintColor: colors.gray,
    style: {
      ///blok stylizowania
    },
  }}
  initialRouteName="Home"
  swipeEnabled={false}
>
  <Tab.Screen name="Help" component={HelpNavigator} />
  <Tab.Screen name="Author" component={AuthorNavigator} />
  <Tab.Screen name="Profile" component={ProfileNavigator} />
</Tab.Navigator>
)



 const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Home':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          case 'Profile':
            return (
              <FontIcon
                name="user"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.lightPurple,
      inactiveTintColor: colors.gray,
      style: {
        // backgroundColor: 'white',
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
      },
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator