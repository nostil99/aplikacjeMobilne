import React, {useState, useEffect} from "react";
import dane from "../data/dane.json"
import { List, TextInput,Text } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import PropTypes from 'prop-types'


const Insurance = ({navigation}) => {

    const [list, setList] = useState([]);
    const [filter, setFilter] = useState("");
    const [elementUbezpieczenie,setElementUbezpieczenie] = useState("");

    useEffect(() => {
        setList(dane.list.filter((dane) => {
            return dane.nazwa.indexOf(filter) !== -1 
        }))
        setElementUbezpieczenie("")
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
                        setElementUbezpieczenie(list[index].imie + " " + list[index].nazwisko + " " + list[index].nazwa + " " 
                        + list[index].numerPolisy + " " )
                        navigation.navigate('Details', { from: 'Insurance' })
                    }}
                    key={index} title={item.nazwa} />)}
            </List.Section>

          
                <View>
                    <Text>
                        {elementUbezpieczenie}
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
export default Insurance;
