import React, {useState, useEffect} from "react";
import dane from "../data/dane.json"
import { List, TextInput,Text } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";



const Lecturers = () => {

    const [list, setList] = useState([]);
    const [filter, setFilter] = useState("");
    const [element,setElement] = useState("");

    useEffect(() => {
        setList(dane.list.filter((dane) => {
            return dane.nazwa.indexOf(filter) !== -1 
        }))
        setElement("")
    }, [filter])
    const GetElement = () =>{}

    return(
        <>
            <TextInput
                label="szukaj"
                value={filter}
                onChangeText={(newText) => {
                    setFilter(newText.toLowerCase())

                }}
            />
            <List.Section title="lista uzytkowikow">
                {list.map((item, index) =>
                    <List.Item onPress={(navigation) => {
                        setElement();
                        console.log(list[index])
                        setElement(list[index].imie + " " + list[index].nazwisko + " " + list[index].nazwa + " " 
                        + list[index].numerPolisy + " " )
                    }}
                    key={index} title={item.nazwa} />)}
            </List.Section>

          
                <View>
                    <Text>
                        {element}
                    </Text>
                </View>
           
        </>
    )

}


export default Lecturers;
