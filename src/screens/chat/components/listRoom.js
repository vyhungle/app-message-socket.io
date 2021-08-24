import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import SingleItem from './singleItem';

export default function ListRoom(props) {
  const {room} = useSelector(s => s.room);
  const setOnline = index => {
    if (props.users !== null) {
      for (const user of props.users) {
        for (const member of room[index].users) {
          if (
            member.userId._id !== props.user._id &&
            member.userId._id === user.userId &&
            user.online
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };
  return (
    <FlatList
      data={room}
      keyExtractor={item => item._id}
      renderItem={item => (
        <SingleItem
          data={item.item}
          onOpen={props.onOpen}
          online={setOnline(item.index)}
        />
      )}
    />
  );
}
