import { use, useMemo } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("./players.json");
  return res.json();
};

const playersPromise = fetchPlayers();

const PlayersContainer = ({
  isAvailablePage,
  selectedPlayerIds,
  setSelectedPlayerIds,
}) => {
  const availablePlayers = use(playersPromise);

  const playersMap = useMemo(() => {
    const map = new Map();
    availablePlayers.forEach((p) => map.set(p.id, p));
    return map;
  }, [availablePlayers]);

  const selectedPlayers = useMemo(() => {
    return Array.from(selectedPlayerIds).map((id) => playersMap.get(id));
  }, [selectedPlayerIds, playersMap]);

  return (
    <>
      {isAvailablePage ? (
        <AvailablePlayers
          availablePlayers={availablePlayers}
          selectedPlayerIds={selectedPlayerIds}
          setSelectedPlayerIds={setSelectedPlayerIds}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayerIds={setSelectedPlayerIds}
        />
      )}
    </>
  );
};

export default PlayersContainer;
