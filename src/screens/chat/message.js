import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopBar from './components/topBarMessage';
import FormMessage from './components/formMessage';
import {appColor} from '../../assets/colors';
import {useSelector} from 'react-redux';
import ListMessage from './components/listMessage';

export default function Message() {
  const {message} = useSelector(s => s.room);
  return (
    <View style={styles.Container}>
      <TopBar />
      <ListMessage message={message} />
      <FormMessage />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appColor.bg,
  },
});
