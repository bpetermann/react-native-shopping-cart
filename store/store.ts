import { legacy_createStore as createStore, combineReducers } from 'redux';
import { rootReducer } from './reducers';

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
