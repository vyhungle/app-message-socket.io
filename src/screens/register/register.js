import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import FormLogin from './components/formSignUp';
import ContentTop from './components/contentTop';
import {NativeBaseProvider} from 'native-base';

export default function Register() {
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <ScrollView>
          <ContentTop />
          <FormLogin />
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FBFCFC',
  },
});
