import { useState } from "react"
import { View } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"

const Change =({zmiana})=>{
    const [name, setname]= useState
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

export default Change
