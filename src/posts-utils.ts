import axios, { AxiosResponse } from "axios";
import { IPost } from "./IPost";

const url = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts(): Promise<AxiosResponse<IPost[], any>> {
  return axios.get(url);
}

export async function createPost(){
  const body : IPost = {
    userId: 0,
    id: 0,
    title: "title",
    body: "body text"
  }
  return axios.post(url,body)
}