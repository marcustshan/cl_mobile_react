import types from '../types/commonTypes';

export function updateShowLoading(showLoading) {
    return {
        type: types.COMMON_UPDATE_SHOW_LOADING,
        payload: showLoading
    };
}