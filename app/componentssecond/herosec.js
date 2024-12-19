export default function HeroSec() {
    return (
      <div>
        {/* First Section - Image on the right, content on the left */}
        <section className="start-sec h-[390px] p-8 flex flex-col justify-center bg-white">
          <div className="main-sec flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-teal-400 to-indigo-900 rounded-lg p-8 space-y-8 md:space-x-12">
            {/* Left Section */}
            <div className="left p-5 h-[300px] w-full md:w-[500px] flex flex-col justify-center space-y-5">
              <p className="txt1 text-2xl md:text-3xl font-bold text-white">
                Capture Your Moments with Perfection
              </p>
              <p className="txt2 text-base md:text-lg text-white">
                You've just found the perfect photography partner! Let us turn your precious moments into timeless memories.
              </p>
              <div className="btn">
                <button className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg">
                  Let's Create Magic
                </button>
              </div>
            </div>
  
            {/* Right Section with Bubble Curves */}
            <div className="right p-5 h-[300px] w-full md:w-[300px] flex flex-col justify-center space-y-5 items-center bg-gradient-to-br from-blue-200 to-gray-300 shadow-lg relative overflow-hidden"
                 style={{
                    borderBottomLeftRadius: '50%',
                    borderTopRightRadius: '50%',
                    borderTopLeftRadius: '100px',
                    borderBottomRightRadius: '100px'
                 }}>
              <img
                src="/camera.png" // Use the imported camera image path
                alt="Camera Image"
                className="w-[50vw] md:w-[50%] filter drop-shadow-2xl z-10"
              />
            </div>
          </div>
        </section>
  
        {/* Second Section - Image on the left, content on the right */}
        <section className="start-sec h-[390px] p-8 flex flex-col justify-center bg-white">
          <div className="main-sec flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-teal-400 to-indigo-900 rounded-lg p-8 space-y-8 md:space-x-12">
            {/* Left Section with Bubble Curves */}
            <div className="left p-5 h-[300px] w-full md:w-[300px] flex flex-col justify-center space-y-5 items-center bg-gradient-to-br from-blue-200 to-gray-300 shadow-lg relative overflow-hidden"
                 style={{
                    borderBottomLeftRadius: '50%',
                    borderTopRightRadius: '50%',
                    borderTopLeftRadius: '100px',
                    borderBottomRightRadius: '100px'
                 }}>
              <img
                src="/portrait.png" // Use a different image path for variety
                alt="Portrait Image"
                className="w-[50vw] md:w-[50%] filter drop-shadow-2xl z-10"
              />
            </div>
  
            {/* Right Section */}
            <div className="right p-5 h-[300px] w-full md:w-[500px] flex flex-col justify-center space-y-5">
              <p className="txt1 text-2xl md:text-3xl font-bold text-white">
                Your Best Memories in Every Shot
              </p>
              <p className="txt2 text-base md:text-lg text-white">
                From stunning landscapes to beautiful portraits, we capture every moment with the utmost care and creativity.
              </p>
              <div className="btn">
                <button className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg">
                  Explore Our Gallery
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Third Section - Image on the right, content on the left */}
        <section className="start-sec h-[390px] p-8 flex flex-col justify-center bg-white">
          <div className="main-sec flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-teal-400 to-indigo-900 rounded-lg p-8 space-y-8 md:space-x-12">
            {/* Left Section */}
            <div className="left p-5 h-[300px] w-full md:w-[500px] flex flex-col justify-center space-y-5">
              <p className="txt1 text-2xl md:text-3xl font-bold text-white">
                Unforgettable Photography Experiences
              </p>
              <p className="txt2 text-base md:text-lg text-white">
                Let’s create lasting memories together. From weddings to events, we are your trusted photography partner.
              </p>
              <div className="btn">
                <button className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg">
                  Book a Session
                </button>
              </div>
            </div>
  
            {/* Right Section with Bubble Curves */}
            <div className="right p-5 h-[300px] w-full md:w-[300px] flex flex-col justify-center space-y-5 items-center bg-gradient-to-br from-blue-200 to-gray-300 shadow-lg relative overflow-hidden"
                 style={{
                    borderBottomLeftRadius: '50%',
                    borderTopRightRadius: '50%',
                    borderTopLeftRadius: '100px',
                    borderBottomRightRadius: '100px'
                 }}>
              <img
                src="/event.png" // Use a different image for variety
                alt="Event Photography"
                className="w-[50vw] md:w-[50%] filter drop-shadow-2xl z-10"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
  