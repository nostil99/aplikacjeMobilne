import React from 'react'
import { useState } from "react"
import { View, Button, Input} from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import PropTypes from 'prop-types'

const ZmianaNazwy =({zmiana})=>{
    const [name, setname]= useState("")
    const onclick =()=> {
        console.log(zmiana)
        setname('')
    }
    return(<View> 
        <TextInput placeholder="Nowa Nazwa" onChangeText={(text)=>{setname({name:text})}}>
        </TextInput>
          <Button title="ZMIEŃ NAZWĘ" onPress={()=>{onclick()}}/>
    </View>)
}

ZmianaNazwy.propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func }),
  }
  
  ZmianaNazwy.defaultProps = {
    navigation: { navigate: () => null },
  }
export default ZmianaNazwy
