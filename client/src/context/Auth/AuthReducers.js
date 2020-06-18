import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
