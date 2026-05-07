import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-8 md:px-16 py-6 flex justify-between items-center border-b border-gray-900 fixed top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Amal Visuals Logo"
          className="w-12 h-12 object-cover"
        />

        <h1 className="text-xl md:text-2xl font-semibold tracking-[3px] uppercase">
          Amalography
        </h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-10 text-[13px] uppercase tracking-[4px] text-gray-300">

  <li>
    <a
      href="#home"
      className="hover:text-white transition duration-300"
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#portfolio"
      className="hover:text-white transition duration-300"
    >
      Portfolio
    </a>
  </li>

  <li>
    <a
      href="#services"
      className="hover:text-white transition duration-300"
    >
      Services
    </a>
  </li>

  <li>
    <a
      href="#contact"
      className="hover:text-white transition duration-300"
    >
      Contact
    </a>
  </li>

</ul>
    </nav>
  );
}

export default Navbar;
