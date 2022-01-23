import React from 'react'
import { useState } from "react"
import { View } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import PropTypes from 'prop-types'

const ZmianaNazwy =({zmiana})=>{
    const [name, setname]= useState("")
    const onclick =()=> {
        zmiana(name) 
        setname('')
    }
    return(<View> 
        <TextInput placeholder="Nowa Nazwa" onChangeText={(text)=>{setname({name:text})}}>
        </TextInput>
        <TouchableOpacity onPress={()=>{onclick()}}></TouchableOpacity>
    </View>)
}

ZmianaNazwy.propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func }),
  }
  
  ZmianaNazwy.defaultProps = {
    navigation: { navigate: () => null },
  }
export default ZmianaNazwy
