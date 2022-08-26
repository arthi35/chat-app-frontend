import {io} from 'socket.io-client';
import React from 'react';
const SOCKET_URL = 'https://hellochatapp001.herokuapp.com';

//app socket 
export const socket = io(SOCKET_URL);
export const AppContext = React.createContext();