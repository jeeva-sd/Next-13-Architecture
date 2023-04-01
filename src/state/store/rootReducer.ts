import { combineReducers } from '@reduxjs/toolkit';
import { postsReducer } from '../duck/post';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;