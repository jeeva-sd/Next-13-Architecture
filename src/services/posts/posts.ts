import webAPI from '../webAPI';
import { PostById } from './types';

export class PostService {
  posts = () => webAPI.get('/posts');

  postsById = (params: PostById) => webAPI.get(`/posts/${params}`);
}
