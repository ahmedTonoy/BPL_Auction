import { toast } from "react-toastify";
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayerIds,
  setAvailableCoins,
}) => {
  const handleDeletePlayer = (player) => {
    const price = Number(player.price_usd);

    setSelectedPlayerIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(player.id);
      return newSet;
    });

    setAvailableCoins((prev) => prev + price);
    toast(`${player.player_name} removed from the selected list`);
  };

  return (
    <div className="grid grid-cols-1 gap-4 px-4 md:px-0">
      {selectedPlayers.map((player) => (
        <SelectedPlayerCard
          key={player.id}
          player={player}
          onDelete={handleDeletePlayer}
        ></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
