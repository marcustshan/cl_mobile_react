import React, { Component } from 'react';
import Navigation from '../src/navigation';
import { NavigationService } from '../src/common';

class Router extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navigation
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    )
  }
}

export default Router;