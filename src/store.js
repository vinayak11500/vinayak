import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import reducer from './reducers/reducer';

const middleware=[thunk];
const store=createStore(reducer,applyMiddleware(...middleware));

export default store;