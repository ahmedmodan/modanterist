import authState from './../states/authState';

export const TOGGLE_LOG_IN = 'TOGGLE_LOG_IN';

export const toggleLogIn = () => ({ type: TOGGLE_LOG_IN });

export const actions = {
  toggleLogIn
};

export default function loginReducer(state = authState, action) {
  switch (action.type) {
    case TOGGLE_LOG_IN:
      return state.set('loggedIn', !state.get('loggedIn'));
    default:
      return state;
  }
}
