import types from '../types/userTypes';

export function updateUserInfo(userInfo) {-0
  return {
    type: types.USER_UPDATE_USERINFO,
    payload: userInfo
  };
}

export function updateUserIsLogged(isLogged) {
  return {
    type: types.USER_UPDATE_IS_LOGGED,
    payload: isLogged
  };
}