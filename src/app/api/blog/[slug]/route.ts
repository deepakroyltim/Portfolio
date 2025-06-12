import posts from "@/data/blog_posts.json";
import { NextResponse } from "next/server";

type PostDetailsProps = {
  params: { slug: string };
};

export async function GET(request: Request, { params }: PostDetailsProps) {
  const { slug } = params;

  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    return NextResponse.json({ staus: 404, error: "Post not found" });
  }

  return NextResponse.json(post);
}
