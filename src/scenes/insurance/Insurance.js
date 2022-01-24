import React, {useState, useEffect} from "react";
import { List, TextInput,Text } from 'react-native-paper';
import { Platform, ScrollView, SliderComponent, View } from "react-native";
import PropTypes from 'prop-types'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";



const Insurance = ({navigation}) => {

    const host = Platform.OS === 'ios' ? "http://localhost:3001/rekordy" : "http://10.0.2.2:3001/rekordy"
    const axios = require('axios');

    const getData = () => {
        axios.get(host)
        .then((response) => {
            console.log(response.data)
            console.log("dziala")
            setList(response.data)
        })
    }


    useEffect(()=>{
        getData()
    },[])
    const [list, setList] = useState([]);
    const [filter, setFilter] = useState("");
    const storeData = async (value) => {  
        try {     
        const jsonValue = JSON.stringify(value)
         await AsyncStorage.setItem('storage_Key', jsonValue)  
         navigation.navigate('Details' )
         console.log("pobranie async")
        } catch (e) 
        { 
            // saving error  
        }
    }

    useEffect(() => {
        setList(list.filter((dane) => {
            return dane.nazwa.replace(/\s/g, '').toLowerCase().indexOf(filter.replace(/\s/g, '').toLowerCase()) !== -1 
        }))
    }, [filter])
    


    
    return(
        <>
            <TextInput
                label="szukaj"
                value={filter}
                onChangeText={(newText) => {
                    setFilter(newText)

                }}
            />
            <ScrollView>
            <List.Section title="lista polis">
                {list.map((item, index) =>
                    <List.Item onPress={() => {
                        //console.log(list[index])
                        storeData(item) 
                        //setUbezpieczenie(item)
                        
                        
                    }}
                    key={index} title={item.nazwa}
                     />)}
            </List.Section>
            </ScrollView>
          
                <View>
                    <Text>
                     
                    </Text>
                </View>
           
        </>
    )

}

Insurance.propTypes = {
    route: PropTypes.shape({
      params: PropTypes.shape({ from: PropTypes.string }),
    }),
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }),
  }
  
  Insurance.defaultProps = {
    route: { params: { from: '' } },
    navigation: { goBack: () => null },
  }
export default Insurance