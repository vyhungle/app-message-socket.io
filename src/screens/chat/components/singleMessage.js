import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import moment from 'moment';

import {appColor} from '../../../assets/colors';
import {constants} from '../../../components/constants';

export default function singleMessage(props) {
  const MyMessageStart = () => {
    return (
      <TouchableOpacity style={styles.MyMessageBoxStart}>
        <Text style={styles.Body}>{props.message.body}</Text>
      </TouchableOpacity>
    );
  };
  const MyMessage = () => {
    return (
      <TouchableOpacity style={styles.MyMessageBox}>
        <Text style={styles.Body}>{props.message.body}</Text>
      </TouchableOpacity>
    );
  };
  const MyMessageEnd = () => {
    return (
      <View style={styles.BoxBodyFriend}>
        <TouchableOpacity style={styles.MyMessageBoxEnd}>
          <Text style={styles.Body}>{props.message.body}</Text>
        </TouchableOpacity>
        <Text style={styles.DateTextMy}>
          {moment(props.message.createdAt).calendar()}
        </Text>
      </View>
    );
  };
  const FriendMessageStart = () => {
    return (
      <View style={styles.BoxBodyFriend}>
        <Text style={styles.Name}>{props.message.user.username}</Text>
        <TouchableOpacity style={styles.FriendMessageBoxStart}>
          <Text style={styles.Body}>{props.message.body}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const FriendMessage = () => {
    return (
      <TouchableOpacity style={styles.FriendMessageBox}>
        <Text style={styles.Body}>{props.message.body}</Text>
      </TouchableOpacity>
    );
  };
  const FriendMessageEnd = () => {
    return (
      <View style={styles.BoxFriend}>
        <Image
          style={styles.Avatar}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
          }}
        />
        <View style={styles.BoxBodyFriend}>
          <TouchableOpacity style={styles.FriendMessageBoxEnd}>
            <Text style={styles.Body}>{props.message.body}</Text>
          </TouchableOpacity>
          <Text style={styles.DateTextFriend}>
            {moment(props.message.createdAt).calendar()}
          </Text>
        </View>
      </View>
    );
  };

  const GetMessage = () => {
    if (props.user._id === props.message.user._id && props.end) {
      return <MyMessageEnd />;
    } else if (props.user._id === props.message.user._id && props.start) {
      return <MyMessageStart />;
    } else if (props.user._id === props.message.user._id) {
      return <MyMessage />;
    } else if (props.end) {
      return <FriendMessageEnd />;
    } else if (props.start) {
      return <FriendMessageStart />;
    }
    return <FriendMessage />;
  };
  return <GetMessage />;
}

const styles = StyleSheet.create({
  MyMessageBoxStart: {
    minHeight: 33,
    maxWidth: constants.width / 1.5,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    backgroundColor: appColor.messageRight,
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 16,
    borderColor: appColor.border,
    borderWidth: 0.5,
    marginTop: 5,
    marginRight: 7.5,
    borderBottomRightRadius: 0,
  },
  MyMessageBox: {
    minHeight: 33,
    maxWidth: constants.width / 1.5,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    backgroundColor: appColor.messageRight,
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 16,
    borderColor: appColor.border,
    borderWidth: 0.5,
    marginTop: 5,
    marginRight: 7.5,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  MyMessageBoxEnd: {
    minHeight: 33,
    maxWidth: constants.width / 1.5,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    backgroundColor: appColor.messageRight,
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 16,
    borderColor: appColor.border,
    borderWidth: 0.5,
    marginTop: 5,
    marginRight: 7.5,
    borderTopRightRadius: 0,
  },

  FriendMessageBoxStart: {
    minHeight: 33,
    maxWidth: constants.width / 1.5,
    backgroundColor: appColor.messageLeft,
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 16,
    borderColor: appColor.border,
    borderWidth: 0.5,
    marginTop: 5,
    marginLeft: 45,
    borderBottomLeftRadius: 0,
  },
  FriendMessageBox: {
    minHeight: 33,
    maxWidth: constants.width / 1.5,
    backgroundColor: appColor.messageLeft,
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 16,
    borderColor: appColor.border,
    borderWidth: 0.5,
    marginTop: 5,
    marginLeft: 45,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  FriendMessageBoxEnd: {
    minHeight: 33,
    maxWidth: constants.width / 1.5,
    backgroundColor: appColor.messageLeft,
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 16,
    borderColor: appColor.border,
    borderWidth: 0.5,
    marginTop: 5,
    marginLeft: 45,
    borderTopLeftRadius: 0,
  },

  BoxFriend: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  BoxBodyFriend: {},
  Name: {
    marginLeft: 55,
    fontFamily: 'SF-Pro-Regular',
    fontSize: 13,
    bottom: -5,
    marginTop: 5,
  },
  Body: {
    fontSize: 14,
    fontFamily: 'SF-Pro-Medium',
  },
  DateTextFriend: {
    alignSelf: 'flex-start',
    marginTop: 5,
    marginLeft: 45,
    color: appColor.lightGray,
    fontFamily: 'SF-Pro-Regular',
    fontSize: 13,
  },
  DateTextMy: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: 7.5,
    color: appColor.lightGray,
    fontFamily: 'SF-pro-Regular',
    fontSize: 13,
  },
  Avatar: {
    width: 33,
    height: 33,
    borderRadius: 30,
    position: 'absolute',
    left: 5,
    bottom: 10,
  },
});
