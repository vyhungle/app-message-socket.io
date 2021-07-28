import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appColor} from '../../assets/colors';
import {NativeBaseProvider} from 'native-base';

import TopBar from '../../components/topBar';
import SingleItem from './components/singleItem';

export default function chat() {
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <TopBar />
        <SingleItem />
        <SingleItem />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appColor.bg,
  },
});
