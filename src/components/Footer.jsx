function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-8 border-t border-gray-900">

      <div className="flex flex-col md:flex-row justify-between gap-12">

        {/* Brand */}
        <div>

          <h2 className="text-xl font-semibold uppercase tracking-[5px] mb-4">
            Amalography
          </h2>

          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Photography, cinematic videography, and creative editing
            crafted to capture stories through visuals.
          </p>

        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4 uppercase tracking-[3px] text-sm text-gray-400">

          <a href="#home" className="hover:text-white transition duration-300">
            Home
          </a>

          <a href="#services" className="hover:text-white transition duration-300">
            Services
          </a>

          <a href="#portfolio" className="hover:text-white transition duration-300">
            Portfolio
          </a>

          <a href="#contact" className="hover:text-white transition duration-300">
            Contact
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-900 mt-8 pt-5 text-gray-600 text-xs">

        © 2026 Amalography. All Rights Reserved.

      </div>

    </footer>
  )
}

export default Footer