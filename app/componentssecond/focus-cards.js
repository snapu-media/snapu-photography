// componentssecond/focus-cards.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "../../lib/utils";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <Image
      src={card.src}
      alt={card.title}
      layout="fill"
      className="object-cover absolute inset-0"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards() {
  const [hovered, setHovered] = useState(null);

  // Define the cards directly in the component
  const cards = [
    {
      title: "Card 1",
      src: "https://images.pexels.com/photos/29749744/pexels-photo-29749744/free-photo-of-silhouette-of-woman-with-flower-in-sunlit-room.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Card 2",
      src: "https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Card 3",
      src: "https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Card 4",
      src: "https://images.pexels.com/photos/352894/pexels-photo-352894.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Card 5",
      src: "https://images.pexels.com/photos/3622517/pexels-photo-3622517.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Card 6",
      src: "https://images.pexels.com/photos/842578/pexels-photo-842578.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
