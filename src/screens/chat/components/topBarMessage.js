import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {appColor} from '../../../assets/colors';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../../assets/images/backIcon.svg';

export default function TopBarMessage() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.BoxIconBack}
        onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>

      <View style={styles.BoxBody}>
        <Text style={styles.Title}>Stream Chat</Text>
        <Text style={styles.Date}>Seen 1 hour ago</Text>
      </View>

      <TouchableOpacity style={styles.IconCreate}>
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
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  BoxIconBack: {
    position: 'absolute',
    left: 0,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoxBody: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 16,
    fontFamily: 'SF-Pro-Bold',
    top: 5,
  },
  Date: {
    fontSize: 12,
    fontFamily: 'SF-Pro-Regular',
    color: appColor.lightGray,
    top: -2.5,
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
