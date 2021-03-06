import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {appColor} from '../../../assets/colors';

import {VIE} from '../../../assets/language';
import IconLogo from '../../../assets/images/logo.svg';

const {width, height} = Dimensions.get('window');

export default function contentTop() {
  return (
    <View style={styles.Container}>
      {/* <IconLogo style={styles.Logo} /> */}
      <View style={styles.BoxBottom}>
        <Text style={styles.Title}>{VIE.login.title}</Text>
        <Text style={styles.Hint}>{VIE.login.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: width,
    height: height / 4,
    zIndex: 10,
    opacity: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxBottom: {
    width: width,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 24,
    fontFamily: 'SF-Pro-Bold',
  },
  Hint: {
    fontFamily: 'SF-Pro-Regular',
    fontSize: 16,
    color: appColor.hint,
    marginTop: 10,
  },
  Logo: {
    position: 'absolute',
    left: 20,
  },
});
