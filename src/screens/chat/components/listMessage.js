import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

export default function listMessage(props) {
  const response = data => {
    return <Text>{data.body}</Text>;
  };
  return (
    <FlatList
      data={props.message}
      keyExtractor={item => item._id}
      renderItem={item => response(item.item)}
    />
  );
}

const styles = StyleSheet.create({});
