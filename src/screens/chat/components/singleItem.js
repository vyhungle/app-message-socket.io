import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {appColor} from '../../../assets/colors';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {messagePending} from '../../../redux/slice/roomSlice';

export default function SingleItem(props) {
  const {user} = useSelector(s => s.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getName = () => {
    let res = '';
    props.data.users[0].userId._id !== user._id
      ? (res = props.data.users[0].userId.username)
      : (res = props.data.users[1].userId.username);
    return res;
  };

  const goMessage = () => {
    dispatch(messagePending({_id: props.data._id}));
    navigation.navigate('MessageScreen', {
      _id: props.data._id,
    });
  };
  return (
    <TouchableOpacity
      style={styles.Container}
      onLongPress={props.onOpen}
      onPress={() => goMessage()}>
      <TouchableOpacity style={styles.BoxAvatar}>
        <Image
          style={styles.Avatar}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
          }}
        />
      </TouchableOpacity>

      <View style={styles.BoxBody}>
        <Text style={styles.Name}>{getName()}</Text>
        <Text style={styles.Body} numberOfLines={1}>
          The weather will be perfect for the str for the str
        </Text>
      </View>
      <Text style={styles.DateText}>2h40 PM</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    borderBottomColor: appColor.border,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  Avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  BoxAvatar: {},
  BoxBody: {
    marginLeft: 10,
    maxWidth: 240,
  },
  Name: {
    fontFamily: 'SF-Pro-Bold',
    fontSize: 14,
  },
  Body: {
    fontFamily: 'SF-Pro-Regular',
    fontSize: 12,
    color: appColor.lightGray,
    position: 'relative',
    top: -5,
  },
  DateText: {
    color: appColor.lightGray,
    fontFamily: 'SF-Pro-Regular',
    fontSize: 12,
    position: 'absolute',
    right: 10,
  },
});
