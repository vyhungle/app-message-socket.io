import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Chat from '../screens/chat/chat';
import {appColor} from '../assets/colors';

import ChatIcon from '../assets/images/Icon_chat.svg';
import ChatIconSelect from '../assets/images/Icon_chat_select.svg';
import MentionIcon from '../assets/images/Icon_mention.svg';
import MentionIconSelect from '../assets/images/Icon_mention_select.svg';

const Bottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Chat') {
            return focused ? (
              <ChatIconSelect width={24} height={24} />
            ) : (
              <ChatIcon width={24} height={24} />
            );
          } else if (route.name === 'Mention') {
            return focused ? (
              <MentionIconSelect width={24} height={24} />
            ) : (
              <MentionIcon width={24} height={24} />
            );
          }
        },
      })}
      tabBarOptions={{
        // showLabel: false,
        labelStyle: {
          fontSize: 12,
          top: -5,
        },
        activeTintColor: appColor.selectText,
        inactiveTintColor: appColor.hint,
        style: {
          height: 56,
        },
      }}>
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarBadge: 0,
          tabBarBadgeStyle: {
            position: 'absolute',
            top: 5,
            left: 15,
            height: 16,
            minWidth: 16,
          },
        }}
      />
      <Tab.Screen name="Mention" component={Chat} />
    </Tab.Navigator>
  );
};

export default Bottom;
