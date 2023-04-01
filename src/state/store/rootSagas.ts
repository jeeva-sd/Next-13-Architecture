import { all } from 'redux-saga/effects';

// Import your sagas
import { watchFetchPosts } from '../duck/post/sagas';

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
  ]);
}
