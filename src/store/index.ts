import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { storyReducer } from './storyReducer/storyReducer';

const rootReducer = combineReducers({
  storyReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;