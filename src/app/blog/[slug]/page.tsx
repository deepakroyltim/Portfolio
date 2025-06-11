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
];

const BlogSingle = () => {
  const img_url = post.image;
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div
        className={`relative w-full bg-cover bg-center flex items-center justify-center rounded-lg h-[400px]`}
        style={{ backgroundImage: `url(${img_url})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="mt-5">
            <Chip
              key={post.category}
              variant="bordered"
              color="default"
              className="ml-1"
            >
              {post.category}
            </Chip>
          </div>

          <Divider className="my-5" />
          <div className="mt-2 text-lg">
            {post.tags.map((tag) => (
              <Chip key={tag} className="ml-1" variant="solid" color="primary">
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
        <div className="my-2">
          <Chip color="primary" variant="flat">
            Chip
          </Chip>
        </div>
        <div className="flex flex-wrap my-2 gap-2">
          {post.tags.map((tag) => (
            <Chip key={tag} color="default" variant="flat">
              {tag}
            </Chip>
          ))}
        </div>
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
                <Chip color="primary" variant="flat">
                  {post.category}
                </Chip>
              </div>
              <div className="my-4">{post.summary}</div>
              <div className="my-2 space-y-2 space-x-2">
                {post.tags.map((tag) => (
                  <Chip color="default" key={tag} variant="flat">
                    {tag}
                  </Chip>
                ))}
              </div>
            </CardBody>
            <CardFooter>
              <Link href={`/blog/${post.slug}`}>View Project →</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogSingle;
