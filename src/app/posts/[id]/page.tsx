import CommentSection from "@/Components/CommentSection";
import AuthoreCard from "@/Components/AuthoreCard";
import Image from "next/image";

// Mock posts data
const posts = [
  {
    id: "1",
    title: "The Enchanting Hunza Valley",
    description:
      "Discover the stunning landscapes of Hunza Valley, surrounded by towering mountains, crystal-clear rivers, and vibrant meadows. Explore ancient forts, terraced fields, and rich cultural heritage. With its warm hospitality, serene ambiance, and breathtaking vistas, Hunza Valley is a paradise for nature lovers, photographers, and adventure enthusiasts, offering a magical escape into Pakistan’s beauty.",
    image: "/hunza01.jpg",
  },
  {
    id: "2",
    title: "Fairy Meadows: A Trekker’s Paradise",
    description:
      "Experience the serene beauty of Fairy Meadows, nestled at the base of Nanga Parbat, famously known as the Killer Mountain. This breathtaking destination offers lush green meadows, unparalleled views of snow-capped peaks, and a peaceful escape into nature. Perfect for trekkers, photographers, and adventurers, Fairy Meadows is a true gem for exploring Pakistan’s majestic mountain landscapes.",
    image: "/Fairy.jpg",
  },
  {
    id: "3",
    title: "Skardu: The Land of Lakes and Peaks",
    description:
      "Explore Skardu’s mesmerizing lakes, lush valleys, and the majestic Karakoram mountain range. Discover the serene beauty of Shangrila Resort, the tranquility of Sheosar Lake, and the captivating charm of Deosai National Park. Skardu is a haven for adventure seekers, offering trekking, climbing, and breathtaking landscapes that make it a must-visit destination for nature and photography enthusiasts.",
    image: "/skardu.jpg",
  },
  {
    id: "4",
    title: "Swat Valley: Switzerland of the East",
    description:
      "Discover the charm of Swat Valley, with its lush green meadows, sparkling rivers, and rich historical Buddhist heritage. Wander through the serene Malam Jabba, ancient archaeological sites, and bustling bazaars. Swat Valley offers a unique blend of natural splendor and cultural history, making it a must-visit destination for travelers and adventure lovers alike.",
    image: "/swat.jpg",
  },
  {
    id: "5",
    title: "Neelum Valley: A Hidden Gem",
    description:
      "Neelum Valley, located in northern Pakistan, is a serene paradise. Its rolling hills, vibrant flora, and crystal-clear rivers create a peaceful landscape, ideal for nature lovers. Surrounded by majestic mountains, the valley offers both peace and adventure. Whether hiking or relaxing, Neelum Valley provides a tranquil escape with stunning natural beauty.",
    image: "/neelum.jpg",
  },
  {
    id: "6",
    title: "Murree: The Queen of Hills",
    description:
      "Murree, a charming hill station in northern Pakistan, is famous for its lush green hills and cool climate. Surrounded by towering pine trees and scenic landscapes, it provides a peaceful retreat. With breathtaking views and a serene atmosphere, Murree is the perfect destination for relaxation and a refreshing escape into nature.",
    image: "/murre.jpg",
  },
];

type PostParams = {
  id: string;
};

export default async function Post({ params }: { params: Promise<PostParams> }) {
  const { id } = await params; // Ensure that the `params` is resolved asynchronously
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-6"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthoreCard />
    </div>
  );
}


// import CommentSection from "@/Components/CommentSection";
// import AuthoreCard from "@/Components/AuthoreCard";
// import Image from "next/image";

// const posts = [
//   {
//     id: "1",
//     title: "The Enchanting Hunza Valley",
//     description:
//       "Discover the stunning landscapes of Hunza Valley, surrounded by towering mountains, crystal-clear rivers, and vibrant meadows. Explore ancient forts, terraced fields, and rich cultural heritage. With its warm hospitality, serene ambiance, and breathtaking vistas, Hunza Valley is a paradise for nature lovers, photographers, and adventure enthusiasts, offering a magical escape into Pakistan’s beauty.",

//     image: "/hunza01.jpg",
//   },
//   {
//     id: "2",
//     title: "Fairy Meadows: A Trekker’s Paradise",
//     description:
//       "Experience the serene beauty of Fairy Meadows, nestled at the base of Nanga Parbat, famously known as the Killer Mountain. This breathtaking destination offers lush green meadows, unparalleled views of snow-capped peaks, and a peaceful escape into nature. Perfect for trekkers, photographers, and adventurers, Fairy Meadows is a true gem for exploring Pakistan’s majestic mountain landscapes.",

//     image: "/Fairy.jpg",
//   },
//   {
//     id: "3",
//     title: "Skardu: The Land of Lakes and Peaks",
//     description:
//       "Explore Skardu’s mesmerizing lakes, lush valleys, and the majestic Karakoram mountain range. Discover the serene beauty of Shangrila Resort, the tranquility of Sheosar Lake, and the captivating charm of Deosai National Park. Skardu is a haven for adventure seekers, offering trekking, climbing, and breathtaking landscapes that make it a must-visit destination for nature and photography enthusiasts.",

//     image: "/skardu.jpg",
//   },
//   {
//     id: "4",
//     title: "Swat Valley: Switzerland of the East",
//     description:
//       "Discover the charm of Swat Valley, with its lush green meadows, sparkling rivers, and rich historical Buddhist heritage. Wander through the serene Malam Jabba, ancient archaeological sites, and bustling bazaars. Swat Valley offers a unique blend of natural splendor and cultural history, making it a must-visit destination for travelers and adventure lovers alike.",
//     image: "/swat.jpg",
//   },
//   {
//     id: "5",
//     title: "Neelum Valley: A Hidden Gem",
//     description:
//       "Neelum Valley, located in northern Pakistan, is a serene paradise. Its rolling hills, vibrant flora, and crystal-clear rivers create a peaceful landscape, ideal for nature lovers. Surrounded by majestic mountains, the valley offers both peace and adventure. Whether hiking or relaxing, Neelum Valley provides a tranquil escape with stunning natural beauty.",

//     image: "/neelum.jpg",
//   },
//   {
//     id: "6",
//     title: "Murree: The Queen of Hills",
//     description:
//       "Murree, a charming hill station in northern Pakistan, is famous for its lush green hills and cool climate. Surrounded by towering pine trees and scenic landscapes, it provides a peaceful retreat. With breathtaking views and a serene atmosphere, Murree is the perfect destination for relaxation and a refreshing escape into nature.",

//     image: "/murre.jpg",
//   },
// ];


// export default function Post ({params}: {params: {id: string}}){
//   const { id } = params;
//   const post = posts.find((p) => p.id === id);
//   if (!post) {
//     return (
//       <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
//     );
//   }

//   const renderParagraphs = (description: string) => {
//     return description.split("/n").map((para, index) => (
//       <p key={index} className="mt-4 text-justify">
//         {para.trim()}
//       </p>
//     ));
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-5">
//       <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
//         {" "}
//         {post.title}
//       </h1>
//       {post.image && (
//         <Image
//           src={post.image}
//           alt={post.title}
//           className="w-full h-auto rounded-md mt-6"
//         />
//       )}
//       <div className="mt-6 text-lg text-slate-700">
//         {renderParagraphs(post.description)}
//       </div>
//       <CommentSection postId={post.id} />
//       <AuthoreCard />
//     </div>
//   );
// }
