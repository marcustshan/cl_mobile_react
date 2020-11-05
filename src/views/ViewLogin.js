import React, { Component } from 'react';
import { NavigationService } from '../common';
import api from '../api';

import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import ActionCreator from '../store/actions';

class ViewLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      password: '',
    };
  }
  onLogin() {
    const { id, password } = this.state;
    api.post('/login', this.state).then(response => {
      if (!response.data) {
        Alert.alert('로그인 정보를 확인해주세요.')
      } else {
        this.props.updateUserInfo(response.data);

        NavigationService.navigate('ViewHome', {
          screen: 'ViewHome'
        });
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Choose Lunch</Text>
        <TextInput
          value={this.state.id}
          keyboardType='default'
          onChangeText={(id) => this.setState({ id })}
          placeholder='ID'
          placeholderTextColor='#999'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'password'}
          secureTextEntry={true}
          placeholderTextColor='#999'
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.onLogin.bind(this)}
        >
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateUserInfo: (userInfo) => {
      dispatch(ActionCreator.updateUserInfo(userInfo));
    },
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  titleText: {
    fontFamily: 'Baskerville',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0b78b3',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonText: {
    fontFamily: 'Baskerville',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f1f1f1',
    fontWeight: '600',
  },
  input: {
    width: 200,
    fontFamily: 'Baskerville',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#081c26',
    marginVertical: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewLogin);