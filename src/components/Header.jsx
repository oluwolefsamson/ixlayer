"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import heroImg from "../assets/heroImg.jpg";

const navigation = [
  { name: "Solution", href: "#" },
  { name: "Resources", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const stats = [
  { id: 1, value: "Curofins" },
  { id: 2, value: "Charles-river" },
  { id: 3, value: "UCSF-Health" },
  { id: 4, value: "biotechne" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            <a
              href="#"
              className="text-md font-semibold leading-6 bg-blue-400 py-2 px-4 rounded-3xl text-white"
            >
              Request a demo
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Sheet Nav */}
      <div
        className={`fixed inset-0 z-[100] flex items-end justify-center transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          visibility: mobileMenuOpen ? "visible" : "hidden",
        }}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        {/* Bottom Sheet */}
        <div
          className={`relative w-full bg-white rounded-t-3xl shadow-xl transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "translate-y-full"
          }`}
          style={{
            height: "50vh",
            maxWidth: "600px",
          }}
        >
          <div className="flex justify-center py-2">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-2"></div>
          </div>
          <div className="flex justify-end px-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 mt-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-semibold text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="mt-4 bg-blue-400 px-4 py-2 rounded-3xl text-white font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a demo
            </a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center bg-no-repeat h-[700px] lg:h-[1300px]"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="mx-auto max-w-5xl h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl mt-[-100px] lg:mt-[-450px]">
              Health testing within{" "}
              <span className="text-blue-600">reach.</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Get ahead of today's health challenges in a rapidly evolving
              industry with ixlayer health testing-fast, affordable, and proven
              reliable by over 4 million people.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className=" bg-blue-400 px-4 py-2 rounded-3xl text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Request a demo
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 rounded-3xl border border-gray-400 py-2 px-4 text-gray-500"
              >
                Request a demo
              </a>
            </div>
          </div>
        </div>
        {/* Stats at the bottom */}
        <div className="absolute bottom-0 left-0 w-full py-10 bg-black/60">
          <div className="w-full px-2 lg:px-8">
            <dl className="flex flex-row justify-between items-center text-center w-full">
              {stats.map((stat) => (
                <div key={stat.id} className="flex-1 flex flex-col gap-y-2">
                  <dd className="order-first    font-semibold tracking-tight text-white sm:text-2xl ">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
