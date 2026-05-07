import bgImage from "../assets/bg.jpg";
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <p className="uppercase tracking-[8px] text-gray-400 mb-6 text-sm">
          Photography • Cinematic Videography • Editing
        </p>

        <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight uppercase">
          Capturing Stories <br /> Through Visuals
        </h1>

        <p className="max-w-3xl text-gray-300 text-lg md:text-xl leading-relaxed">
          Professional photography, cinematic videography, and creative editing
          crafted through years of experience alongside{" "}
          <a
            href="https://www.instagram.com/ads_.photography_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300 "
          >
            @ads_.photography_
          </a>
          .
        </p>

        <a
          href="#portfolio"
          className="mt-10 inline-block border border-white px-10 py-4 uppercase tracking-[4px] text-sm hover:bg-white hover:text-black transition duration-300"
        >
          Explore Portfolio
        </a>
      </div>
    </section>
  );
}

export default Hero;
