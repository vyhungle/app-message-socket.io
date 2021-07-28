import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {appColor} from '../assets/colors';
import {useNavigation} from '@react-navigation/native';
import PenIcon from '../assets/images/PencilBlueIcon.svg';

export default function TopBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.BoxAvatar}
        onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.Avatar}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
          }}
        />
      </TouchableOpacity>
      <Text style={styles.Title}>Stream Chat</Text>

      <TouchableOpacity style={styles.IconCreate}>
        <PenIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 56,
    borderBottomColor: appColor.border,
    borderBottomWidth: 1,
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  BoxAvatar: {
    position: 'absolute',
    left: 10,
  },
  Title: {
    fontSize: 16,
    fontFamily: 'SF-Pro-Bold',
  },
  IconCreate: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderColor: appColor.border,
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    right: 10,
  },
});
