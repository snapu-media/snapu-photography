
import Navbar from "./componentssecond/Navbar";
import { ThreeDCardDemo } from "./componentssecond/ThreeDCardDemo";
import { AuroraBackground } from "./home/page";
import { MaskContainer } from "./componentssecond/MaskContainer";
import { FocusCards } from "./componentssecond/focus-cards";
import {TextRevealMain} from './componentssecond/TextRevealMain'
import {StickyRevealMain} from './componentssecond/stickyreveal'
import SideNavbar from "./componentssecond/SideNavBar"
import MapPage from "./componentssecond/MapPage"




export const metadata = {
  title: "snapu photography",
  description: "My description",
}

export default function Home() {
  return (
    <div>
      
      <AuroraBackground/>
      <div className="bg-gradient-to-b from-[#fff] via-[#00A99D] to-[#FFF] rounded-lg">
      <MaskContainer revealText={
  <div className="text-black text-6xl font-bold text-center space-y-3">
    Photography that<br />
    Speaks and Inspires<br />
    Through Every Frame
  </div>
} size={20} revealSize={400}>
  <div className="text-white text-5xl font-semibold text-center space-y-3">
    Where Every Shot<br />
    Tells a Story<br />
    Capturing Moments that Last
  </div>
</MaskContainer>

</div>



    <TextRevealMain />
    <StickyRevealMain/>

    <FocusCards/>
    <ThreeDCardDemo/>
    <MapPage/>

      <main>
        <h2>Welcome to SnapU Media</h2>
        
      </main>
    </div>
  );
}
