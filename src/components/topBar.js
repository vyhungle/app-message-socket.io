import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {appColor} from '../assets/colors';
import {useNavigation} from '@react-navigation/native';

export default function TopBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.Avatar}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
          }}
        />
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
    flexDirection: 'row',
  },
  Avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
