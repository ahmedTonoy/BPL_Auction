import { Suspense, useState, lazy } from "react";
import "./App.css";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Navbar from "./components/Navbar/Navbar";
import SectionSelector from "./components/SectionSelector/SectionSelector";

const PlayersContainer = lazy(
  () => import("./components/PlayersContainer/PlayersContainer"),
);

function App() {
  const [isAvailablePage, setIsAvailablePage] = useState(true);
  const [selectedPlayerIds, setSelectedPlayerIds] = useState(new Set());

  return (
    <>
      <Navbar />
      <HeroBanner />

      <SectionSelector
        isAvailablePage={isAvailablePage}
        setIsAvailablePage={setIsAvailablePage}
        selectedPlayerIds={selectedPlayerIds}
      />

      <Suspense
        fallback={
          <div className="mx-auto w-5">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <PlayersContainer
          isAvailablePage={isAvailablePage}
          selectedPlayerIds={selectedPlayerIds}
          setSelectedPlayerIds={setSelectedPlayerIds}
        />
      </Suspense>
    </>
  );
}

export default App;
