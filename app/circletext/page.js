
export  function CircleText2() {
    return (
        <div className="flex lg:mt-60 lg:ml-20 sm:mt-60  ">
          {/* items-center justify-center */}
          <div className="relative w-64 h-64">
            {/* Circular Text */}
            <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
              {Array.from("Call US Now and Get Rewards").map((char, index) => (
                <span
                  key={index}
                  className="absolute text-lg font-bold uppercase tracking-wide"
                  style={{
                    transform: `rotate(${index * (360 / 28)}deg) translate(8rem) rotate(${index * (360 / 28)}deg)`,
                  }}
                >
                  {char}
                </span>  
              ))}
            </div>
            {/* Rectangular Box */}
            <div className="absolute top-1/2 left-1/2 w-80 transform -translate-x-1/2 -translate-y-1/2 z-20 ml-0">
  <img
    src="/circleimage4.png" 
    alt="Descriptive Text"
    className="w-full h-full object-cover rounded-lg"
  />
</div>
<div className="absolute top-1/2 left-1/2 w-80 h-14 bg-gray-800 text-white flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg">
  Call Now.......................................... Let's Do It
</div>

          </div>
        </div>
      );
    }



    export default function CircleText() {
      return (
          <div className="flex lg:mt-0 ml-10 mr-20 mb-10 ">
            {/* items-center justify-center */}
            <div className="relative w-64 h-64">
              {/* Circular Text */}
              <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                {Array.from("Explore Our Great Services").map((char, index) => (
                  <span
                    key={index}
                    className="absolute text-lg font-bold uppercase tracking-wide"
                    style={{
                      transform: `rotate(${index * (360 / 28)}deg) translate(8rem) rotate(${index * (360 / 28)}deg)`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              {/* Rectangular Box */}
              <div className="absolute top-1/2 left-1/2 w-80 transform -translate-x-1/2 -translate-y-1/2 z-20 ml-0">
    <img
      src="/circleimage3.png"
      alt="Descriptive Text"
      className="w-full h-full object-cover rounded-lg mb-12"
    />
  </div>
  <div className="absolute top-1/2 left-1/2 w-80 h-14 bg-gray-800 text-white flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg">
    Let's Go .......................................... Let's Get It
  </div>
  
            </div>
          </div>
        );
      }