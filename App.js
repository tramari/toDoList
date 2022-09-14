import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import Header from './components/Header';
import Listitem from './components/Listitem';
import Form from './components/Form';

export default function App()  {
  const [listOfItems, setListOfItems] = useState([
    {text:'Выгулять собаку',key: '1'},
    {text:'Помыть машину',key: '2'},
    {text:'Написать приложение',key: '3'},
    {text:'Стать миллионером',key: '4'},
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key !=key) 
    });
  }

  return (
    <View>
      <Header />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (<Listitem el={item} deleteHandler={deleteHandler}/>
        )}/>
      </View>
      <Form addHandler={addHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({


});

