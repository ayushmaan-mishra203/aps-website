import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      {/* HERO SECTION */}
      <div
        className="relative flex flex-col items-center justify-center h-[400px] sm:h-[550px] px-6 sm:px-10"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white max-w-2xl px-4">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Professional Technology Assistance
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold mt-3">
            Your Partner in Digital Solutions
          </h2>

          <button className="mt-6 px-6 py-3 rounded bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-lg transition">
            Learn More
          </button>
        </div>
      </div>

      {/* WHAT WE OFFER */}
      <div className="bg-white p-6 sm:p-10 rounded-lg mt-10 flex flex-col sm:flex-row sm:justify-between items-center gap-8">

        <Image
          src="/ChipImage.png"
          alt="Chip"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />

        <div className="flex flex-col w-full sm:w-2/3 text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            What We Offer
          </h3>

          <div className="w-16 sm:w-20 h-1 bg-cyan-500 mt-2 mb-3 mx-auto sm:mx-0" />

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            At APraSak Technologies, we deliver tailored technology
            solutions designed to strengthen your business operations
            and support long-term growth.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="bg-white p-6 sm:p-10 rounded-lg mt-10">

        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Our Services
          </h3>

          <div className="w-16 sm:w-20 h-1 bg-cyan-500 mt-2 mb-4 mx-auto" />
        </div>

        <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto text-base sm:text-lg">
          Empowering businesses with modern solutions that boost productivity,
          automate workflows, and drive measurable results.
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-stretch gap-6 sm:gap-10 mt-10">

          <div className="flex flex-col items-center flex-1 bg-gray-50 rounded-lg p-6 border border-transparent hover:border-cyan-400 transition">
            <Image src="/service-icon1.png" width={85} height={85} alt="Software Development" />
            <p className="mt-3 text-lg font-bold">Software Development</p>
            <p className="text-center mt-1 text-gray-700 text-sm sm:text-base">
              Custom scalable web & mobile applications.
            </p>
          </div>

          <div className="flex flex-col items-center flex-1 bg-gray-50 rounded-lg p-6 border border-transparent hover:border-cyan-400 transition">
            <Image src="/service-icon2.png" width={85} height={85} alt="Marketing" />
            <p className="mt-3 text-lg font-bold">Digital Marketing</p>
            <p className="text-center mt-1 text-gray-700 text-sm sm:text-base">
              Targeted visibility & engagement strategies.
            </p>
          </div>

          <div className="flex flex-col items-center flex-1 bg-gray-50 rounded-lg p-6 border border-transparent hover:border-cyan-400 transition">
            <Image src="/service-icon3.png" width={85} height={85} alt="Research" />
            <p className="mt-3 text-lg font-bold">Innovation & Research</p>
            <p className="text-center mt-1 text-gray-700 text-sm sm:text-base">
              AI, ML & emerging tech integration.
            </p>
          </div>

        </div>

      </div>

      {/* CONTACT */}
      <div className="bg-white p-6 sm:p-10 rounded-lg mt-10 flex justify-center">
        <div className="flex flex-col items-center text-center max-w-xl">

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Contact Us
          </h3>

          <div className="w-16 sm:w-20 h-1 bg-cyan-500 mt-2 mb-4" />

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We would love to collaborate and find the right digital approach for your business.
          </p>

          <button className="mt-6 px-6 py-3 rounded bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-lg transition">
            Get In Touch
          </button>
        </div>
      </div>

    </div>
  );
}
