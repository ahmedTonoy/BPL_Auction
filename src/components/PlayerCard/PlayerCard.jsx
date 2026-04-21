import bat from "../../assets/bat.png";
import ball from "../../assets/ball.png";
import gloves from "../../assets/gloves.png";
import allRounder from "../../assets/all-rounder.png";

const PlayerCard = ({
  player,
  selectedPlayerIds,
  setSelectedPlayerIds,
  availableCoins,
  setAvailableCoins,
}) => {
  const {
    id,
    player_name,
    player_image,
    country,
    country_flag,
    role,
    rating,
    batting_style,
    bowling_style,
    price_usd,
  } = player;

  const isSelected = selectedPlayerIds.has(player.id);

  const handleClick = (playerId) => {
    if (availableCoins < parseInt(price_usd)) {
      console.log("Hello");
      alert("Not sufficient coin to buy this player");
    } else {
      setSelectedPlayerIds((prev) => {
        const newSet = new Set(prev);

        if (!newSet.has(playerId)) {
          newSet.add(playerId);
        }

        return newSet;
      });

      if (!isSelected) {
        setAvailableCoins(availableCoins - parseInt(price_usd));
      }
    }
  };

  return (
    <div className="card border border-gray-400 p-4">
      <figure className="rounded-xl">
        <img
          className="w-full h-85 object-cover"
          src={player_image}
          alt="Player's Image"
        />
      </figure>
      <div className="flex items-center gap-4 my-2 font-bold text-lg">
        <img
          className="w-7 h-7"
          src={
            role === "Batter"
              ? bat
              : role === "Bowler"
                ? ball
                : role === "Wicket-Keeper"
                  ? gloves
                  : allRounder
          }
          alt=""
        />
        <h2 className="">{player_name}</h2>
      </div>
      <div className="flex justify-between items-center pb-3 border-b-2 border-b-[#e5e0e0]">
        <div className="flex gap-3">
          <img src={country_flag} alt="Flag" />
          <p>{country}</p>
        </div>
        <button className="btn bg-[#1313130d]">{role}</button>
      </div>
      <div className="flex justify-between items-center mt-3 mb-2 font-bold">
        <p>Rating</p>
        <span className="w-10">{rating}</span>
      </div>
      <div className="my-2 font-bold grid grid-cols-1 gap-1.5">
        <p>{role !== "Bowler" && batting_style}</p>
        <p>{(role === "Bowler" || role === "All-Rounder") && bowling_style}</p>
      </div>
      <div className="flex justify-between items-center my-2 font-bold">
        <p>
          Price: $<span>{price_usd}</span>
        </p>
        <button
          onClick={() => handleClick(id)}
          className={`btn ${isSelected ? "bg-[#81fc1dee]" : "bg-[#b182f2] text-white"}`}
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
