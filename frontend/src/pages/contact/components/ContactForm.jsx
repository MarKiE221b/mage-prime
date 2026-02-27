import React, { useState } from "react";
import FadeIn from "../../../components/FadeIn";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend / email service
    setSent(true);
  };

  const inputClass =
    "w-full bg-white border border-gray-200 focus:border-[#00c700] outline-none px-4 py-3.5 text-gray-800 text-[0.95rem] placeholder:text-gray-400 transition-colors duration-200";

  return (
    <FadeIn direction="up" delay={0.1} duration={1.2} amount={0.15}>
      <div className="bg-white border border-gray-100 shadow-sm rounded-sm p-10 lg:p-14 h-full">
        <p className="text-[#00c700] text-xs font-semibold tracking-[0.35em] uppercase mb-4">
          Send a Message
        </p>
        <h3 className="text-gray-900 font-light text-[clamp(1.6rem,2.8vw,2.2rem)] leading-snug mb-2">
          Let&rsquo;s Talk About Your Project
        </h3>
        <div className="w-8 h-0.5 bg-[#00c700] mb-8" />

        {sent ? (
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <div className="w-14 h-14 rounded-full bg-[#00c700]/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#00c700" strokeWidth="2.5" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-900 font-semibold text-lg">Message Sent!</p>
            <p className="text-gray-500 text-sm text-center max-w-xs">
              Thank you for reaching out. We&rsquo;ll get back to you shortly.
            </p>
            <button
              onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
              className="mt-4 text-xs font-bold tracking-[0.2em] uppercase text-[#00c700] hover:text-gray-900 transition-colors duration-200"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full Name *"
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address *"
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={inputClass}
              />
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={inputClass}
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell us about your project *"
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="self-start mt-2 inline-flex items-center gap-3 px-8 py-3.5 bg-[#00c700] text-black text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#2d5a1b] hover:text-white transition-colors duration-300"
            >
              Send Message
              <span>→</span>
            </button>
          </form>
        )}
      </div>
    </FadeIn>
  );
};

export default ContactForm;
