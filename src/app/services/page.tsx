import { Code, Rocket, BrainCircuit, GlobeLock } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fbff] to-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-[#d4a017]">Services</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Carefully crafted solutions built for performance, scalability, and long-term success.
          </p>
        </header>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          <ServiceCard
            icon={<Code className="w-10 h-10 text-[#d4a017]" />}
            title="Software Development"
            description="Custom-built web and mobile solutions that are fast, secure, and scalable — designed to fit your exact business needs."
          />

          <ServiceCard
            icon={<Rocket className="w-10 h-10 text-[#d4a017]" />}
            title="Digital Marketing"
            description="Growth-oriented branding, content strategies, SEO, and campaigns focused on measurable results and visibility."
          />

          <ServiceCard
            icon={<BrainCircuit className="w-10 h-10 text-[#d4a017]" />}
            title="AI, ML & Deep Learning"
            description="Automated decision-making systems, intelligent data models, and predictive analytics to optimize business operations."
          />

          <ServiceCard
            icon={<GlobeLock className="w-10 h-10 text-[#d4a017]" />}
            title="Blockchain Solutions"
            description="Decentralized systems, secure smart contracts, and transparent digital infrastructure for future-focused organizations."
          />

          <ServiceCard
            icon={<BrainCircuit className="w-10 h-10 text-[#d4a017]" />}
            title="Generative AI Development"
            description="AI that creates: text, images, audio, content workflows — enhancing creativity, automation, and efficiency."
          />

          <ServiceCard
            icon={<Rocket className="w-10 h-10 text-[#d4a017]" />}
            title="Web 3.0 Consulting"
            description="Transition your business to the decentralized, user-centric next era of the internet with strategic architecture guidance."
          />

        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-[1.05rem]">
        {description}
      </p>
    </div>
  );
}
