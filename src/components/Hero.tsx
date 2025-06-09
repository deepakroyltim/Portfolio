import { Image } from "@heroui/react";
import "../../public/avatar.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <Image
        src="/avatar.jpg"
        alt="Your Avatar"
        className="w-32 h-32 rounded-full shadow-lg mb-6"
      />
      <h1 className="text-5xl font-bold">Hi, I&apos;m Your Name</h1>
      <p className="mt-4 text-xl text-gray-600">
        Frontend Developer & UI/UX Designer
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}
