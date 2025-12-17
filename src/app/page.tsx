import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      {/* HERO SECTION W/ BACKGROUND IMAGE */}
      <div
        className="relative flex flex-col items-center justify-center h-[550px] px-10"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold">Professional Technology Assistance</h1>
          <h2 className="text-2xl font-semibold mt-3">Your Partner in Digital Solutions</h2>
          <button className="mt-6 px-6 py-3 rounded bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-lg transition">
            Learn More
          </button>
        </div>
      </div>

      {/* WHAT WE OFFER */}
      <div className="flex justify-between bg-white p-10 rounded-lg mt-10 gap-10">

        <Image
          src="/ChipImage.png"
          alt="Chip"
          width={300}
          height={600}
          className="rounded-lg shadow-lg"
        />

        <div className="flex flex-col justify-center w-2/3">
          <h3 className="text-3xl font-bold text-gray-800">
            What We Offer
          </h3>
          {/* cyan divider */}
          <div className="w-20 h-1 bg-cyan-500 mt-2 mb-3"></div>

          <p className="text-lg text-gray-700 leading-relaxed">
            At APraSak Technologies, we deliver top-notch technology
            solutions tailored to your business needs. Our expert
            team ensures innovative, efficient, and reliable services
            that drive growth and prepare your business for long-term success.
          </p>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="bg-white p-10 rounded-lg mt-10">
        <div className="flex flex-col items-center w-full">

          <h3 className="text-3xl font-bold text-gray-800">Our Services</h3>
          <div className="w-20 h-1 bg-cyan-500 mt-2 mb-6"></div>

          <p className="text-lg text-gray-700 text-center max-w-3xl leading-relaxed">
            We empower businesses with cutting-edge digital solutions that
            enhance productivity, streamline operations, and drive measurable success.
          </p>

          <div className="flex justify-between mt-10 w-full px-10 gap-10">

            <div className="flex flex-col items-center flex-1 bg-gray-50 rounded-lg p-6 border border-transparent hover:border-cyan-400 transition">
              <Image src="/service-icon1.png" width={100} height={100} alt="Software" />
              <p className="mt-2 text-xl font-bold">Software Development</p>
              <p className="text-center mt-1 text-gray-700">
                Scalable custom software for web & mobile platforms.
              </p>
            </div>

            <div className="flex flex-col items-center flex-1 bg-gray-50 rounded-lg p-6 border border-transparent hover:border-cyan-400 transition">
              <Image src="/service-icon2.png" width={100} height={100} alt="Digital Marketing" />
              <p className="mt-2 text-xl font-bold">Digital Marketing</p>
              <p className="text-center mt-1 text-gray-700">
                Organic + paid strategies to drive engagement and conversions.
              </p>
            </div>

            <div className="flex flex-col items-center flex-1 bg-gray-50 rounded-lg p-6 border border-transparent hover:border-cyan-400 transition">
              <Image src="/service-icon3.png" width={100} height={100} alt="Innovation" />
              <p className="mt-2 text-xl font-bold">Innovation & Research</p>
              <p className="text-center mt-1 text-gray-700">
                AI, ML & blockchain integration for next-gen automation.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="bg-white p-10 rounded-lg mt-10 flex justify-center">
        <div className="flex flex-col items-center w-full text-center max-w-2xl">

          <h3 className="text-3xl font-bold text-gray-800">Contact Us</h3>
          <div className="w-20 h-1 bg-cyan-500 mt-2 mb-3"></div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Let’s discuss how our solutions can help you achieve your goals.
          </p>

          <button className="mt-6 px-6 py-3 rounded bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-lg transition">
            Get In Touch
          </button>
        </div>
      </div>

    </div>
  );
}
