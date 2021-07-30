import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import TopBar from './components/topBarMessage';
import FormMessage from './components/formMessage';
import {appColor} from '../../assets/colors';
import {useSelector} from 'react-redux';
import ListMessage from './components/listMessage';

export default function Message() {
  const route = useRoute();
  const {_id} = route.params;
  const {message} = useSelector(s => s.room);
  const {user} = useSelector(s => s.auth);
  return (
    <View style={styles.Container}>
      <TopBar />
      <ListMessage message={message} user={user} />
      <FormMessage _id={_id} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appColor.bg,
  },
});
