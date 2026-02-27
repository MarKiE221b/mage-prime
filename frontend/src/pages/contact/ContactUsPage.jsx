import React from "react";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import FadeIn from "../../components/FadeIn";

const ContactUsPage = () => (
  <main className="pt-20">
    <ContactHero />

    {/* ── Main contact section ── */}
    <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>

    {/* ── Map strip ── */}
    <section className="w-full h-[420px] bg-gray-100 overflow-hidden">
      <FadeIn direction="up" duration={1.2} amount={0.1}>
        <iframe
          title="Mage Dubai Office"
          width="100%"
          height="420"
          loading="lazy"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7!2d55.323!3d25.264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d5e5a5a5a5a%3A0x1!2sPort+Saeed%2C+Dubai!5e0!3m2!1sen!2sae!4v1"
        />
      </FadeIn>
    </section>

    {/* ── CTA strip ── */}
    <section className="w-full bg-gray-900 py-16 px-6 md:px-16 lg:px-24">
      <FadeIn direction="up" duration={1.1} amount={0.3}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-10 h-0.5 bg-[#00c700] mx-auto mb-7" />
          <h3 className="text-white text-[clamp(1.4rem,3vw,2rem)] font-light leading-relaxed mb-8">
            Ready to bring your vision to life?
          </h3>
          <a
            href="mailto:info@mage-prime.com"
            className="inline-flex items-center gap-3 px-8 py-3 bg-[#00c700] text-black text-sm font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            Email Us Directly
            <span>→</span>
          </a>
        </div>
      </FadeIn>
    </section>
  </main>
);

export default ContactUsPage;
