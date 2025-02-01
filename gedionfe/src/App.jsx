import "./App.css";
import {
  firstbg,
  fourthbg,
  secbg,
  spotifybtn,
  thirdbg,
  youtubebtn,
} from "./assets";
import AboutMe from "./components/AboutMe";
import Button from "./components/Button";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ReleaseSection from "./components/ReleaseSection";
import TopHits from "./components/TopHits";
import useDarkMode from "./utils/hooks/useTheme";
import { NavList } from "./utils/Textconstants";

function App() {
  const { theme } = useDarkMode();

  const handleYouTube = () => {
    console.log("handleYouTube clicked");
  };
  

  return (
    <>
      <div class="absolute inset-0 flex flex-col z-[-1]">
        <img
          src={firstbg}
          alt="Background Image 1"
          class="w-full flex-1 object-cover "
        />
        <img
          src={secbg}
          alt="Background Image 2"
          class="w-full flex-1 object-cover "
        />
        <img
          src={thirdbg}
          alt="Background Image 3"
          class="w-full flex-1 object-cover "
        />
        <img
          src={fourthbg}
          alt="Background Image 4"
          class="w-full flex-1 object-cover "
        />
      </div>

      <div class="relative z-10 text-white text-center m-auto">
        <NavBar list={NavList} />
        <HeroSection />
        <ReleaseSection />
        <TopHits />
        <AboutMe />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
