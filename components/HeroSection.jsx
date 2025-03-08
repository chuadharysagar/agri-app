"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const HeroSection = () => {
   const router = useRouter();

   return (
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-white">
         {/* Background Image */}
         <div className="absolute inset-0 ml-6 mr-6 mt-2 mb-4 rounded-lg overflow-hidden">
            <Image
               src="/images/heroImage.png" // Change this to your actual image path
               alt="Agriculture background"
               layout="fill"
               objectFit="cover"
               className="brightness-75 rounded-lg"
            />
         </div>

         {/* Content */}
         <div className="relative text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
               🌱 Promoting Sustainable & Organic Agriculture
            </h1>
            <p className="text-lg md:text-xl mt-4 drop-shadow-lg">
               Fresh, Healthy, and Organic - A Better Future Starts with Nature 🌍
            </p>
            <button
               onClick={() => router.push("/chatai")}
               className="mt-4 px-6 py-3 border-2 border-black text-white bg-green-600 rounded-lg hover:bg-green-700 transition">
               Ask AI 🤖
            </button>
         </div>
      </div>
   );
};

export default HeroSection;
