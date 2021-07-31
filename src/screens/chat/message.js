import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {io} from 'socket.io-client';
import {useDispatch} from 'react-redux';

import TopBar from './components/topBarMessage';
import FormMessage from './components/formMessage';
import {appColor} from '../../assets/colors';
import {useSelector} from 'react-redux';
import ListMessage from './components/listMessage';
import {apiSocket} from '../../redux/constants';
import {messageReceive} from '../../redux/slice/roomSlice';

export default function Message() {
  const route = useRoute();
  const {_id} = route.params;
  const {message} = useSelector(s => s.room);
  const {user} = useSelector(s => s.auth);
  const socket = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    socket.current = io(apiSocket);
    socket.current.emit('join-room', _id);
    socket.current.on('receiveMessage', (data, userId) => {
      console.log(data, userId);
      dispatch(
        messageReceive({
          message: {
            body: data.body,
            user: {
              _id: userId,
            },
            createdAt: new Date().toISOString(),
          },
        }),
      );
    });
  }, [_id, socket, dispatch]);

  const sendMessage = (data, _id, userId) => {
    socket.current.emit('sendMessage', data, _id, userId);
  };
  return (
    <View style={styles.Container}>
      <TopBar />
      <ListMessage message={message} user={user} />
      <FormMessage _id={_id} sendMessage={sendMessage} user={user} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appColor.bg,
  },
});
