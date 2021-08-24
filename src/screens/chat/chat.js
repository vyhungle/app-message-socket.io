import React from 'react';
import {StyleSheet, View} from 'react-native';
import {appColor} from '../../assets/colors';
import {Actionsheet, useDisclose, NativeBaseProvider} from 'native-base';
import {useSelector} from 'react-redux';

import TopBar from '../../components/topBar';
import ListRoom from './components/listRoom';
import ContentBottomSheet from './components/contentBottomSheet';
import {addUserOnline, connect, receiveUserOnline} from '../../utils/socket';

export default function Chat() {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [users, setUsers] = React.useState(null);
  const {user} = useSelector(state => state.auth);

  React.useEffect(() => {
    connect();
  }, []);

  React.useEffect(() => {
    user._id !== undefined && addUserOnline(user._id);
  }, [user]);

  React.useEffect(() => {
    receiveUserOnline(setUsers);
  }, [users]);

  const BottomSheet = () => {
    return (
      <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator={true}>
        <Actionsheet.Content>
          <ContentBottomSheet />
        </Actionsheet.Content>
      </Actionsheet>
    );
  };
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <TopBar />
        <ListRoom onOpen={onOpen} users={users} user={user} />
        {BottomSheet()}
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
