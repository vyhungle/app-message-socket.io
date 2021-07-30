import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import SingleItem from './singleItem';

export default function ListRoom(props) {
  const {room} = useSelector(s => s.room);
  return (
    <FlatList
      data={room}
      keyExtractor={item => item._id}
      renderItem={item => <SingleItem data={item.item} onOpen={props.onOpen} />}
    />
  );
}
