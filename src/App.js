import "./App.css";
import Accelerate from "./pages/Accelerate";
import Footer from "./pages/Footer";
import GoodBye from "./pages/GoodBye";
import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import MakertTools from "./pages/MakertTools";
import MarketRec from "./pages/MarketRec";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div style={{ margin: "80px 40px" }}>
        <MarketRec />
      </div>
      <div style={{ margin: "80px 120px" }}>
        <Accelerate />
      </div>
      <div style={{ margin: "80px 40px" }}>
        <MakertTools />
      </div>
      <div style={{ margin: "80px 40px" }}>
        <GoodBye />
      </div>
      <Footer />
    </div>
  );
}

export default App;
