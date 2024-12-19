import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import {DotPattern} from "../../components/ui/dot-pattern"
import { cn } from "../../lib/utils"

export function StickyRevealMain() {
  // Example content data
  const contentData = [
    {
      title: "Our Story",
      description: "From a dream to reality, our journey in photography is one of passion and perseverance. Let us take you through the moments that define who we are.",
      content: (
        <div>
          <img
            src="https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Our Story"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {/* <p className="mt-4 text-lg text-gray-700">
            We started our photography journey over a decade ago with a simple mission: to capture moments that last a lifetime. From weddings to portraits, we aim to tell your story through the lens.
          </p> */}
        </div>
      ),
    },
    {
      title: "Our Mission and Vision",
      description: "Our mission is clear: to immortalize the fleeting moments that make life beautiful. Our vision? To capture these stories in the most authentic, heartfelt way.",
      content: (
        <div>
          <img
            src="https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Our Mission and Vision"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {/* <p className="mt-4 text-lg text-gray-700">
            We started our photography journey over a decade ago with a simple mission: to capture moments that last a lifetime. From weddings to portraits, we aim to tell your story through the lens.
          </p> */}
        </div>
      ),
    },
    {
      title: "Our Team",
      description: "Behind every great photograph is a talented team of creative minds. Meet the photographers who bring your memories to life.",
      content: (
        <div>
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Our Team"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {/* <p className="mt-4 text-lg text-gray-700">
            Our team consists of skilled photographers and creatives who are passionate about their craft. We believe in collaboration and ensuring that every image tells a unique story.
          </p> */}
        </div>
      ),
    },
    {
      title: "Our Work",
      description: "Explore a world of captivating visuals, where every shot tells a story, evokes emotion, and captures the essence of a moment.",
      content: (
        <div>
          <img
            src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Our Work"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {/* <p className="mt-4 text-lg text-gray-700">
            Our portfolio includes everything from breathtaking landscapes to intimate portraits. Explore our work and see how we capture emotions in every shot.
          </p> */}
        </div>
      ),
    },
  ];
  
  return (
    <div className="relative flex w-full min-h-screen items-center justify-center overflow-hidden overflow-x-hidden rounded-lg bg-background p-20 md:shadow-xl bg-gray-200">
      
      {/* Dot Pattern Background */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "absolute inset-0 w-full h-full pointer-events-none",
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
      
      {/* Heading at the top middle */}
      <h2 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-black">
        About US
      </h2>

      {/* Sticky Scroll */}
      <StickyScroll content={contentData} className="max-w-full overflow-hidden" />
    </div>
  );
}