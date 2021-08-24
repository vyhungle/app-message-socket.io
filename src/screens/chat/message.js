import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import TopBar from './components/topBarMessage';
import FormMessage from './components/formMessage';
import {appColor} from '../../assets/colors';
import {useSelector} from 'react-redux';
import ListMessage from './components/listMessage';
import {receiveMessage} from '../../utils/socket';
import {messageReceive} from '../../redux/slice/roomSlice';

export default function Message() {
  const route = useRoute();
  const {_id} = route.params;
  const {message} = useSelector(s => s.room);
  const {user} = useSelector(s => s.auth);
  const dispatch = useDispatch();
  const [content, setContent] = React.useState(null);
  const userOnline = useSelector(s => s.userOnline);

  // console.log(userOnline.user);

  React.useEffect(() => {
    receiveMessage(setContent);
  }, []);

  React.useEffect(() => {
    if (content !== null) {
      dispatch(
        messageReceive({
          message: content,
        }),
      );
    }
  }, [content, dispatch]);

  return (
    <View style={styles.Container}>
      <TopBar />
      <ListMessage message={message} user={user} />
      <FormMessage _id={_id} user={user} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appColor.bg,
  },
});
