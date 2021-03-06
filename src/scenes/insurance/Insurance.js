import React, {useState, useEffect} from "react";
import { List, TextInput,Text ,Searchbar} from 'react-native-paper';
import { Platform, ScrollView, SliderComponent, StyleSheet, View } from "react-native";
import PropTypes from 'prop-types'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { ngrokHost } from "../../App";
import { background, backgroundColor, borderRadius, get, margin } from "styled-system";
import { useIsFocused } from '@react-navigation/native';





const Insurance = ({navigation}) => {


    const isFocused = useIsFocused();
 
    useEffect(() => {
      getData()
    }, [isFocused]);

    const host = Platform.OS === 'ios' ? ngrokHost : ngrokHost
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
    const [filter, setFilter] = useState('');
    const [data, setData] = useState(null);
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
    const onChangeSearch = query => setFilter(query);
    
    const clearString = (value) => {
        return value.replace(/\s/g, '').toLowerCase();
    }
    const checkName = (value) => {
        return clearString(value.nazwa).indexOf(clearString(filter)) >= 0
    }

    const filterData = () => {

        return [...new Set(list.filter(checkName))];
    }
    const x = new Date()
    
    return(
        <>
            <Searchbar
                placeholder="Wyszukaj"
                onChangeText={onChangeSearch}
                value={filter}
            />
       
            <ScrollView>    
            <List.Section title="lista polis">
                {filterData().map((item, index) =>
                    
                    
                    <List.Item 
                    
                    style={{
                        borderWidth: 1,
                        width:"80%",
                        marginHorizontal:"10%",
                        marginBottom:15,
                        borderRadius:30,
                        backgroundColor:"#00aafa21"
                        
                    }}
                    titleStyle={x>=Date.parse(item.dataZakonczenia) ? 
                        {color:"red"} 
                        : 
                        { color:"green"}
                        
                        
                    }
                    
                    onPress={() => {
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