import { Button, Image, Link } from "@heroui/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center gap-4">
      <Image
        src="/avatar.jpg"
        alt="Your Avatar"
        className="w-32 h-32 rounded-full shadow-lg mb-6"
      />
      <h1 className="text-5xl font-bold">Hi, I&apos;m Deepak Roy</h1>
      <p className="mt-4 text-xl">Frontend Developer & UI/UX Designer</p>
      <Button
        as={Link}
        href="#projects"
        size="lg"
        color="primary"
        variant="solid"
      >
        View My Work
      </Button>
    </section>
  );
}
