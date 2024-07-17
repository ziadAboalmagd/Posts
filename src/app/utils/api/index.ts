"use server";
export const getPosts = async (limit: number, offset: number) => {
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${
    offset * 10
  }`;
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
};
