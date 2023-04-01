import { call, put, takeLatest } from 'redux-saga/effects';
import { setPosts } from './reducer';
import { api } from '~/services';

export function* fetchPostsSaga(action: ReturnType<any>): Generator {
  try {
    const posts: any = yield call(api.posts.postsById, action.payload);
    yield put(setPosts(posts));
  } catch (error) {
    console.error(error);
  }
}

export function* watchFetchPosts() {
  yield takeLatest('posts/fetchPosts', fetchPostsSaga);
}