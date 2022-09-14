import React from 'react';
import { StyleSheet, TouchableHighlight, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native-web';

export default function Listitem ({ el, deleteHandler }) {
    return (
    <View style={styles.wrapper}>
        <TouchableOpacity style={styles.items}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
             <Text style={styles.deleteBtn}>X</Text>
        </TouchableOpacity>
    </View>


    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
        marginLeft: '20%'
    },

    items: {
        width: '90%'
    },
    
    text: {
        padding: 20,
        textAlign: 'start',
        borderRadius: 5,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        marginTop: 20,
        width: '90%'
    },

    deleteBtn: {
        backgroundColor: '#CD92A8',
        fontSize: 20,
        width: 30,
        height: 30,
        textAlign: 'center',
        marginTop: 30,
        borderRadius: 50
    }

});