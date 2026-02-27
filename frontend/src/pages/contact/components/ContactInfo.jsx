import React from "react";
import FadeIn from "../../../components/FadeIn";

const info = [
  {
    label: "Main Office",
    lines: ["Office 102, Al Babtain Building,", "Port Saeed, Dubai ,UAE"],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    label: "Mail",
    lines: ["ariel@mage-prime.com", "info@mage-prime.com"],
    hrefs: ["mailto:ariel@mage-prime.com", "mailto:info@mage-prime.com"],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    lines: ["+971-45-539402", "+971-5858-73888"],
    hrefs: ["tel:+97145539402", "tel:+97158587388"],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    ),
  },
  {
    label: "Website",
    lines: ["www.mage-prime.com"],
    hrefs: ["https://www.mage-prime.com"],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
];

const ContactInfo = () => (
  <div className="bg-[#f5f0e8] rounded-sm p-10 lg:p-14 h-full">
    {/* Heading */}
    <FadeIn direction="up" duration={1.1} amount={0.2}>
      <h2 className="text-[#2d5a1b] text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold uppercase tracking-tight leading-none mb-5">
        Contact Us
      </h2>
      <p className="text-gray-700 text-[0.98rem] leading-[1.8] mb-2">
        We invite you to visit our office or contact us to discuss your project.
      </p>
      <p className="text-[#2d5a1b] text-[0.98rem] leading-[1.8] mb-10">
        Let&rsquo;s create something extraordinary together!
      </p>
      <div className="w-10 h-0.5 bg-[#00c700] mb-10" />
    </FadeIn>

    {/* Contact items */}
    <div className="flex flex-col gap-8">
      {info.map((item, i) => (
        <FadeIn key={item.label} direction="up" delay={i * 0.1} duration={1} amount={0.15}>
          <div className="flex items-start gap-5">
            {/* Icon circle */}
            <div className="shrink-0 w-12 h-12 rounded-full bg-[#2d5a1b] text-white flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <p className="text-[#2d5a1b] font-bold text-[1rem] mb-1">
                {item.label}
              </p>
              {item.lines.map((line, j) =>
                item.hrefs ? (
                  <a
                    key={j}
                    href={item.hrefs[j]}
                    className="block text-[#2d5a1b] text-[0.92rem] leading-[1.9] hover:text-[#00c700] transition-colors duration-200"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={j} className="text-gray-600 text-[0.92rem] leading-[1.9]">
                    {line}
                  </p>
                )
              )}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);

export default ContactInfo;
