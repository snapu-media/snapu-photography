import TextReveal from '../../components/ui/text-reveal'

export function TextRevealMain() {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center rounded-lg  bg-white dark:bg-black p-8">
      {/* Left Images Section */}
      <div className="flex flex-col flex-shrink-0  gap-4">
        {/* First Image */}
        <img
  src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
  alt="Image 1"
  className="w-96 h-auto rounded-lg shadow-lg transform rotate-2"
/>

        {/* Second Image */}
        <img
          src="https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image 2"
          className="w-96 h-auto rounded-lg shadow-lg transform -rotate-2"
        />
        <img
          src="https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image 1"
          className="w-96 h-auto rounded-lg shadow-lg transform rotate-2"
        />
      </div>

      {/* Text Reveal Section */}
      <div className="flex-1">
        <TextReveal 
        text="Photography is the art of frozen time. The ability to store the emotion ina moment." />
      </div>

      {/* Right Images Section */}
      <div className="flex flex-col flex-shrink-0 gap-4">
        {/* First Image */}
        <img
          src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image 1"
          className="w-96 h-auto rounded-lg shadow-lg transform rotate-2"
        />
        {/* Second Image */}
        <img
          src="https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image 2"
          className="w-96 h-auto rounded-lg shadow-lg transform -rotate-2"
        />
        <img
          src="https://images.pexels.com/photos/298298/pexels-photo-298298.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Image 1"
          className="w-96 h-auto rounded-lg shadow-lg transform rotate-2"
        />
      </div>
    </div>
  );
}
