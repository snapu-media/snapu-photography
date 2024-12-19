import Image from "next/image";

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Jane Wilson",
      role: "Software Developer",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Graphic Designer",
      image:
        "https://images.pexels.com/photos/7869071/pexels-photo-7869071.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Project Manager",
      image:
        "https://images.pexels.com/photos/15545296/pexels-photo-15545296/free-photo-of-man-sitting-behind-desk-using-laptop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Marketing Specialist",
      image:
        "https://images.pexels.com/photos/7964418/pexels-photo-7964418.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      name: "Christopher Garcia",
      role: "Data Scientist",
      image:
        "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      name: "Emma Wilson",
      role: "Product Designer",
      image:
        "https://images.pexels.com/photos/12662909/pexels-photo-12662909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="bg-cover bg-center bg-no-repeat  min-h-screen py-6 sm:py-8 md:py-10">  
    {/* bg-[#D3D3D3] */}
      <div className="max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-black-100 mb-6 sm:mb-8">
          Meet Our Team
        </h1>
        <p className="text-center text-black-300 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base">
          Our dedicated team of professionals is committed to delivering the best results for our clients.
        </p>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white/20 backdrop-blur-lg shadow-lg rounded-lg p-4 sm:p-6 md:p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="rounded-full object-cover"
                  layout="fill"
                />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-black-100">{member.name}</h2>
              <p className="text-sm sm:text-base text-black-300">{member.role}</p>
              <button className="mt-4 bg-blue-600 text-black px-3 sm:px-4 py-2 text-sm sm:text-base rounded hover:bg-blue-700">
                Message
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
