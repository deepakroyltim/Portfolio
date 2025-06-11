"use client";

import { Image, Link, Chip, Divider, Pagination } from "@heroui/react";
// import NextImage from "next/image";

const blogPosts = [
  {
    slug: "my-first-post",
    title: "My First Blog Post",
    description:
      "Welcome to my blog! In this first post, I share my motivations for starting this journey, what kind of content you can expect, and how I plan to grow as a developer through writing. Whether you're a beginner or a seasoned coder, I hope to provide value and inspiration through my experiences and insights.",
    summary:
      "An introductory post outlining the author's goals and vision for the blog.",
    date: "June 10, 2025",
    image: "https://picsum.photos/1120/400?random=1",
    category: "Personal",
    tags: ["introduction", "goals", "developer journey"],
    author: "Alex Johnson",
  },
  {
    slug: "nextjs-theme-toggle",
    title: "How to Add Theme Toggle in Next.js",
    description:
      "This comprehensive guide walks you through implementing a dark/light theme toggle in a Next.js application using the Context API. You'll learn how to integrate Tailwind CSS's dark mode, manage theme state globally, and persist user preferences using localStorage. Perfect for developers looking to enhance UX with modern UI features.",
    summary:
      "Learn to implement a dark/light theme toggle in Next.js using Context API and Tailwind.",
    date: "June 5, 2025",
    image: "https://picsum.photos/1120/400?random=2",
    category: "Frontend",
    tags: ["nextjs", "dark mode", "context api", "tailwind"],
    author: "Emily Carter",
  },
  {
    slug: "tailwind-vs-css",
    title: "Tailwind CSS vs Traditional CSS: Which Should You Use?",
    description:
      "In this post, we compare Tailwind CSS, a utility-first framework, with traditional CSS approaches. We explore their differences in terms of maintainability, scalability, performance, and developer experience. Whether you're building a small project or a large-scale application, this guide will help you choose the right styling strategy.",
    summary:
      "A comparison of Tailwind CSS and traditional CSS for styling web applications.",
    date: "May 28, 2025",
    image: "https://picsum.photos/1120/400?random=3",
    category: "CSS",
    tags: ["tailwind", "css", "frontend", "design systems"],
    author: "Jordan Lee",
  },
  {
    slug: "deploy-nextjs-vercel",
    title: "How to Deploy a Next.js App to Vercel",
    description:
      "Deploying your Next.js app to Vercel is easier than you think. This tutorial covers everything from connecting your GitHub repository to configuring environment variables and optimizing your deployment for production. Learn best practices for CI/CD and how to troubleshoot common deployment issues.",
    summary:
      "Step-by-step guide to deploying a Next.js app to Vercel with GitHub integration.",
    date: "May 20, 2025",
    image: "https://picsum.photos/1120/400?random=4",
    category: "DevOps",
    tags: ["nextjs", "vercel", "deployment", "ci/cd"],
    author: "Samantha Nguyen",
  },
  {
    slug: "productive-dev-tools",
    title: "Top 10 Tools Every Productive Developer Uses",
    description:
      "Discover the top 10 tools that can significantly boost your productivity as a developer. From powerful code editors and terminal tools to browser extensions and task managers, this list includes both free and premium options that streamline your workflow and help you stay focused and efficient.",
    summary:
      "A curated list of essential tools to enhance developer productivity and workflow.",
    date: "May 10, 2025",
    image: "https://picsum.photos/1120/400?random=5",
    category: "Productivity",
    tags: ["tools", "productivity", "developer life", "workflow"],
    author: "Chris Martinez",
  },
  {
    slug: "javascript-array-methods",
    title: "Mastering JavaScript Array Methods",
    description:
      "JavaScript arrays are incredibly powerful, and mastering their methods can take your coding skills to the next level. This post dives deep into methods like `map`, `filter`, `reduce`, and more, with practical examples and performance tips to help you write cleaner, more efficient, and more readable code.",
    summary:
      "An in-depth look at JavaScript array methods with examples and performance tips.",
    date: "April 30, 2025",
    image: "https://picsum.photos/1120/400?random=6",
    category: "JavaScript",
    tags: ["javascript", "arrays", "coding tips", "functional programming"],
    author: "Ravi Patel",
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Main Content */}
        <div className="flex-1 space-y-12">
          {blogPosts.map((post) => (
            <div key={post.slug}>
              <div className="flex flex-col md:flex-row gap-4">
                {/* Post Image */}
                <div className="w-full md:w-1/3">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={200}
                    // fallbackSrc="/fallback-image-300x200.png"
                    isZoomed
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>

                {/* Post Content */}
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-1">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <div className="my-2">
                    <Chip color="primary" variant="flat">
                      Chip
                    </Chip>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 my-2">
                    {post.summary}
                  </p>
                  <div className="flex flex-wrap my-2 gap-2">
                    {post.tags.map((tag) => (
                      <Chip key={tag} color="default" variant="flat">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:underline font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
              <Divider className="my-6" />
            </div>
          ))}
          <div className="flex justify-center items-center">
            <Pagination initialPage={1} total={10} />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px bg-gray-300 dark:bg-gray-700" />

        {/* Sidebar */}
        <aside className="w-full lg:w-1/5 space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="bordered">Productivity</Chip>
              <Chip variant="bordered">Web Development</Chip>
              <Chip variant="bordered">Design</Chip>
            </div>
            <Divider className="my-4" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Tag Cloud</h3>
              <div className="flex flex-wrap gap-2">
                <Chip variant="bordered">Git</Chip>
                <Chip variant="bordered">AWS</Chip>
                <Chip variant="bordered">React</Chip>
                <Chip variant="bordered">Javscript</Chip>
                <Chip variant="bordered">Pathon</Chip>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
