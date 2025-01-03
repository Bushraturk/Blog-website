import React from "react";
// import BlogCard from "./BlogCard";
import BlogCard from "@/Components/BlogCard";
export default function Mega() {
  const post = [
    {
      id: "1",
      title: "The Enchanting Hunza Valley",
      description:
        "Discover the stunning landscapes of Hunza Valley, surrounded by towering mountains, crystal-clear rivers, and vibrant meadows. Explore ancient forts, terraced fields, and rich cultural heritage. With its warm hospitality, serene ambiance, and breathtaking vistas, Hunza Valley is a paradise for nature lovers, photographers, and adventure enthusiasts, offering a magical escape into Pakistan’s beauty.",
      date: "2024-12-31",
      image: "/hunza01.jpg",
    },
    {
      id: "2",
      title: "Fairy Meadows: A Trekker’s Paradise",
      description:
        "Experience the serene beauty of Fairy Meadows, nestled at the base of Nanga Parbat, famously known as the Killer Mountain. This breathtaking destination offers lush green meadows, unparalleled views of snow-capped peaks, and a peaceful escape into nature. Perfect for trekkers, photographers, and adventurers, Fairy Meadows is a true gem for exploring Pakistan’s majestic mountain landscapes.",
      date: "2024-12-31",
      image: "/Fairy.jpg",
    },
    {
      id: "3",
      title: "Skardu: The Land of Lakes and Peaks",
      description:
        "Explore Skardu’s mesmerizing lakes, lush valleys, and the majestic Karakoram mountain range. Discover the serene beauty of Shangrila Resort, the tranquility of Sheosar Lake, and the captivating charm of Deosai National Park. Skardu is a haven for adventure seekers, offering trekking, climbing, and breathtaking landscapes that make it a must-visit destination for nature and photography enthusiasts.",
      date: "2024-12-31",
      image: "/skardu.jpg",
    },
    {
      id: "4",
      title: "Swat Valley: Switzerland of the East",
      description:
        "Discover the charm of Swat Valley, with its lush green meadows, sparkling rivers, and rich historical Buddhist heritage. Wander through the serene Malam Jabba, ancient archaeological sites, and bustling bazaars. Swat Valley offers a unique blend of natural splendor and cultural history, making it a must-visit destination for travelers and adventure lovers alike.",
      date: "2024-12-31",
      image: "/swat.jpg",
    },
    {
      id: "5",
      title: "Neelum Valley: A Hidden Gem",
      description:
        "Neelum Valley, located in northern Pakistan, is a serene paradise. Its rolling hills, vibrant flora, and crystal-clear rivers create a peaceful landscape, ideal for nature lovers. Surrounded by majestic mountains, the valley offers both peace and adventure. Whether hiking or relaxing, Neelum Valley provides a tranquil escape with stunning natural beauty.",

      date: "2024-12-31",

      image: "/neelum.jpg",
    },
    {
      id: "6",
      title: "Murree: The Queen of Hills",
      description:
        "Murree, a charming hill station in northern Pakistan, is famous for its lush green hills and cool climate. Surrounded by towering pine trees and scenic landscapes, it provides a peaceful retreat. With breathtaking views and a serene atmosphere, Murree is the perfect destination for relaxation and a refreshing escape into nature.",
      date: "2024-12-31",
      image: "/murre.jpg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring The Beauty of Pakistan
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {post.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
