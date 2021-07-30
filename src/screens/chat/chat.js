import React from 'react';
import {StyleSheet, View} from 'react-native';
import {appColor} from '../../assets/colors';
import {Actionsheet, useDisclose, NativeBaseProvider} from 'native-base';

import TopBar from '../../components/topBar';
import ListRoom from './components/listRoom';
import ContentBottomSheet from './components/contentBottomSheet';

export default function Chat() {
  const {isOpen, onOpen, onClose} = useDisclose();

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
        <ListRoom onOpen={onOpen} />
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
