"use client";
import { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      name: string;
      email: string;
      message: string;
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed request");

      setStatus("Message Sent ✅");
    } catch (error) {
      setStatus("Something went wrong ❌");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef5ff] to-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-black">Get in </span>
          <span className="text-[#d4a017]">Touch</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We are here to answer questions, discuss projects, or explore new opportunities.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white border border-gray-200 shadow-lg rounded-2xl p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3">
            <User className="text-[#d4a017]" />
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3">
            <Mail className="text-[#d4a017]" />
            <input
              name="email"
              required
              type="email"
              placeholder="Your Email"
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-start gap-3 border border-gray-300 rounded-lg px-4 py-3">
            <MessageSquare className="text-[#d4a017] mt-1" />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
              className="w-full outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#d4a017] text-white font-semibold hover:bg-[#c49715] transition"
          >
            Send Message →
          </button>
        </form>

        {status && <p className="text-center text-sm text-gray-600 mt-4">{status}</p>}
      </div>
    </div>
  );
}
