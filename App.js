//App.js
import React from 'react';
import RootRouter from './src/Router';

import { Provider } from 'react-redux';

import SplashScreen from 'react-native-splash-screen';

import initStore from './src/store';
const store = initStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = store.getState()
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    );
  }
}
