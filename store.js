import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import HeadReducer from './components/common/Head/Ducks/Reducer';
import TestimonialReducer from './components/Testimonials/ducks/reducers';
import BloglReducer from './components/Blog/ducks/reducers';
import ProductReducer from './components/Products/ducks/reducers';
import CartReducer from './components/Cart/ducks/reducers';
const InitialState = {
  cart: []
}

// ROOT REDUCERS
const rootReducer = combineReducers({
  head: HeadReducer,
  testimonials: TestimonialReducer,
  blog: BloglReducer,
  products: ProductReducer,
  cart: CartReducer
});


export function initializeStore(initialState = InitialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
