import React from "react";
import Doc from "../assets/doc.png";
import Doc1 from "../assets/doc1.png";
import Doc2 from "../assets/doc2.png";

import healthContent from "../assets/data/healthContent.json";

const cardsImages = [Doc, Doc1, Doc2];

const Health = () => {
  const { hero, cards, infoCards } = healthContent;

  return (
    <div className="h-[950px] bg-gray-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:pt-24">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 mt-0 lg:mt-0 px-4 py-1 rounded-full bg-white/10 text-xs font-semibold text-white border border-white/20">
            {hero.badgeText}
          </span>
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-100 mb-6">
            {hero.headline}
          </h1>
          <p className="text-lg md:text-xl  text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {hero.paragraph}
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-gray-900 py-2 px-4 flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => {
          const headlineParts = card.heading.split(card.headingHighlight);
          return (
            <div
              key={index}
              className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-lg z-20"
            >
              {/* Background image */}
              <img
                src={cardsImages[index]}
                alt="card"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold leading-snug">
                  {headlineParts[0]}
                  <span className="text-blue-300">{card.headingHighlight}</span>
                  {headlineParts[1]}
                </h3>
                <p className="mt-2 text-sm">{card.description}</p>
                <button className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                  {card.buttonText}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Cards Section */}
      <div className="py-12 px-4 flex flex-wrap justify-center gap-6">
        {infoCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#17233b] rounded-2xl p-8 w-[300px] flex flex-col items-start z-20"
          >
            <span>{getIconByColor(card.color)}</span>
            <h4 className={`font-semibold text-lg mb-2 ${card.color}`}>
              {card.title}
            </h4>
            <p className="text-gray-300 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper to render icons by color (since SVGs cannot be stored in JSON)
const getIconByColor = (color) => {
  switch (color) {
    case "text-blue-300":
      return (
        <svg
          className="w-8 h-8 mb-4 text-blue-300"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v9.75A2.25 2.25 0 006.75 21h10.5a2.25 2.25 0 002.25-2.25V9.75"
          />
        </svg>
      );
    case "text-yellow-400":
      return (
        <svg
          className="w-8 h-8 mb-4 text-yellow-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>
      );
    case "text-purple-400":
      return (
        <svg
          className="w-8 h-8 mb-4 text-purple-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <rect width="18" height="14" x="3" y="5" rx="2" />
        </svg>
      );
    default:
      return null;
  }
};

export default Health;
