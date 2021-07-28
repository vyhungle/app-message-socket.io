import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appColor} from '../../assets/colors';
import {NativeBaseProvider} from 'native-base';

import TopBar from '../../components/topBar';

export default function chat() {
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <TopBar />
        <Text>chat screen</Text>
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
