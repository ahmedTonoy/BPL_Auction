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
  const [availableCoins, setAvailableCoins] = useState(0);

  return (
    <>
      <Navbar availableCoins={availableCoins} />
      <HeroBanner setAvailableCoins={setAvailableCoins} />

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
          setAvailableCoins={setAvailableCoins}
        />
      </Suspense>
    </>
  );
}

export default App;
