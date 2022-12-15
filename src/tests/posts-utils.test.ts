import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { createPost, getPosts } from "../logic/posts-utils";
import axios from "axios";
import { IPost } from "../types/IPost";

describe("axios with mock tests", () => {
  beforeEach(() => {
    vi.mock("axios", () => ({
      default: {
        get: vi.fn(),
        post: vi.fn(() => Promise.resolve({ data: {} })), // success
      },
    }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("test axios.get is called once", async () => {
    await getPosts();
    expect(axios.get).toBeCalled();
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts"
    );
  });

  test("test axios.post is called once", async () => {
    const body: IPost = {
      userId: 0,
      id: 0,
      title: "title",
      body: "body text",
    };
    await createPost();
    expect(axios.post).toBeCalled();
    expect(axios.post).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts",
      body
    );
  });
});
