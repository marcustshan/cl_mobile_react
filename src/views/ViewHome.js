import React, { Component } from 'react';
import { NavigationService } from '../common';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

import { connect } from 'react-redux';

import initStore from '../store';
const store = initStore();

class ViewHome extends Component {
	constructor(props) {
		super(props);

		this.state = store.getState()
	}
	componentDidMount() {
	}
	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="dark-content" />
				<View>
					<Text style={{ fontSize: 25 }}>{ this.props.userInfo.name }</Text>
				</View>
				<TouchableOpacity
					onPress={() => NavigationService.back()}
					style={{
						justifyContent: 'flex-end',
						backgroundColor: 'rgb(87,174,198)',
						padding: 20,
						marginTop: 20,
						borderRadius: 30
					}}>
					<Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}>뒤로</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		userInfo: state.user.userInfo
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewHome);