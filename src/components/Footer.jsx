import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a1019] text-white pt-12 pb-6 border-t-2 border-[#111827]">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between gap-12 px-4">
        {/* Left Section */}
        <div className="min-w-[220px] flex-1 mb-8">
          <h1 className="text-2xl font-semibold -tracking-tighter text-white sm:text-4xl">
            ix<span className="text-blue-600">layer</span>
          </h1>
          <p className="mb-4 text-base leading-relaxed">
            A complete solution
            <br />
            for Health{" "}
            <span className="text-blue-400 font-medium">Testing.</span>
          </p>
          <div className="text-xs text-gray-400">
            © ixLayer Inc. 2025.
            <br />
            All Rights Reserved
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-[180px] flex-1 mb-8">
          <div className="mb-6">
            <div className="font-semibold mb-1">Contact Us</div>
            <a
              href="mailto:info@ixlayer.com"
              className="text-gray-400 text-sm hover:text-blue-400 transition"
            >
              info@ixlayer.com
            </a>
          </div>
          <div>
            <div className="font-semibold mb-1">Office</div>
            <div className="text-gray-400 text-sm">Silicon Valley, CA</div>
            <a
              href="mailto:info@ixlayer.com"
              className="text-gray-400 text-sm hover:text-blue-400 transition"
            >
              info@ixlayer.com
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-1 min-w-[220px] gap-12 mb-8">
          <div>
            <div className="font-semibold mb-2">About</div>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Customers & Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Responsible Disclosure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Guides & White papers</div>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Case Studies
                </a>
              </li>
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
