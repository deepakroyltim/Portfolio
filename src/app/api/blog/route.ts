import posts from "@/data/blog_posts.json";
// import meta_data from "@/data/extracted_data.json";

import { NextResponse } from "next/server";

const get_posts = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const skip = parseInt(searchParams.get("skip") || "0", 10);
  const category = searchParams.get("category") || null;
  const author = searchParams.get("author") || null;
  let filteredPosts = posts;

  if (category) {
    filteredPosts = filteredPosts.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (author) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.author && post.author.toLowerCase() === author.toLowerCase()
    );
  }

  const paginatedPosts = filteredPosts.slice(skip, skip + limit);

  return NextResponse.json({
    total: filteredPosts.length,
    limit,
    skip,
    posts: paginatedPosts,
  });
};

const get_meta_data = () => {};
export { get_posts, get_meta_data };

// Required export for App Router API route
export async function GET(request: Request) {
  return get_posts(request);
}
