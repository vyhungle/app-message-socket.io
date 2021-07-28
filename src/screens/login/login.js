import React from 'react';
import {StyleSheet, View} from 'react-native';

import ContentTop from './components/contentTop';
import FormLogin from './components/formLogin';

export default function Login() {
  return (
    <View style={styles.Container}>
      <ContentTop />
      <FormLogin />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FBFCFC',
  },
});
