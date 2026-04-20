import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  availablePlayers,
  selectedPlayerIds,
  setSelectedPlayerIds,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 px-4 md:px-0">
      {availablePlayers.map((player) => (
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

export default AvailablePlayers;
