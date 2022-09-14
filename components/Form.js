import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity } from 'react-native';

export default function Form ({addHandler}) {
    const [text, setValue ]= useState('');

    const onChange = (text) => {
        setValue(text);


    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Что еще надо сделать?'/>
            <TouchableOpacity onPress={() => addHandler(text)} style={styles.btn }>
                <Text style={styles.text}>{'Добавить дело'}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%',
        marginTop: 40
    },

    btn: {
        borderRadius: 3,
        padding: 15,
        backgroundColor: 'silver',
        width: '50%',
        alignItems: 'center',
        marginLeft: '25%',
        marginBottom: 50
    }    
});