import PlayerCard from "../PlayerCard/PlayerCard";
import { toast } from "react-toastify";

const AvailablePlayers = ({
  availablePlayers,
  selectedPlayerIds,
  setSelectedPlayerIds,
  availableCoins,
  setAvailableCoins,
}) => {
  const handleSelectPlayer = (player) => {
    const price = Number(player.price_usd);

    if (availableCoins < price) {
      toast.warn("Not sufficient coin to buy this player");
      return;
    }

    if (selectedPlayerIds.size === 6) {
      toast.error("You can't select more than six players");
      return;
    }

    if (selectedPlayerIds.has(player.id)) return;

    setSelectedPlayerIds((prev) => {
      const newSet = new Set(prev);
      newSet.add(player.id);
      return newSet;
    });

    setAvailableCoins((coins) => coins - price);
    toast.success(`${player.player_name} successfully selected`);
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 px-4 md:px-0">
      {availablePlayers.map((player) => {
        const isSelected = selectedPlayerIds.has(player.id);

        return (
          <PlayerCard
            key={player.id}
            player={player}
            isSelected={isSelected}
            onSelect={handleSelectPlayer}
          />
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
