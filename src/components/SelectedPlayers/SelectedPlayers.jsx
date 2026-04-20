import PlayerCard from "../PlayerCard/PlayerCard";

const SelectedPlayers = ({
  selectedPlayers,
  selectedPlayerIds,
  setSelectedPlayerIds,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 px-4 md:px-0">
      {selectedPlayers.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          selectedPlayerIds={selectedPlayerIds}
          setSelectedPlayerIds={setSelectedPlayerIds}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
