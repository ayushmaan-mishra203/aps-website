import Image from 'next/image';
export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold text-center mt-10" style={{ color: "#DAA520" }}>Professional Technology Assistance</h1>
        <h2 className="text-2xl font-bold text-center mt-5" style={{ color: "#333" }}>Your Partner in Digital Solutions</h2>
        <button className="text-xl text-center mt-3 bg-blue-100 p-2 rounded">Learn More</button>
      </div>

      <div className="flex justify-between bg-white p-10 rounded-lg mt-10">
        <Image
          src="./ChipImage.png"
          alt="Hero Image"
          width={300}
          height={600}
          className="rounded-lg shadow-lg"
        />

        <div className="flex flex-col items-center mt-5">
          <h3 className="text-3xl font-bold mt-5" style={{ color: "#333" }}>What We Offer</h3>
          <p className="mt-2 ml-20 text-lg text-gray-700">
            At APraSak Technologies, we deliver top-notch technology solutions tailored to your business needs. Our expert team is committed to providing innovative, efficient, and reliable services that drive growth, streamline operations, and prepare your business for future opportunities. With a focus on excellence and long-term success, we stand as a trusted partner in your digital journey.
          </p>
        </div>
      </div>

      <div className="flex justify-between bg-white p-10 rounded-lg">
        <div className="flex flex-col items-center mt-5 w-full">
          <h3 className="text-3xl font-bold" style={{ color: "#333" }}>Our Services</h3>
          <p className="mt-2 ml-20 text-md text-gray-700">
            Our mission is to empower businesses with cutting-edge technology solutions that enhance productivity, foster innovation, and drive success. We strive to be at the forefront of technological advancements, ensuring our clients are equipped with the tools they need to thrive in a competitive landscape.
          </p>
          <div className="flex justify-between items-stretch mt-15 w-full px-10 gap-10">
            <div className="flex flex-col items-center flex-1 bg-gray-50 rounded-lg p-6">
              <Image
                src="./service-icon1.png"
                alt="Service Image"
                width={100}
                height={100}
                className="rounded-lg"
              />
              <p className="mt-2 text-xl font-bold text-center">Software Development</p>
              <p className="text-center">We build powerful, scalable, and user-friendly software solutions for both web and mobile platforms. From intuitive websites to feature-rich mobile apps, our team ensures that your digital presence is seamless, innovative, and aligned with your business goals.</p>
            </div>
            <div className="flex flex-col items-center flex-1 bg-gray-50 rounded-lg p-6">
              <Image
                src="./service-icon2.png"
                alt="Service Image2"
                width={100}
                height={100}
                className="rounded-lg"
              />
              <p className="mt-2 text-xl font-bold text-center">Digital Marketing</p>
              <p className="text-center">Our digital marketing strategies go beyond just visibility — we focus on building connections. Through SEO, social media, content, and targeted campaigns, we help your brand stand out, engage effectively with your audience, and achieve measurable growth in the competitive digital space.</p>
            </div>
            <div className="flex flex-col items-center flex-1 bg-gray-50 rounded-lg p-6">
              <Image
                src="./service-icon3.png"
                alt="Service Image3"
                width={100}
                height={100}
                className="rounded-lg"
              />
              <p className="mt-2 text-xl font-bold text-center">Innovation & Research</p>
              <p className="text-center">Staying ahead of the curve, we dive deep into emerging technologies like Web 3.0, AI, ML, Generative AI, and Blockchain. Our research-driven approach ensures that your business can leverage cutting-edge solutions, opening doors to smarter automation, secure systems, and transformative digital experiences.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-white p-10 rounded-lg mt-10">
        <div className="flex flex-col items-center mt-5 w-full">
          <h3 className="text-3xl font-bold" style={{ color: "#333" }}>Contact Us</h3>
          <p className="mt-2 ml-20 text-lg text-gray-700">
            Ready to take your business to the next level? Contact us today to discuss how we can help you achieve your technology goals. Our team is here to provide personalized solutions that fit your unique needs and drive your success.
          </p>
        </div>
      </div>
    </div>
  );
}
