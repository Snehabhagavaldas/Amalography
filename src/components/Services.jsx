function Services() {

  const services = [
    {
      title: "Photography",
      description:
        "Professional photography for weddings, events, brands, and creative productions.",
    },

    {
      title: "Cinematic Videography",
      description:
        "High-quality cinematic visuals crafted to capture stories with emotion and style.",
    },

    {
      title: "Photo & Video Editing",
      description:
        "Creative editing, color grading, retouching, and post-production for premium visuals.",
    },

    {
      title: "Brand Shoots",
      description:
        "Professional visual content creation for products and branding campaigns.",
    },
  ]

  return (
    <section id="services"className="bg-black text-white px-6 md:px-16 py-28">

      {/* Section Heading */}
      <div className="text-center mb-20">

        <p className="uppercase tracking-[6px] text-gray-500 text-sm mb-4">
          Services
        </p>

        <h2 className="text-4xl md:text-6xl font-bold uppercase">
          What We Create
        </h2>

      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {services.map((service, index) => (

          <div
            key={index}
            className="border border-gray-800 p-10 hover:border-white transition duration-500 group"
          >

            <h3 className="text-2xl font-semibold mb-6 group-hover:tracking-[3px] transition-all duration-500">
              {service.title}
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              {service.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Services