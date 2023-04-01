import webAPI from '../webAPI';
import { PostByIdReq } from "./types";

export class PostService {
  posts = () => webAPI.get(`/posts`);

  postsById = (params: PostByIdReq) => webAPI.get(`/posts/${params}`);
}
