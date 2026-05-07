function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 md:px-16 py-28 border-t border-gray-900"
    >

      {/* Heading */}
      <div className="text-center mb-20">

        <p className="uppercase tracking-[6px] text-gray-500 text-sm mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-bold uppercase">
          Let’s Work Together
        </h2>

      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Side */}
        <div className="space-y-10">

          {/* Instagram */}
          <div>

            <h3 className="uppercase tracking-[4px] text-gray-500 text-sm mb-3">
              Instagram
            </h3>

            <a
              href="https://www.instagram.com/amal.ography/"
              target="_blank"
              className="text-2xl hover:text-gray-400 transition"
            >
              @amal.ography
            </a>

          </div>

          {/* Phone */}
          <div>

            <h3 className="uppercase tracking-[4px] text-gray-500 text-sm mb-3">
              Contact / WhatsApp
            </h3>

            <a
              href="https://wa.me/919384264365"
              target="_blank"
              className="text-2xl hover:text-gray-400 transition"
            >
              +91 93842 64365
            </a>

          </div>

          {/* Email */}
<div>

  <h3 className="uppercase tracking-[4px] text-gray-500 text-sm mb-3">
    Email
  </h3>

  <a
    href="mailto:amalography.visuals@gmail.com"
    className="text-2xl hover:text-gray-400 transition break-all"
  >
    amalography.visuals@gmail.com
  </a>

</div>

        </div>

        {/* Right Side */}
        <div className="border border-gray-800 p-10 flex flex-col justify-center">

          <p className="uppercase tracking-[5px] text-gray-500 text-sm mb-6">
            Available For
          </p>

          <div className="space-y-5 text-2xl">

            <h3>Wedding Photography</h3>
            <h3>Event Coverage</h3>
            <h3>Cinematic Reels</h3>
            <h3>Brand & Model Shoots</h3>
            <h3>Professional Editing</h3>

          </div>

          <a
            href="https://wa.me/919384264365"
            target="_blank"
            className="mt-10 border border-white px-8 py-4 uppercase tracking-[4px] text-sm hover:bg-white hover:text-black transition duration-300 text-center"
          >
            Book Now
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact