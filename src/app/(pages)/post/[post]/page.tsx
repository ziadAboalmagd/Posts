"use client"
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from 'querystring';
import { Post } from "@/app/types";
import { getPosts } from "@/app/utils/api";

export default function PostPage({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Assuming you fetch the total number of posts to calculate total pages
  const totalPosts = 100; // Replace with actual total posts from your API
  const numberOfPages = Math.ceil(totalPosts / 10);
  const paths = Array.from({ length: numberOfPages }, (_, page) => ({
    params: { page: (page + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  page: string;
}

export const getStaticProps: GetStaticProps<{ posts: Post[] }, Params> = async (context) => {
  const { page } = context.params!;
  const currentPage = parseInt(page, 10);
  const offset = (currentPage - 1) * 10;

  const posts = await getPosts(10, offset);

  if (!posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
    },
  };
};
