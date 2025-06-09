export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-3 border rounded-lg h-32"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center text-gray-600">
        Or reach out via{" "}
        <a href="mailto:you@example.com" className="text-blue-600 underline">
          email
        </a>
      </div>
    </section>
  );
}
