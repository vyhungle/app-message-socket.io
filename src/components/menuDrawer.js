import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {appColor} from '../assets/colors';
import {logout} from '../redux/slice//authSlice';
import UserIcon from '../assets/images/userIcon.svg';
import PenIcon from '../assets/images/pencilIcon.svg';
import GroupIcon from '../assets/images/groupIcon.svg';

export default function MenuDrawer(props) {
  const dispatch = useDispatch();
  return (
    <View style={styles.Container}>
      <View style={styles.Info}>
        <TouchableOpacity>
          <Image
            style={styles.Avatar}
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.Name}>Lê Nguyễn Hùng Vỹ</Text>
      </View>

      <TouchableOpacity style={styles.Item}>
        <PenIcon />
        <Text style={styles.ItemText}>New Direct Message</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Item}>
        <GroupIcon />
        <Text style={styles.ItemText}>New Group</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ItemLogin}
        onPress={() => dispatch(logout())}>
        <UserIcon />
        <Text style={styles.ItemText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appColor.bg,
    padding: 10,
  },
  Info: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  Avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  Name: {
    fontFamily: 'SF-Pro-Bold',
    fontSize: 16,
    marginLeft: 10,
  },
  ItemLogin: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingLeft: 10,
    paddingBottom: 15,
  },
  Item: {
    flexDirection: 'row',
    height: 30,
  },
  ItemText: {
    fontSize: 14,
    fontFamily: 'SF-Pro-Medium',
    marginLeft: 10,
  },
});
