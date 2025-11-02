export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fbff] to-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-[#d4a017]">APraSak</span> Technologies
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Where expertise meets innovation to shape smarter and future-ready solutions.
          </p>
        </header>

        {/* Section */}
        <Section title="Technical Experience">
          <p>
            <strong>Software Development:</strong> We build scalable, efficient, and intuitive
            digital solutions across web and mobile platforms.
          </p>
          <p>
            <strong>Digital Marketing:</strong> We empower brands through data-driven digital
            strategies that create real business impact.
          </p>
        </Section>

        <Section title="Frontiers of Innovation">
          <ul className="list-disc ml-5 space-y-2">
            <li><strong>Web 3.0:</strong> User-owned digital ecosystems.</li>
            <li><strong>AI, ML & Deep Learning:</strong> Intelligent and automated decision systems.</li>
            <li><strong>Generative AI:</strong> Creating new text, visuals, and content with data-driven creativity.</li>
            <li><strong>Blockchain:</strong> Secure, decentralized, and trusted digital infrastructure.</li>
          </ul>
        </Section>

        <Section title="Domain Expertise">
          <p>
            We specialize in <strong>E-Commerce, Healthcare, Finance, Wealth & Investment</strong>,
            ensuring our solutions are industry-aligned and future-ready.
          </p>
        </Section>

        <Section title="High ROI">
          <p>
            Reduce operational costs and unlock innovation by outsourcing IT complexities to us,
            allowing your team to focus on what matters most.
          </p>
        </Section>

        <Section title="Satisfaction Guaranteed">
          <p>
            We provide reliable, premium, and personalized service — regardless of project scale.
            Our work is not just delivered — it is backed by commitment.
          </p>
        </Section>

      </div>
    </div>
  );
}


function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-3 text-gray-700 leading-relaxed text-[1.05rem]">
        {children}
      </div>
    </div>
  );
}
