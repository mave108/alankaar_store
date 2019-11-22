import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import HeadReducer from './components/common/Head/Ducks/Reducer';
import TestimonialReducer from './components/Testimonials/ducks/reducers';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
}

// ROOT REDUCERS
const rootReducer = combineReducers({
  head: HeadReducer,
  testimonials: TestimonialReducer
});


export function initializeStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
