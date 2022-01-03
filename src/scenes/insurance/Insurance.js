import React, {useState, useEffect} from "react";
import dane from "../data/dane.json"
import { List, TextInput } from 'react-native-paper';



const Lecturers = () => {

    const [list, setList] = useState([]);
    const [filter, setFilter] = useState("");


    useEffect(() => {
        setList(dane.list.filter((dane) => {
            return dane.imie.indexOf(filter) !== -1 
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
            <List.Section title="lista uzytkowikow">
                {list.map((item, index) =>
                    <List.Item onPress={(navigation) => {
                        console.log(list[index])
                        
                    }}
                    key={index} title={item.imie} />)}
            </List.Section>
        </>
    )

}


export default Lecturers;
