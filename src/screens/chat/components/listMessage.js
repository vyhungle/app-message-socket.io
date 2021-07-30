import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import SingleMessage from './singleMessage';

export default function ListMessage(props) {
  const setEnd = value => {
    if (value === props.message.length - 1) {
      return true;
    } else if (
      props.message[value + 1].user._id !== props.message[value].user._id
    ) {
      return true;
    }
    return false;
  };
  const setStart = value => {
    if (value === 0) {
      return true;
    } else if (
      props.message[value].user._id !== props.message[value - 1].user._id
    ) {
      return true;
    }
    return false;
  };

  const scrollViewRef = React.useRef();
  return (
    <FlatList
      ref={scrollViewRef}
      contentContainerStyle={{paddingBottom: 70}}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({animated: false})
      }
      data={props.message}
      keyExtractor={item => item._id}
      renderItem={item => (
        <SingleMessage
          message={item.item}
          user={props.user}
          end={setEnd(item.index)}
          start={setStart(item.index)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
