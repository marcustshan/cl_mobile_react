import React, { Component } from 'react';
import Navigation from '../src/navigation';
import { NavigationService } from '../src/common';

import ModalActivityIndicator from 'react-native-modal-activityindicator';

import { connect } from 'react-redux';

import initStore from './store';
const store = initStore();

class Router extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  constructor(props) {
    super(props);

    this.state = store.getState()
  }
  componentDidMount() {
    /*
    setInterval(() => {
      console.log(this.props.showLoading)
    }, 300)
    */
  }
  render() {
    return (
      <Navigation
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      >
        <ModalActivityIndicator visible={this.props.showLoading} size='large' color='#5323ba' />
      </Navigation>
    )
  }
}

const mapStateToProps = state => {
	return {
		showLoading: state.common.showLoading
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);