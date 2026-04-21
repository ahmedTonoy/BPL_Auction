import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayerIds,
  availableCoins,
  setAvailableCoins,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 md:px-0">
      {selectedPlayers.map((player) => (
        <SelectedPlayerCard
          key={player.id}
          player={player}
          setSelectedPlayerIds={setSelectedPlayerIds}
          availableCoins={availableCoins}
          setAvailableCoins={setAvailableCoins}
        ></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
