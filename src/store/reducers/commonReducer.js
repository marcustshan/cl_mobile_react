import types from '../types/commonTypes'

const defaultState = {
	showLoading: false,
}

export default common = (state = defaultState, action) => {	
	switch (action.type) {
		case types.COMMON_UPDATE_SHOW_LOADING:
			return {
				...state
			};
		default:
			return state;
	}
};