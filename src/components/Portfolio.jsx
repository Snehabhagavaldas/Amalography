import wedding from "../assets/wedding.png";
import puberty from "../assets/puberty.png";
import athelete from "../assets/athelete.mp4";
import brand from "../assets/brand.mp4";
import product from "../assets/product.mp4";
import baptism from "../assets/baptism.png";
import bs from "../assets/bs.png";
import bp from "../assets/bp.png";
import bss from "../assets/bss.png";
function Portfolio() {

  const portfolioItems = [

    {
      title: "Wedding Photography",
      category: "photo",
      media:
        wedding,
    },

    {
      title: "Birthday Event",
      category: "photo",
      media:
        baptism,
    },

    {
      title: "Puberty Ceremony",
      category: "photo",
      media:
        puberty,
    },
    {
      title: "Baby Shower",
      category: "photo",
      media:
        bs,
    },
{
      title: "Baptism",
      category: "photo",
      media:
        bp,
    },
{
      title: "Baby Shoot",
      category: "photo",
      media:
        bss,
    },

    {
      title: " Cinematic Reel",
      category: "video",
      media:
        athelete,
    },

    {
      title: "Model Brand Shoot",
      category: "video",
      media:
        brand,
    },

    {
      title: "Product Videography",
      category: "video",
      media:
        product,
    },

  ]

  return (
    <section
      id="portfolio"
      className="bg-black text-white px-6 md:px-16 py-28"
    >

      {/* Heading */}
      <div className="text-center mb-20">

        <p className="uppercase tracking-[6px] text-gray-500 text-sm mb-4">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-6xl font-bold uppercase">
          Selected Works
        </h2>

      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {portfolioItems.map((item, index) => (

          <div
            key={index}
            className="group relative overflow-hidden border border-gray-900"
          >

            {/* Media */}
            <div className="overflow-hidden">

              {item.category === "photo" ? (

                <img
                  src={item.media}
                  alt={item.title}
                  className="w-full h-125 object-cover group-hover:scale-110 transition duration-700"
                />

              ) : (

                <video
                  src={item.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-125 object-cover group-hover:scale-110 transition duration-700"
                />

              )}

            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">

              <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-2">
                {item.category}
              </p>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Portfolio