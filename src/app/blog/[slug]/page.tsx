import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Chip,
  Divider,
  Link,
  Image,
} from "@heroui/react";

const post = {
  slug: "nextjs-theme-toggle",
  title: "How to Add Theme Toggle in Next.js",
  description:
    "This comprehensive guide walks you through implementing a dark/light theme toggle in a Next.js application using the Context API. You'll learn how to integrate Tailwind CSS's dark mode, manage theme state globally, and persist user preferences using localStorage. Perfect for developers looking to enhance UX with modern UI features.",
  date: "June 5, 2025",
  image: "https://picsum.photos/1120/400",
  category: "Frontend",
  tags: ["nextjs", "dark mode", "context api", "tailwind"],
  author: "Emily Carter",
};

const simlilarPosts = [
  {
    slug: "my-first-post",
    title: "My First Blog Post",
    description:
      "Welcome to my blog! In this first post, I share my motivations for starting this journey, what kind of content you can expect, and how I plan to grow as a developer through writing. Whether you're a beginner or a seasoned coder, I hope to provide value and inspiration through my experiences and insights.",
    date: "June 10, 2025",
    image: "https://picsum.photos/1120/400",
    category: "Personal",
    tags: ["introduction", "goals", "developer journey"],
    author: "Alex Johnson",
  },
  {
    slug: "nextjs-theme-toggle",
    title: "How to Add Theme Toggle in Next.js",
    description:
      "This comprehensive guide walks you through implementing a dark/light theme toggle in a Next.js application using the Context API. You'll learn how to integrate Tailwind CSS's dark mode, manage theme state globally, and persist user preferences using localStorage. Perfect for developers looking to enhance UX with modern UI features.",
    date: "June 5, 2025",
    image: "https://picsum.photos/1120/400",
    category: "Frontend",
    tags: ["nextjs", "dark mode", "context api", "tailwind"],
    author: "Emily Carter",
  },
  {
    slug: "tailwind-vs-css",
    title: "Tailwind CSS vs Traditional CSS: Which Should You Use?",
    description:
      "In this post, we compare Tailwind CSS, a utility-first framework, with traditional CSS approaches. We explore their differences in terms of maintainability, scalability, performance, and developer experience. Whether you're building a small project or a large-scale application, this guide will help you choose the right styling strategy.",
    date: "May 28, 2025",
    image: "https://picsum.photos/1120/400",
    category: "CSS",
    tags: ["tailwind", "css", "frontend", "design systems"],
    author: "Jordan Lee",
  },
];

const BlogSingle = () => {
  const img_url = post.image;
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div
        className={`relative w-full bg-cover bg-center flex items-center justify-center rounded-lg h-[400px]  `}
        style={{ backgroundImage: `url(${img_url})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="mt-2 text-lg">
            {post.tags.map((tag) => (
              <Chip key={tag} className="ml-1">
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-600 mt-2">
          By <Link className="font-semibold">{post.author}</Link>, {post.date}
        </p>
        <p className="mt-4 text-lg">{post.description} </p>
        <p className="mt-4 text-lg">{post.description} </p>
        <p className="mt-4 text-lg">{post.description} </p>
        <p className="mt-4 text-lg">{post.description} </p>
        <p className="mt-4 text-lg">{post.description} </p>
      </div>
      <Divider className="my-5" />
      <h1 className="text-2xl font-semibold">Realated Post</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {simlilarPosts.map((post) => (
          <Card key={post.slug}>
            <CardHeader className="flex-col items-start">
              <Image
                src={`${post.image}`}
                alt="Similar post image"
                className="w-full object-cover object-center h-fit"
              />
            </CardHeader>
            <CardBody>
              <h1>{post.title}</h1>
              <div className="my-2">
                <Chip color="secondary">{post.category}</Chip>
              </div>
              <div className="my-2 space-y-2 space-x-2">
                {post.tags.map((tag) => (
                  <Chip color="primary" key={tag}>
                    {tag}
                  </Chip>
                ))}
              </div>
            </CardBody>
            <CardFooter>
              <Link href={"/"}>View Project →</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogSingle;
