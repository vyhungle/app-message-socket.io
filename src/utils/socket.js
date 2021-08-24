import * as React from 'react';
import {io} from 'socket.io-client';

import {apiSocket} from '../redux/constants';

export const socket = React.createRef();

export function connect() {
  socket.current = io(apiSocket);
}
export function joinRoom(_id) {
  socket.current.emit('join-room', _id);
}
export function sendMessage(data, _id, userId) {
  socket.current.emit('sendMessage', data, _id, userId);
}

export function receiveMessage(setState) {
  socket.current.on('receiveMessage', (data, userId) => {
    setState({
      body: data.body,
      user: {
        _id: userId,
      },
      createdAt: new Date().toISOString(),
    });
  });
}

export function addUserOnline(userId) {
  socket.current.emit('addUser', userId);
}

export function receiveUserOnline(setState) {
  socket.current.on('receiveUsers', users => {
    setState(users);
  });
}

export function getUser(userId) {
  socket.current.emit('getUser', userId);
}
export function receiveUser(setState) {
  socket.current.on('receiveUser', user => {
    setState(user);
  });
}
