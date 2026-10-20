
export default function Hero() {
  return (
    <section className="hero-content pt-10">


      <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
        // Near
      </h1>

      <p className="mt-4 text-gray-400">
        is a multimedia artist, video editor, and an aspiring developer.
      </p>

      <div className="quote-box mt-8 p-6">
        <p>The world is cruel, but also beautiful.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-xs">
        <a href="#projects" className="action-link">
          View Projects
        </a>

        <a href="#contacts" className="action-link">
          Contact Me
        </a>
      </div>
    </section>
  );
}
