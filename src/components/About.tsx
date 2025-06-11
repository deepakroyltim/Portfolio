import { Button, Image, Link } from "@heroui/react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="/about-me.jpg"
            alt="About"
            isBlurred
            className="w-full rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-6">
            Hi, I&apos;m a Web Developer
          </h2>

          <p className=" text-lg leading-relaxed mb-6">
            I specialize in crafting responsive, accessible, and visually
            engaging web applications. With a passion for clean code and modern
            design, I work with tools like <strong>React</strong>,{" "}
            <strong>Next.js</strong>, <strong>Bootstrap</strong>, and{" "}
            <strong>Tailwind CSS</strong> to bring ideas to life. My skill set
            also includes backend development with{" "}
            <strong>Node.js & Express</strong>, scripting and automation using{" "}
            <strong>Python</strong>, content management with{" "}
            <strong>WordPress</strong>, and optimizing websites for search
            engines through effective SEO strategies.
          </p>
          <Button as={Link} color="primary" href="#contact" size="lg">
            Lets Connet
          </Button>
        </div>
      </div>
    </section>
  );
}
