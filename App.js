//App.js
import React from 'react';
import RootRouter from './src/Router'

import SplashScreen from 'react-native-splash-screen';

import { View, Modal, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <RootRouter />
    );
  }
}
