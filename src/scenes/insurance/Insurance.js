import React, {useState, useEffect} from "react";
import dane from "../data/dane.json"
import { List, TextInput,Text } from 'react-native-paper';
import { View } from "react-native";
import PropTypes from 'prop-types'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Insurance = ({navigation}) => {

    const [list, setList] = useState([]);
    const [filter, setFilter] = useState("");
    const storeData = async (value) => {  
        try {     
         await AsyncStorage.setItem('@storage_Key', value)  
        } catch (e) 
        { 
            // saving error  
        }
       
    }



    
        
    useEffect(() => {
        setList(dane.list.filter((dane) => {
            return dane.nazwa.indexOf(filter) !== -1 
        }))
        
    }, [filter])
    


    
    return(
        <>
            <TextInput
                label="szukaj"
                value={filter}
                onChangeText={(newText) => {
                    setFilter(newText.toLowerCase())

                }}
            />
            <List.Section title="lista polis">
                {list.map((item, index) =>
                    <List.Item onPress={() => {
                        console.log(list[index])
                        
                        navigation.navigate('Details',   {item} )
                        //storeData(index) 
                    }}
                    key={index} title={item.nazwa} />)}
            </List.Section>

          
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
