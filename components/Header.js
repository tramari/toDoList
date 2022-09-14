import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

let now = new Date().toLocaleDateString();
console.log(now);

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел на сегодня {now}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        paddingBottom: 50,
        height: 100,
        backgroundColor: 'silver',
        marginBottom: 30
    },

    text: {
        fontSize: 18,
        color:'#000',
        fontWeight: 'bold',
        textAlign: 'center'
    }

});