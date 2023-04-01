import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PostState } from './types';

const initialState: PostState = {
  loading: false,
  posts: []
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPosts: (state: PostState, action:PayloadAction<number>) => {
      state.loading = action.payload ? true : false;
    },
    setPosts: (state: PostState, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
  },
});

export const { setPosts, fetchPosts } = postsSlice.actions;
export const { reducer: postsReducer } = postsSlice;

