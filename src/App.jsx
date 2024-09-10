import Contact from "./components/Contact/Contact.jsx";
import Creator from "./components/Creator/Creator.jsx";
import HowItWorks from "./components/How-it-works/HowItWorks.jsx";
import KeyHighlights from "./components/Key-Highlights/KeyHighlights.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Roadmap from "./components/RoadMap/RoadMap.jsx";

function App() {
  return (
    <div className="main absolute w-full">
      <Navbar />
      <Creator />
      <HowItWorks />
      <KeyHighlights />
      <Roadmap />
      <Contact />
      <div className="bg-[#0000008A] text-[#ffffff81] urbanist-400 text-center tracking-wider py-2">
      © copyright reserved to earnr.live
      </div>
    </div>
  );
}

export default App;
