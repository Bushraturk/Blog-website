import React from "react";

export default function Feature() {
  const areas = [
    "Hunza Valley",
    "Skardu",
    "Swat Valley",
    "Neelum Valley",
    "Murree",
    "Fairy Meadows"
  ];

  return (
    <div>
      {/* Feature Section */}
      <section className="py-8 bg-neutral-100 mb-40">
        {/* Section Title: Exploring Areas */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Explore the Majestic Areas of Pakistan
        </h2>

        {/* Paragraph with Description */}
        <p className="text-lg text-center text-gray-700 mx-auto max-w-3xl mb-12">
          Discover the breathtaking beauty of Pakistan, from lush valleys to
          towering mountains. Explore these stunning areas and immerse yourself
          in nature&apos;s wonders.
        </p>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl px-5">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:bg-blue-400"
            >
              <h3 className="text-xl font-semibold text-center text-gray-800">
                {area}
              </h3>
            </div>
          ))}
        </div>
        
      </section>
    </div>
  );
}


