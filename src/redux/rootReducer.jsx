import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './modules/counter';
import explore, { CLOSE_MODAL } from './modules/explore';
import { reducer as formReducer } from 'redux-form';

const form = formReducer.plugin({
  savePin: (state, action) => {
    switch (action.type) {
      case CLOSE_MODAL:
        return undefined;
      default:
        return state;
    }
  }
});

// import all of the reducers and combine them with the following function
export default combineReducers({
  counter,
  router,
  form,
  explore
});
