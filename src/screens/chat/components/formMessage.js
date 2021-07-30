import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {appColor} from '../../../assets/colors';
import {constants} from '../../../components/constants';
import AttachIcon from '../../../assets/images/attachIcon.svg';
import PathIcon from '../../../assets/images/pathIcon.svg';
import SendIcon from '../../../assets/images/sendIcon.svg';

export default function formMessage() {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.BoxIcon}>
        <AttachIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.BoxIcon}>
        <PathIcon />
      </TouchableOpacity>
      <TextInput
        style={styles.Field}
        placeholder="Send a message"
        placeholderTextColor={appColor.lightGray}
      />

      <TouchableOpacity style={styles.BoxSendIcon}>
        <SendIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    bottom: 0,
    height: 56,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopColor: appColor.border,
    borderTopWidth: 1,
    width: constants.width,
  },
  BoxIcon: {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  BoxSendIcon: {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
  },
  Field: {
    height: 40,
    width: constants.width - 24 * 3 - 20 - 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: appColor.border,
    color: 'black',
    paddingHorizontal: 15,
    // fontFamily: 'SF-Pro-Medium',
    fontSize: 14,
  },
});
