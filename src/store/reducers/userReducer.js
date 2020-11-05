import types from '../types/userTypes'

const defaultState = {
	userInfo : {},
	isLogged: false
}

export default user = (state = defaultState, action) => {	
	switch (action.type) {
		case types.USER_UPDATE_USERINFO:
			return {
        userInfo: action.payload,
        isLogged: true,
			};
		default:
			return state;
	}
};