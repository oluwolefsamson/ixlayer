import React from "react";
import footerContent from "../assets/data/footerContent.json";

const Footer = () => {
  const {
    brandName,
    brandHighlightColor,
    brandDescription,
    healthTestingHighlightColor,
    copyrightText,
    contact,
    links,
  } = footerContent;

  return (
    <footer className="bg-[#0a1019] text-white pt-12 pb-6 border-t-2 border-[#111827]">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between gap-12 px-4">
        {/* Left Section */}
        <div className="min-w-[220px] flex-1 mb-8">
          <h1 className="text-2xl font-semibold -tracking-tighter text-white sm:text-4xl">
            {brandName.slice(0, 2)}
            <span className={brandHighlightColor}>{brandName.slice(2)}</span>
          </h1>
          <p className="mb-4 text-base leading-relaxed">
            {brandDescription.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={healthTestingHighlightColor}>Testing.</span>
          </p>
          <div className="text-xs text-gray-400 whitespace-pre-line">
            {copyrightText}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-[180px] flex-1 mb-8">
          <div className="mb-6">
            <div className="font-semibold mb-1">{contact.title}</div>
            <a
              href={`mailto:${contact.email}`}
              className="text-gray-400 text-sm hover:text-blue-400 transition"
            >
              {contact.email}
            </a>
          </div>
          <div>
            <div className="font-semibold mb-1">{contact.officeTitle}</div>
            <div className="text-gray-400 text-sm">
              {contact.officeLocation}
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-gray-400 text-sm hover:text-blue-400 transition"
            >
              {contact.email}
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-1 min-w-[220px] gap-12 mb-8">
          <div>
            <div className="font-semibold mb-2">{links.aboutTitle}</div>
            <ul className="text-gray-400 text-sm space-y-1">
              {links.aboutLinks.map((linkText, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-blue-400 transition">
                    {linkText}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">{links.guidesTitle}</div>
            <ul className="text-gray-400 text-sm space-y-1">
              {links.guidesLinks.map((linkText, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-blue-400 transition">
                    {linkText}
                  </a>
                </li>
              ))}
            </ul>

            {/* Dots */}
            <div className="flex gap-2 mt-4">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-white opacity-100" />
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-white opacity-40" />
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-white opacity-40" />
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-white opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
